const { WaterfallDialog, TextPrompt, NumberPrompt, DateTimePrompt, ChoicePrompt, ChoiceFactory, ListStyle } = require("botbuilder-dialogs");
const { CardFactory } = require("botbuilder");
const { OdataConnection } = require('../odata/odataConnection');
const { Cards } = require('../cards/card');
const { HelperDialog } = require("./helperDialog");

const WATERFALL_DIALOG = 'waterfallDialog';
const TEXT_PROMPT = 'textPrompt';
const EMAIL_TEXT_PROMPT = 'emailTextPrompt';
const NUMBER_PROMPT = 'numberPrompt';
const DATE_TIME_PROMPT = 'dateTimePrompt';
const CHOICE_PROMPT = 'choicePrompt';

class RegistroUsuarioDialog extends HelperDialog {
    constructor(dialogId) {
        super(dialogId)

        this.addDialog(new WaterfallDialog(WATERFALL_DIALOG, [
            this.unameStep.bind(this),
            this.firstNameStep.bind(this),
            this.lastNameStep.bind(this),
            this.emailStep.bind(this),
            this.celphoneStep.bind(this),
            this.dateBirthStep.bind(this),
            this.confirmStep.bind(this),
            this.finalStep.bind(this)
        ]))
            .addDialog(new TextPrompt(TEXT_PROMPT))
            .addDialog(new TextPrompt(EMAIL_TEXT_PROMPT, this.emailPromptValidator))
            .addDialog(new NumberPrompt(NUMBER_PROMPT, this.cellphonePromptValidator))
            .addDialog(new DateTimePrompt(DATE_TIME_PROMPT))
            .addDialog(new ChoicePrompt(CHOICE_PROMPT));

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

    async emailStep(stepContext) {
        const userData = stepContext.options;

        userData.lastName = stepContext.result;

        const promptText = 'Ingresar email:';
        return await stepContext.prompt(EMAIL_TEXT_PROMPT, { prompt: promptText });
    }

    async celphoneStep(stepContext) {
        const userData = stepContext.options;

        userData.email = stepContext.result;

        const retryPromptText = `Ingresar n??mero de celular v??lido.`
        const numberText = 'Ingresar n??mero de celular:';
        return await stepContext.prompt(NUMBER_PROMPT, { prompt: numberText, retryPrompt: retryPromptText });
    }

    async dateBirthStep(stepContext) {
        const userData = stepContext.options;

        userData.celphone = stepContext.result;
        
        const promptText = 'Ingresar fecha de nacimiento:';
        return await stepContext.prompt(DATE_TIME_PROMPT, { prompt: promptText });
    }

    async confirmStep(stepContext) {
        const userData = stepContext.options;

        userData.dateBirth = stepContext.result;
        userData.dateBirthJSON = new Date(userData.dateBirth[0].value).valueOf();

        return await stepContext.prompt(CHOICE_PROMPT, {
            choices: ChoiceFactory.toChoices(['Si','No']),
            prompt: 'Se crear?? un registro con los datos ingresados. ??Desea continuar?.',
            style: ListStyle.heroCard
        });        
    }

    async finalStep(stepContext) {
        const userData = stepContext.options;

        if (stepContext.result.value === 'Si') {
            let odataConnection = new OdataConnection();
            let odataResult = await odataConnection.createUser(userData);

            switch(odataResult.type){
                case 'S':
                    const message = `Se ingresaron los datos:
                    \n**User ID:** ${ userData.uname }
                    \n**Nombres:** ${ userData.firstName }
                    \n**Apellidos:** ${ userData.lastName }
                    \n**Email:** ${ userData.email }
                    \n**Celular:** ${ userData.celphone }
                    \n**Fecha de nacimiento:** ${ userData.dateBirth[0].value }`;
                    await stepContext.context.sendActivity(message);
                    break;
                case 'E':         
                    let card = new Cards();
                    await stepContext.context.sendActivity({ attachments: [CardFactory.adaptiveCard(await card.errorMessage(odataResult.message))]});
                    break;
            }
        }

        return await stepContext.endDialog();
    }

    async emailPromptValidator(promptContext) {
        if (promptContext.recognized.succeeded) {        
            const email = promptContext.recognized.value;
            if (!RegistroUsuarioDialog.validateEmail(email)) {
                promptContext.context.sendActivity('Email ingresado no es v??lido.');
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    static validateEmail(email) {
        const re = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))){2,6}$/i;
        return re.test(email);
    }

    async cellphonePromptValidator(promptContext){
        return promptContext.recognized.succeeded && promptContext.recognized.value.toString().length == 9
    }
}

module.exports.RegistroUsuarioDialog = RegistroUsuarioDialog;