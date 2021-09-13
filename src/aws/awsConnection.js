const axios = require('axios');

class AwsConnection {
    constructor() {

    }

    async getDamHeader(dataForm) {
        let host_url = process.env.AwsDrawbackHeader;

        let bodyJSON = {
            "user_id" : `20475835604`,
            "customs" : `${ dataForm.inputAduana }`,
            "year" : `${ dataForm.inputAnho }`,
            "regimen" : `${ dataForm.inputRegimen }`,
            "declaration" : `${ dataForm.inputDAM }`,
            "type_document" : `${ dataForm.inputTipoDoc }`,
            "digit" : `${ dataForm.inputDigito }`,
            "fee" : `${ dataForm.inputNroReliq }`
        };

        const resultAws = await axios.post(host_url, bodyJSON, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => { 
            var jsonError = {
                'type' : 'S',
                'message' : response.data.statusMessage,
                'response': response.data
            }
            return jsonError;
        })
        .catch((error) => {
            var jsonError = {
                'type' : 'E',
                'message' : 'Error en la ejecución de la API para consulta de DAM.',
                'error': error
            }
            return jsonError;
        });

        return resultAws;  
    }
}

module.exports.AwsConnection = AwsConnection;