const { WaterfallDialog, TextPrompt } = require("botbuilder-dialogs");
const { CardFactory } = require("botbuilder");
const { Cards } = require('../cards/card'); 
const { AwsConnection } = require("../aws/awsConnection");
const { HelperDialog } = require("./helperDialog");

const TEXT_PROMPT = 'textPrompt';
const WATERFALL_DIALOG = 'waterfallDialog';

class DrawbackHeader extends HelperDialog {
    constructor(dialogId) {
        super(dialogId);

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.getHeaderStep.bind(this),
            this.finalStep.bind(this)
        ]))
            .addDialog(new TextPrompt(TEXT_PROMPT, this.promptValidator));

        this.initialDialogId = WATERFALL_DIALOG; 
    }

    async initialStep(stepContext) {
        const dialogData = stepContext.options;

        let card = new Cards();
        await stepContext.context.sendActivity({ attachments: [CardFactory.adaptiveCard(await card.formDrawbackHeader())]});

        const promptText = 'Esperando que ingrese los datos.';
        return await stepContext.prompt(TEXT_PROMPT, { prompt: promptText });
    }

    async getHeaderStep(stepContext) {
        const dialogData = stepContext.options;

        // get adaptive card input value
        //console.log(stepContext.context.activity.value);

        switch(stepContext.context.activity.value.id) {            
            case 'actionConsultar':
                let awsConnection = new AwsConnection;
                let awsResult = await awsConnection.getDamHeader(stepContext.context.activity.value);

                switch(awsResult.type){
                    case 'S':
                        let cardSuccess = new Cards();
                        await stepContext.context.sendActivity({ attachments: [CardFactory.adaptiveCard(await cardSuccess.dataDrawbackHeader(awsResult.response.body))]});
                        break;
                    default:
                        let cardError = new Cards();
                        await stepContext.context.sendActivity({ attachments: [CardFactory.adaptiveCard(await cardError.errorMessage(awsResult.message))]});
                        break;
                }
                break;
        }

        return await stepContext;
    }

    async finalStep(stepContext){
        const dialogData = stepContext.options;
    
        return await stepContext.endDialog();
    }

    async promptValidator(promptContext){
        const activity = promptContext.context._activity;
        return activity.type === 'message' && activity.channelData.postBack;
    }
}

module.exports.DrawbackHeader = DrawbackHeader;