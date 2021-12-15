const { WaterfallDialog, TextPrompt } = require("botbuilder-dialogs");
const { CardFactory, AttachmentLayoutTypes } = require("botbuilder");
const { Cards } = require('../cards/card'); 
const { AwsConnection } = require("../aws/awsConnection");
const { HelperDialog } = require("./helperDialog");

const TEXT_PROMPT = 'textPrompt';
const WATERFALL_DIALOG = 'waterfallDialog';

class DuaHeaderDialog extends HelperDialog {
    constructor(dialogId) {
        super(dialogId);

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.getHeaderStep.bind(this),
            this.getDetailStep.bind(this),
            this.finalStep.bind(this)
        ]))
            .addDialog(new TextPrompt(TEXT_PROMPT, this.promptValidator));

        this.initialDialogId = WATERFALL_DIALOG; 
    }

    async initialStep(stepContext) {
        const dialogData = stepContext.options;

        let card = new Cards();
        await stepContext.context.sendActivity({ attachments: [CardFactory.adaptiveCard(await card.formDuaHeader())]});

        const promptText = 'Por favor indicar una acción a ejecutar.';
        return await stepContext.prompt(TEXT_PROMPT, { prompt: promptText });
    }

    async getHeaderStep(stepContext) {
        const dialogData = stepContext.options;

        switch(stepContext.context.activity.value.id) {            
            case 'actionConsultar':
                let awsConnection = new AwsConnection;
                let awsResult = await awsConnection.getDuaHeader(stepContext.context.activity.value);

                switch(awsResult.type){
                    case 'S':
                        dialogData.parametersDua = awsResult.response.body.parameters;
                        let cardSuccess = new Cards();
                        await stepContext.context.sendActivity({ attachments: [CardFactory.adaptiveCard(await cardSuccess.dataDUAHeader(awsResult.response.body))]});
                        
                        const promptText = 'Por favor indicar una acción a ejecutar.';
                        return await stepContext.prompt(TEXT_PROMPT, { prompt: promptText });
                    default:
                        let cardError = new Cards();
                        await stepContext.context.sendActivity({ attachments: [CardFactory.adaptiveCard(await cardError.errorMessage(awsResult.message))]});
                        return await stepContext;
                }
            default:
                return await stepContext;
        }
    }

    async getDetailStep(stepContext) {
        const dialogData = stepContext.options;

        switch(stepContext.context.activity.value.id) {            
            case 'actionConsultar':
                let awsConnection = new AwsConnection;

                let cardSerie = new Cards();
                let cardAttachments = [];
                let index = 0;

                while (index < parseInt(dialogData.parametersDua.series, 10)) {
                    index ++;
                    let awsResult = await awsConnection.getDuaDetail(index, dialogData.parametersDua);
                    cardAttachments.push(CardFactory.adaptiveCard(await cardSerie.dataDUADetail(awsResult.response.body)));
                }

                await stepContext.context.sendActivity({ attachments: cardAttachments,
                                                         attachmentLayout: AttachmentLayoutTypes.Carousel});

                return await stepContext;
            default:
                return await stepContext;
        }
    }

    async finalStep(stepContext){
        const dialogData = stepContext.options;
    
        return await stepContext.endDialog();
    }

    async promptValidator(promptContext){
        const activity = promptContext.context._activity;
        
        if(activity.value.id === 'actionCancelar'){
            console.log(activity.value.id);
            return activity.type === 'message';
        }else{
            console.log(activity.value.id);
            return activity.type === 'message';
        }

        return activity.type === 'message' //&& activity.channelData.postBack;
    }
}

module.exports.DuaHeaderDialog = DuaHeaderDialog;