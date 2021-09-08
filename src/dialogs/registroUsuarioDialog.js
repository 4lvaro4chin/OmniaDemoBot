const { ComponentDialog, WaterfallDialog, TextPrompt } = require("botbuilder-dialogs");

const WATERFALL_DIALOG = 'waterfallDialog';
const TEXT_PROMPT = 'textPrompt';

class RegistroUsuarioDialog extends ComponentDialog {
    constructor(dialogId) {
        super(dialogId)

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.unameStep.bind(this),
            this.firstNameStep.bind(this),
            this.lastNameStep.bind(this),
            this.emailNameStep.bind(this),
            this.finalStep.bind(this)
        ]))
            .addDialog(new TextPrompt(TEXT_PROMPT));

        this.initialDialogId = WATERFALL_DIALOG;
    }

    async unameStep(stepContext) {
        const userData = stepContext.options;

        const promptText = 'Ingresar user ID:';
        return await stepContext.prompt(TEXT_PROMPT, { prompt: promptText });
    }

    async firstNameStep(stepContext) {
        const userData = stepContext.options;

        userData.uname = stepContext.result;

        const promptText = 'Ingresar Nombres:';
        return await stepContext.prompt(TEXT_PROMPT, { prompt: promptText });
    }

    async lastNameStep(stepContext) {
        const userData = stepContext.options;

        userData.firstName = stepContext.result;

        const promptText = 'Ingresar Apellidos:';
        return await stepContext.prompt(TEXT_PROMPT, { prompt: promptText });
    }

    async emailNameStep(stepContext) {
        const userData = stepContext.options;

        userData.lastName = stepContext.result;

        const promptText = 'Ingresar email:';
        return await stepContext.prompt(TEXT_PROMPT, { prompt: promptText });
    }

    async finalStep(stepContext) {
        const userData = stepContext.options;

        userData.email = stepContext.result;

        const message = `Se ingresaron los datos:
        \n**User ID:** ${ userData.uname }
        \n**Nombres:** ${ userData.firstName }
        \n**Apellidos:** ${ userData.lastName }
        \n**Email:** ${ userData.email }`;
        await stepContext.context.sendActivity(message);

        return await stepContext.endDialog();
    }
}

module.exports.RegistroUsuarioDialog = RegistroUsuarioDialog;