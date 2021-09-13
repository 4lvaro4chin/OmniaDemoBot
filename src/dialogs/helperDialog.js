const { InputHints } = require('botbuilder');
const { ComponentDialog, DialogTurnStatus } = require("botbuilder-dialogs");

class HelperDialog extends ComponentDialog {
    constructor(dialogId) {
        super(dialogId);
    }

    async onContinueDialog(dialogContext) {
        const result = await this.interruption(dialogContext);
        return await super.onContinueDialog(dialogContext);
    }

    async interruption(dialogContext) {
        if(dialogContext.context.activity.text) {
            const msgText = dialogContext.context.activity.text.toLowerCase();

            switch(msgText) {
                case 'help':
                    const helpMsgText = `Si necesita reiniciar la conversación utilice: **cancelar**, **finalizar** o **reiniciar**.`;
                    await dialogContext.context.sendActivity(helpMsgText, helpMsgText, InputHints.ExpectingInput);
                    return { status: DialogTurnStatus.waiting };
                case 'cancelar':
                    return await dialogContext.cancelAllDialogs();
            }
        }
    }
}

module.exports.HelperDialog = HelperDialog;