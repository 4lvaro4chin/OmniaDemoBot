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

    async getDuaDetail(index, data){
        let host_url = process.env.AwsDuaDetail;

        let bodyJSON = {
            "user_id": "80388508",
            "serie": `${index}ACTIVO`,
            "codaduana": `${data.codaduana}`,
            "numecorre": `${data.numecorre}`,
            "anoprese": `${data.anoprese}`,
            "n": `${data.n}`,
            "regimen": `${data.regimen}`,
            "fini": `${data.fini}`,
            "fechingsi": `${data.fechingsi}`,
            "ordemb": `${data.ordemb}`,
            "tipodocdecla": `${data.tipodocdecla}`,
            "docdecla": `${data.docdecla}`,
            "codubigeo": `${data.codubigeo}`,
            "ndcl": `${data.ndcl}`,
            "mcaduregpre": `${data.mcaduregpre}`,
            "mfanoregpre": `${data.mfanoregpre}`,
            "mcodiregpre": `${data.mcodiregpre}`,
            "mndclregpre": `${data.mndclregpre}`,
            "mnserregpre": `${data.mnserregpre}`,
            "numeorden": `${data.numeorden}`,
            "tipodespacho": `${data.tipodespacho}`,
            "tipoaforo": `${data.tipoaforo}`,
            "legajada": `${data.legajada}`,
            "mod": `${data.mod}`
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
}

module.exports.AwsConnection = AwsConnection;