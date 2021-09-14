const axios = require('axios');

class AwsConnection {
    constructor() {

    }

    async getDuaHeader(dataForm){
        let host_url = process.env.AwsDuaHeader;

        let bodyJSON = {
            "user_id" : `20475835604`,
            "aduana" : `${ dataForm.inputAduana }`,
            "year" : `${ dataForm.inputYear }`,
            "number" : `${ dataForm.inputDUA }`
        };

        const resultAws = await axios.post(host_url, bodyJSON, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => { 
            console.log(response);
            var jsonError = {
                'type' : 'S',
                'message' : response.data.statusMessage,
                'response': response.data
            }
            return jsonError;
        })
        .catch((error) => {
            console.log(error)
            var jsonError = {
                'type' : 'E',
                'message' : 'Error en la ejecución de la API para consulta de DUA.',
                'error': error
            }
            return jsonError;
        });

        return resultAws;  

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