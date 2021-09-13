const { WaterfallDialog, NumberPrompt } = require("botbuilder-dialogs");
const { DrawbackHeader } = require('./drawbackHeader');
const { HelperDialog } = require("./helperDialog");

const NUMBER_PROMPT = 'numberPrompt';
const DRAWBACK_HEADER = 'drawbackHeader';
const WATERFALL_DIALOG = 'waterfallDialog';

class MenuDrawbackDialog extends HelperDialog {
    constructor(dialogId) {
        super(dialogId);

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.callOptionStep.bind(this),
            this.finalStep.bind(this)
        ]))
            .addDialog(new NumberPrompt(NUMBER_PROMPT, this.optionPromptValidator))
            .addDialog(new DrawbackHeader(DRAWBACK_HEADER));

        this.initialDialogId = WATERFALL_DIALOG; 
    }

    async initialStep(stepContext) {
        const dialogData = stepContext.options;

        const promptText = `Elige una de las opciones:
        \n**1.** Ver datos de cabecera
        \n**2.** Ver detalle
        \n**3.** Ver series
        \n Ingresa el número.`;

        const retryPromptText = `Ingresar una opción válida.`

        return await stepContext.prompt(NUMBER_PROMPT, { prompt: promptText, retryPrompt: retryPromptText });
    }

    async callOptionStep(stepContext) {
        const dialogData = stepContext.options;

        dialogData.option = stepContext.result;

        switch(dialogData.option.toString()) {
            case '1':
                console.log('Ver Drawback Header');
                return await stepContext.beginDialog(DRAWBACK_HEADER);
            case '2':
                console.log('Ver Drawback Detail');
            case '3':
                console.log('Ver Drawback Series');
            default:
                return await stepContext.endDialog();
        }
    }

    async finalStep(stepContext) {
        console.log('Fin Menu Inicial Dialog');
        return await stepContext.endDialog();
    }

    async optionPromptValidator(promptContext) {
        return promptContext.recognized.succeeded && promptContext.recognized.value > 0 && promptContext.recognized.value < 4;
    }
}

module.exports.MenuDrawbackDialog = MenuDrawbackDialog;