const { WaterfallDialog, NumberPrompt } = require("botbuilder-dialogs");
const { DuaHeader } = require('./DuaHeader');
const { HelperDialog } = require("./helperDialog");

const NUMBER_PROMPT = 'numberPrompt';
const DUA_HEADER = 'duaHeader';
const WATERFALL_DIALOG = 'waterfallDialog';

class MenuDuaDialog extends HelperDialog {
    constructor(dialogId) {
        super(dialogId);

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.callOptionStep.bind(this),
            this.finalStep.bind(this)
        ]))
            .addDialog(new NumberPrompt(NUMBER_PROMPT, this.optionPromptValidator))
            .addDialog(new DuaHeader(DUA_HEADER));

        this.initialDialogId = WATERFALL_DIALOG; 
    }

    async initialStep(stepContext) {
        const dialogData = stepContext.options;

        const promptText = `Elige una de las opciones:
        \n**1.** Consultar DUA
        \n**2.** Consultar Series
        \n Ingresa el número.`;

        const retryPromptText = `Ingresar una opción válida.`

        return await stepContext.prompt(NUMBER_PROMPT, { prompt: promptText, retryPrompt: retryPromptText });
    }

    async callOptionStep(stepContext) {
        const dialogData = stepContext.options;

        dialogData.option = stepContext.result;

        switch(dialogData.option.toString()) {
            case '1':
                console.log('Consultar DUA');
                return await stepContext.beginDialog(DUA_HEADER);
            case '2':
                console.log('Consultar Series');
            default:
                return await stepContext.endDialog();
        }
    }

    async finalStep(stepContext) {
        console.log('Fin Menu Inicial Dialog');
        return await stepContext.endDialog();
    }

    async optionPromptValidator(promptContext) {
        return promptContext.recognized.succeeded && promptContext.recognized.value > 0 && promptContext.recognized.value < 3;
    }
}

module.exports.MenuDuaDialog = MenuDuaDialog;