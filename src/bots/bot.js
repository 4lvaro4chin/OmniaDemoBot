const { ActivityHandler, CardFactory, MessageFactory } = require('botbuilder');
const { Cards } = require('../cards/card');

class OmniaBot extends ActivityHandler {
    constructor() {
        super();

        this.onMessage(async (context, next) => {
            let userName = context.activity.from.name;
            await context.sendActivity(MessageFactory.text(`Hola **${userName}**, has ingresado el texto: **${ context.activity.text }** `));        
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });    

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
        
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                    let userName = membersAdded[cnt].name;
                    let card = new Cards();
                    await context.sendActivity({ attachments: [CardFactory.adaptiveCard(await card.welcome(userName))]});
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }
}

module.exports.OmniaBot = OmniaBot;