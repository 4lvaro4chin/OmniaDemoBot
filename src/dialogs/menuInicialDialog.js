const { WaterfallDialog, NumberPrompt } = require("botbuilder-dialogs");
const { ReinicioSapDialog } = require("./reinicioSapDialog");
const { DesbloqueoSapDialog } = require("./desbloqueoSapDialog");
const { RegistroUsuarioDialog } = require("./registroUsuarioDialog");
const { MenuDuaDialog } = require("./menuDuaDialog");
const { HelperDialog } = require("./helperDialog");

const NUMBER_PROMPT = 'numberPrompt';
const REINICIO_SAP_DIALOG = 'reinicioSapDialog';
const DESBLOQUEO_SAP_DIALOG = 'desbloqueoSapDialog';
const REGISTRO_USUARIO_DIALOG = 'registroUsuarioDialog';
const MENU_DUA_DIALOG = 'menuDuaDialog';
const WATERFALL_DIALOG = 'waterfallDialog';

class MenuInicialDialog extends HelperDialog {
    constructor(dialogId){
        super(dialogId);

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.initialStep.bind(this),
            this.callOptionStep.bind(this),
            this.finalStep.bind(this)
        ]))
            .addDialog(new NumberPrompt(NUMBER_PROMPT, this.optionPromptValidator))
            .addDialog(new DesbloqueoSapDialog(DESBLOQUEO_SAP_DIALOG))
            .addDialog(new ReinicioSapDialog(REINICIO_SAP_DIALOG))
            .addDialog(new RegistroUsuarioDialog(REGISTRO_USUARIO_DIALOG))
            .addDialog(new MenuDuaDialog(MENU_DUA_DIALOG));

        this.initialDialogId = WATERFALL_DIALOG; 
    }

    async initialStep(stepContext) {
        const dialogData = stepContext.options;

        const promptText = `¿Cómo te puedo ayudar?
        \n**1.** Desbloqueo de usuario SAP
        \n**2.** Reinicio de contraseña SAP
        \n**3.** Registrar usuario
        \n**4.** Consultas DUA (SUNAT)
        \n Ingresa el número.`;

        const retryPromptText = `Ingresar una opción válida.`

        return await stepContext.prompt(NUMBER_PROMPT, { prompt: promptText, retryPrompt: retryPromptText });
    }

    async callOptionStep(stepContext) {
        const dialogData = stepContext.options;

        dialogData.option = stepContext.result;

        switch(dialogData.option.toString()) {
            case '1':
                console.log('Desbloqueo Usuario SAP');
                return await stepContext.beginDialog(DESBLOQUEO_SAP_DIALOG);
            case '2':
                console.log('Reinicio Usuario SAP');
                return await stepContext.beginDialog(REINICIO_SAP_DIALOG);
            case '3':
                console.log('Registrar Usuario');
                return await stepContext.beginDialog(REGISTRO_USUARIO_DIALOG);
            case '4':
                console.log('Consultas DUA (SUNAT)');
                return await stepContext.beginDialog(MENU_DUA_DIALOG);
            default:
                return await stepContext.endDialog();
        }
    }

    async finalStep(stepContext) {
        console.log('Fin Menu Inicial Dialog');
        return await stepContext.endDialog();
    }

    async optionPromptValidator(promptContext) {
        return promptContext.recognized.succeeded && promptContext.recognized.value > 0 && promptContext.recognized.value < 5;
    }
}

module.exports.MenuInicialDialog = MenuInicialDialog;