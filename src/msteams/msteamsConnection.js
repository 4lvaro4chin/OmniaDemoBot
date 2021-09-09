const  nodefetch =  require('node-fetch')
const { URLSearchParams } = require('url');

class MsteamsConnection {
    constructor() {

    }

    async getAzureToken(){
        const host_url = 'https://login.microsoftonline.com/botframework.com/oauth2/v2.0/token'
        const params = new URLSearchParams();
    
        params.append('grant_type', 'client_credentials');
        params.append('client_id', process.env.MicrosoftAppId);
        params.append('client_secret', process.env.MicrosoftAppPassword);
        params.append('scope', 'https://api.botframework.com/.default');
    
        const resultToken = await nodefetch (host_url,{
            method: 'POST',
            body:    params,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then(res => res.json())
        .then(json => {return json.access_token})
        .catch(err => {return err});
    
        return resultToken;
    }

    async getAzureEmail(azureToken,conversationId){
        var host_url = `https://smba.trafficmanager.net/emea/v3/conversations/${ conversationId }/members/`;
        
        const resultEmail = await nodefetch (host_url,{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${ azureToken }`, 
                'Accept' : 'application/json' 
            }
        })
        .then(res => res.json())
        .then(json => {return json[0].email})
        .catch(err => {return err});
    
        return resultEmail;
    }
}

module.exports.MsteamsConnection = MsteamsConnection