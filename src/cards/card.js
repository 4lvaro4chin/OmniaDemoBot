class Cards {
    constructor() {

    }

    async welcome(userName) {
        const json = {
            "type": "AdaptiveCard",
            "body": [
                {
                    "type": "Image",
                    "url": "https://omniasolution.com/wp-content/uploads/2021/06/Group-158@2x.png"
                },
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "Image",
                                    "size": "Small",
                                    "url": "https://cdn.icon-icons.com/icons2/1724/PNG/512/4023883-bot-head-robot-robotics_112865.png"
                                }
                            ],
                            "width": "auto"
                        },
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "weight": "Bolder",
                                    "text": `¡Bienvenido ${ userName }!`,
                                    "wrap": true,
                                    "size": "ExtraLarge"
                                }
                            ],
                            "width": "stretch"
                        }
                    ]
                },
                {
                    "type": "TextBlock",
                    "text": `Soy tu asistente virtual y estoy disponible para ayudarte en el momento que lo necesites.`,
                    "wrap": true
                }
            ],
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.3"
        };       
        
        return json; 
    }

    async errorMessage(message){
        const json = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.3",
            "body": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "Image",
                                    "size": "Small",
                                    "url": "https://cdn.icon-icons.com/icons2/586/PNG/512/robot-head-with-cardiogram_icon-icons.com_55279.png"
                                }
                            ],
                            "width": "auto"
                        },
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": `¡Ooppps!.
                                    \n**${ message }**`,
                                    "size": "Default",
                                    "fontType": "Default",
                                    "height": "stretch",
                                    "wrap": true
                                }
                            ],
                            "width": "stretch"
                        }
                    ]
                } 
            ]
        };
        
        return json;
    }

    async reinicioSap(user, system, password){
        const json = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.3",
            "body": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "Image",
                                    "size": "Small",
                                    "url": "https://cdn.icon-icons.com/icons2/1724/PNG/512/4023883-bot-head-robot-robotics_112865.png"
                                }
                            ],
                            "width": "auto"
                        },
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": `Se ha reiniciado la contraseña del usuario **${ user }** en el sistema **${ system }**.
                                    \nLa nueva contraseña es:
                                    \n**${ password }**`,
                                    "size": "Default",
                                    "fontType": "Default",
                                    "height": "stretch",
                                    "wrap": true
                                }
                            ],
                            "width": "stretch"
                        }
                    ]
                } 
            ]
        };
        
        return json;
    }

    async reinicioSapError(message){
        const json = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.3",
            "body": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "Image",
                                    "size": "Small",
                                    "url": "https://cdn.icon-icons.com/icons2/586/PNG/512/robot-head-with-cardiogram_icon-icons.com_55279.png"
                                }
                            ],
                            "width": "auto"
                        },
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": `Se ha identificado un error en SAP.
                                    \n**${ message }**`,
                                    "size": "Default",
                                    "fontType": "Default",
                                    "height": "stretch",
                                    "wrap": true
                                }
                            ],
                            "width": "stretch"
                        }
                    ]
                } 
            ]
        };
        
        return json;
    }

    async desbloqueoSap(user, system){
        const json = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.3",
            "body": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "Image",
                                    "size": "Small",
                                    "url": "https://cdn.icon-icons.com/icons2/1724/PNG/512/4023883-bot-head-robot-robotics_112865.png"
                                }
                            ],
                            "width": "auto"
                        },
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": `Se ha desbloqueado el usuario **${ user }** en el sistema **${ system }**.`,
                                    "size": "Default",
                                    "fontType": "Default",
                                    "height": "stretch",
                                    "wrap": true
                                }
                            ],
                            "width": "stretch"
                        }
                    ]
                }                
            ]
        };
        
        return json;
    }

    async desbloqueoSapError(message){
        const json = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.3",
            "body": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "Image",
                                    "size": "Small",
                                    "url": "https://cdn.icon-icons.com/icons2/586/PNG/512/robot-head-with-cardiogram_icon-icons.com_55279.png"
                                }
                            ],
                            "width": "auto"
                        },
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": `Se ha identificado un error en SAP.
                                    \n**${ message }**`,
                                    "size": "Default",
                                    "fontType": "Default",
                                    "height": "stretch",
                                    "wrap": true
                                }
                            ],
                            "width": "stretch"
                        }
                    ]
                } 
            ]
        };
        
        return json;
    }

    async reconexion(){
        const json = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.3",
            "body": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "Image",
                                    "size": "Small",
                                    "url": "https://cdn.icon-icons.com/icons2/1724/PNG/512/4023883-bot-head-robot-robotics_112865.png"
                                }
                            ],
                            "width": "auto"
                        },
                        {
                            "type": "Column",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": `¡Bienvenido nuevamente!`,
                                    "size": "Default",
                                    "fontType": "Default",
                                    "height": "stretch",
                                    "wrap": true
                                }
                            ],
                            "width": "stretch"
                        }
                    ]
                }                
            ]
        };
    
        return json;
    }    

    async formDuaHeader() {
        const json = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.3",
            "body": [
                {
                    "type": "TextBlock",
                    "size": "Medium",
                    "weight": "Bolder",
                    "text": " Consulta DUA",
                    "horizontalAlignment": "Center",
                    "wrap": true
                },
                {
                    "type": "Input.ChoiceSet",
                    "id": "inputAduana",
                    "label": "Aduana",
                    "isRequired": true,
                    "errorMessage": "Es necesario indicar un valor.",
                    "value": "118",
                    "choices": [
                        {
                            "title": "019-TUMBES",
                            "value": "019"
                        },
                        {
                            "title": "028-TALARA",
                            "value": "028"
                        },
                        {
                            "title": "037-SULLANA",
                            "value": "037"
                        },
                        {
                            "title": "046-PAITA",
                            "value": "046"
                        },
                        {
                            "title": "055-CHICLAYO",
                            "value": "055"
                        },
                        {
                            "title": "064-ETEN",
                            "value": "064"
                        },
                        {
                            "title": "073-PACASMAYO",
                            "value": "073"
                        },
                        {
                            "title": "082-SALAVERRY",
                            "value": "082"
                        },
                        {
                            "title": "091-CHIMBOTE",
                            "value": "091"
                        },
                        {
                            "title": "109-HUACHO",
                            "value": "109"
                        },
                        {
                            "title": "118-MARITIMA DEL CALLO",
                            "value": "118"
                        },
                        {
                            "title": "127-PISCO",
                            "value": "127"
                        },
                        {
                            "title": "136-SAN JUAN",
                            "value": "136"
                        },
                        {
                            "title": "145-MOLLENDO - MATARANI",
                            "value": "145"
                        },
                        {
                            "title": "154-AREQUIPA",
                            "value": "154"
                        },
                        {
                            "title": "163-ILO",
                            "value": "163"
                        },
                        {
                            "title": "172-TACNA",
                            "value": "172"
                        },
                        {
                            "title": "181-PUNO",
                            "value": "181"
                        },
                        {
                            "title": "262-DESAGUADERO",
                            "value": "262"
                        },
                        {
                            "title": "190-CUZCO",
                            "value": "190"
                        },
                        {
                            "title": "217-PUCALLPA",
                            "value": "217"
                        },
                        {
                            "title": "253-PUESTO DE CONTROL DE TARAPOTO",
                            "value": "253"
                        },
                        {
                            "title": "262-DESAGUADERO",
                            "value": "262"
                        },
                        {
                            "title": "226-IQUITOS",
                            "value": "226"
                        },
                        {
                            "title": "235-AEREA DEL CALLAO",
                            "value": "235"
                        },
                        {
                            "title": "244-POSTAL DE LIMA",
                            "value": "244"
                        },
                        {
                            "title": "271-TARAPOTO",
                            "value": "271"
                        },
                        {
                            "title": "280-PUERTO MALDONADO",
                            "value": "280"
                        },
                        {
                            "title": "299-LA TINA",
                            "value": "299"
                        },
                        {
                            "title": "901-OFICINA POSTAL DE LINCE",
                            "value": "901"
                        },
                        {
                            "title": "910-ADUANA POSTAL DE AREQUIPA",
                            "value": "910"
                        },
                        {
                            "title": "974-ALMACEN SANTA ANITA",
                            "value": "974"
                        },
                    ]
                },
                {
                    "type": "Input.Text",
                    "style": "text",
                    "id": "inputYear",
                    "label": "Año",
                    "isRequired": true,
                    "errorMessage": "Es necesario indicar un valor.",
                    "maxLength": 4,
                    "value": "2020"
                },
                {
                    "type": "Input.Text",
                    "style": "text",
                    "id": "inputDUA",
                    "label": "Número de Declaración",
                    "isRequired": true,
                    "errorMessage": "Es necesario indicar un valor.",
                    "maxLength": 6,
                    "value": "165629"
                }
            ],
            "actions": [
                {
                    "type": "Action.Submit",
                    "title": "Consultar",
                    "data": {
                        "id": "actionConsultar"
                    },
                    "style": "positive"
                }
            ]
        };

        return json;
    }

    async formDuaHeader2() {
        const json = {
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "type": "AdaptiveCard",
            "version": "1.3",
            "body": [
                {
                    "type": "TextBlock",
                    "size": "Medium",
                    "weight": "Bolder",
                    "text": " Consulta DAM",
                    "horizontalAlignment": "Center",
                    "wrap": true
                },
                {
                    "type": "Input.ChoiceSet",
                    "id": "inputAduana",
                    "label": "Aduana",
                    "isRequired": true,
                    "errorMessage": "Es necesario indicar un valor.",
                    "value": "118",
                    "choices": [
                        {
                            "title": "019-TUMBES",
                            "value": "019"
                        },
                        {
                            "title": "028-TALARA",
                            "value": "028"
                        },
                        {
                            "title": "037-SULLANA",
                            "value": "037"
                        },
                        {
                            "title": "046-PAITA",
                            "value": "046"
                        },
                        {
                            "title": "055-CHICLAYO",
                            "value": "055"
                        },
                        {
                            "title": "064-ETEN",
                            "value": "064"
                        },
                        {
                            "title": "073-PACASMAYO",
                            "value": "073"
                        },
                        {
                            "title": "082-SALAVERRY",
                            "value": "082"
                        },
                        {
                            "title": "091-CHIMBOTE",
                            "value": "091"
                        },
                        {
                            "title": "109-HUACHO",
                            "value": "109"
                        },
                        {
                            "title": "118-MARITIMA DEL CALLO",
                            "value": "118"
                        },
                        {
                            "title": "127-PISCO",
                            "value": "127"
                        },
                        {
                            "title": "136-SAN JUAN",
                            "value": "136"
                        },
                        {
                            "title": "145-MOLLENDO - MATARANI",
                            "value": "145"
                        },
                        {
                            "title": "154-AREQUIPA",
                            "value": "154"
                        },
                        {
                            "title": "163-ILO",
                            "value": "163"
                        },
                        {
                            "title": "172-TACNA",
                            "value": "172"
                        },
                        {
                            "title": "181-PUNO",
                            "value": "181"
                        },
                        {
                            "title": "262-DESAGUADERO",
                            "value": "262"
                        },
                        {
                            "title": "190-CUZCO",
                            "value": "190"
                        },
                        {
                            "title": "217-PUCALLPA",
                            "value": "217"
                        },
                        {
                            "title": "253-PUESTO DE CONTROL DE TARAPOTO",
                            "value": "253"
                        },
                        {
                            "title": "262-DESAGUADERO",
                            "value": "262"
                        },
                        {
                            "title": "226-IQUITOS",
                            "value": "226"
                        },
                        {
                            "title": "235-AEREA DEL CALLAO",
                            "value": "235"
                        },
                        {
                            "title": "244-POSTAL DE LIMA",
                            "value": "244"
                        },
                        {
                            "title": "271-TARAPOTO",
                            "value": "271"
                        },
                        {
                            "title": "280-PUERTO MALDONADO",
                            "value": "280"
                        },
                        {
                            "title": "299-LA TINA",
                            "value": "299"
                        },
                        {
                            "title": "901-OFICINA POSTAL DE LINCE",
                            "value": "901"
                        },
                        {
                            "title": "910-ADUANA POSTAL DE AREQUIPA",
                            "value": "910"
                        },
                        {
                            "title": "974-ALMACEN SANTA ANITA",
                            "value": "974"
                        },
                    ]
                },
                {
                    "type": "Input.Text",
                    "style": "text",
                    "id": "inputAnho",
                    "label": "Año",
                    "isRequired": true,
                    "errorMessage": "Es necesario indicar un valor.",
                    "maxLength": 4,
                    "value": "2020"
                },
                {
                    "type": "Input.ChoiceSet",
                    "id": "inputRegimen",
                    "label": "Régimen",
                    "isRequired": true,
                    "errorMessage": "Es necesario indicar un valor.",
                    "value": "10",
                    "choices": [
                        {
                            "title": "10-IMPORTACION DEFINITIVA",
                            "value": "10"
                        },
                        {
                            "title": "18-IMPORTACIONSIMPLIFICA",
                            "value": "18"
                        },
                        {
                            "title": "20-ADM TEMPORAL REEXP MISMO ESTADO",
                            "value": "20"
                        },
                        {
                            "title": "21-ADMICION TEMPORAL",
                            "value": "21"
                        },
                        {
                            "title": "28-IMPORTACION DE ENVIOS DE ENTREGA RAPIDA",
                            "value": "28"
                        },
                        {
                            "title": "30-REIMPORTACION EN EL MISMO ESTADO",
                            "value": "30"
                        },
                        {
                            "title": "36-REGIMEN REIMPORTACION MISMO ESTADO",
                            "value": "36"
                        },
                        {
                            "title": "65-DJM MENSAJERIA",
                            "value": "65"
                        },
                        {
                            "title": "70-DEPOSITO",
                            "value": "70"
                        },
                        {
                            "title": "80-TRANSITO",
                            "value": "80"
                        },
                        {
                            "title": "81-TRANSBORDO",
                            "value": "81"
                        },
                        {
                            "title": "89-REEMBARQUE",
                            "value": "89"
                        }
                    ]
                },
                {
                    "type": "Input.Text",
                    "style": "text",
                    "id": "inputDAM",
                    "label": "Número de Declaración",
                    "isRequired": true,
                    "errorMessage": "Es necesario indicar un valor.",
                    "maxLength": 6
                },
                {
                    "type": "Input.Text",
                    "style": "text",
                    "id": "inputTipoDoc",
                    "label": "Tipo de Documento",
                    "isRequired": true,
                    "errorMessage": "Es necesario indicar un valor.",
                    "maxLength": 2,
                    "value": "01"
                },
                {
                    "type": "Input.Text",
                    "style": "text",
                    "id": "inputDigito",
                    "label": "Dígito",
                    "isRequired": true,
                    "errorMessage": "Es necesario indicar un valor.",
                    "maxLength": 1,
                    "value": "1"
                },
                {
                    "type": "Input.Text",
                    "style": "text",
                    "id": "inputNroReliq",
                    "label": "Nº Reliq/Cuota",
                    "isRequired": true,
                    "errorMessage": "Es necesario indicar un valor.",
                    "maxLength": 2,
                    "value": "00"
                },
            ],
            "actions": [
                {
                    "type": "Action.Submit",
                    "title": "Consultar",
                    "data": {
                        "id": "actionConsultar"
                    },
                    "style": "positive"
                }
            ]
        };

        return json;
    }

    async dataDUAHeader(data) {
        const json = {
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.3",
            "body": [
                {
                    "type": "Container",
                    "style": "emphasis",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "**DECLARACIÓN ÚNICA DE ADUANAS**",
                                            "wrap": true,
                                            "size": "Large",
                                            "horizontalAlignment": "Center"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "separator": true,
                    "items": [
                        {
                            "type": "FactSet",
                            "facts": [
                                {
                                    "title": "**Aduana**",
                                    "value": `${data.detail.code} - ${data.detail.customs}`
                                },
                                {
                                    "title": "**Nº Orden**",
                                    "value": `${data.detail.order_number}`
                                },
                                {
                                    "title": "**Destinación**",
                                    "value": `${data.detail.destination}`
                                },
                                {
                                    "title": "**Modalidad**",
                                    "value": `${data.detail.modality}`
                                },
                                {
                                    "title": "**Tipo Despacho**",
                                    "value": `${data.detail.office_type}`
                                },
                                {
                                    "title": "**Nº DUA Prov.**",
                                    "value": `${data.detail.dua_number}`
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "separator": true,
                    "style": "emphasis",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "**IDENTIFICACIÓN**",
                            "wrap": true
                        }
                    ]
                },
                {
                    "type": "Container",
                    "separator": true,
                    "items": [
                        {
                            "type": "FactSet",
                            "facts": [
                                {
                                    "title": "**Importador/Exportador**",
                                    "value": `${data.detail.identification.importer_exporter}`
                                },
                                {
                                    "title": "**Código y Documento de Identificación**",
                                    "value": `${data.detail.identification.code_document_number}`
                                },
                                {
                                    "title": "**Dirección de Importador/Exportador**",
                                    "value": `${data.detail.identification.address}`
                                },
                                {
                                    "title": "**Cod.Ubi.Geo.**"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "separator": true,
                    "style": "emphasis",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "**REGISTRO DE ADUANA**",
                            "wrap": true
                        }
                    ]
                },
                {
                    "type": "Container",
                    "separator": true,
                    "items": [
                        {
                            "type": "FactSet",
                            "facts": [
                                {
                                    "title": "**Nº Declaración**",
                                    "value": `${data.detail.customs_record.declaration_number}`
                                },
                                {
                                    "title": "**Fecha Numeración**",
                                    "value": `${data.detail.customs_record.date_number}`
                                },
                                {
                                    "title": "**Sujeto a**",
                                    "value": `${data.detail.customs_record.status}`
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "separator": true,
                    "style": "emphasis",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "**TRANSPORTE**",
                            "wrap": true
                        }
                    ]
                },
                {
                    "type": "Container",
                    "separator": true,
                    "items": [
                        {
                            "type": "FactSet",
                            "facts": [
                                {
                                    "title": "**Empresa Transporte**",
                                    "value": `${data.detail.transport.code_unit_transport}`
                                },
                                {
                                    "title": "**Nº Manifiesto**",
                                    "value": `${data.detail.transport.manifest}`
                                },
                                {
                                    "title": "**Vía Transporte**",
                                    "value": `${data.detail.transport.way_transport}`
                                },
                                {
                                    "title": "**Fecha Termino Desc/Embar**",
                                    "value": `${data.detail.transport.date_end_landing}`
                                },
                                {
                                    "title": "**Empresa Transporte (T/R)**",
                                    "value": `${data.detail.transport.code_transport_company}`
                                },
                                {
                                    "title": "**Unidad Transporte (T/R)**",
                                    "value": `${data.detail.transport.unit_transport}`
                                },
                                {
                                    "title": "**Aduana D/S**",
                                    "value": `${data.detail.transport.code_customs}`
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "separator": true,
                    "style": "emphasis",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "**ALMACEN**",
                            "wrap": true
                        }
                    ]
                },
                {
                    "type": "Container",
                    "separator": true,
                    "items": [
                        {
                            "type": "FactSet",
                            "facts": [
                                {
                                    "title": "**Depósito Temporal**",
                                    "value": `${data.detail.warehouse.warehouse_temporal}`
                                },
                                {
                                    "title": "**Depósito A.Autorizado**",
                                    "value": `${data.detail.warehouse.warehouse_official}`
                                },
                                {
                                    "title": "**Plazo Solicitado**",
                                    "value": `${data.detail.warehouse.term}`
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "separator": true,
                    "style": "emphasis",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "**TRANSACCION**",
                            "wrap": true
                        }
                    ]
                },
                {
                    "type": "Container",
                    "separator": true,
                    "items": [
                        {
                            "type": "FactSet",
                            "facts": [
                                {
                                    "title": "**Entidad Financiera**",
                                    "value": `${data.detail.transaction.code_finantial}`
                                },
                                {
                                    "title": "**Modalidad**",
                                    "value": `${data.detail.transaction.mode_finantial}`
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "**VALOR ADUANA**",
                            "wrap": true
                        }
                    ],
                    "separator": true,
                    "style": "emphasis"
                },
                {
                    "type": "Container",
                    "separator": true,
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "**Concepto**",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "**Importe**",
                                            "wrap": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "FOB/Valor Clausula venta",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "horizontalAlignment": "Right",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.detail.customs_values.fob}`,
                                            "wrap": true,
                                            "horizontalAlignment": "Right"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "separator": true
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Flete/Comisión Exterior",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "horizontalAlignment": "Right",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.detail.customs_values.charter}`,
                                            "wrap": true,
                                            "horizontalAlignment": "Right"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Seguro/Otros Gastos Deducibles",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "horizontalAlignment": "Right",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.detail.customs_values.insurance}`,
                                            "wrap": true,
                                            "horizontalAlignment": "Right"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Total Ajustes",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "horizontalAlignment": "Right",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.detail.customs_values.total}`,
                                            "wrap": true,
                                            "horizontalAlignment": "Right"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Valor Aduana/ Valor Neto Entrega",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "horizontalAlignment": "Right",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.detail.customs_values.value}`,
                                            "wrap": true,
                                            "horizontalAlignment": "Right",
                                            "weight": "Bolder"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "separator": true
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "**DECLARANTE**",
                            "wrap": true
                        }
                    ],
                    "separator": true,
                    "style": "emphasis"
                },
                {
                    "type": "Container",
                    "separator": true,
                    "items": [
                        {
                            "type": "FactSet",
                            "facts": [
                                {
                                    "title": "**Declarante (Tipo - Nro. de documento - Razón Social)**",
                                    "value": `${data.detail.bidder.name}`
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "**OTROS DATOS DILIGENCIA**",
                            "wrap": true
                        }
                    ],
                    "separator": true,
                    "style": "emphasis"
                },
                {
                    "type": "Container",
                    "separator": true,
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "**Concepto**",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "**Cantidad**",
                                            "wrap": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Total Peso Neto",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "horizontalAlignment": "Right",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.detail.values.net_weight}`,
                                            "wrap": true,
                                            "horizontalAlignment": "Right"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "separator": true
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Total Peso Bruto",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "horizontalAlignment": "Right",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.detail.values.gross_weight}`,
                                            "wrap": true,
                                            "horizontalAlignment": "Right"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Total Bultos",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "horizontalAlignment": "Right",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.detail.values.total_packages}`,
                                            "wrap": true,
                                            "horizontalAlignment": "Right"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Total U.Físicas",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "horizontalAlignment": "Right",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.detail.values.total_unit_f}`,
                                            "wrap": true,
                                            "horizontalAlignment": "Right"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Total U.Comercial",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "horizontalAlignment": "Right",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.detail.values.total_unit_c}`,
                                            "wrap": true,
                                            "horizontalAlignment": "Right"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "**OTROS DATOS**",
                            "wrap": true
                        }
                    ],
                    "separator": true,
                    "style": "emphasis"
                },
                {
                    "type": "Container",
                    "separator": true,
                    "items": [
                        {
                            "type": "FactSet",
                            "facts": [
                                {
                                    "title": "**Cantidad de Series)**",
                                    "value": `${data.parameters.series}`
                                }
                            ]
                        }
                    ]
                },
            ]
        }

        return json;
    }

    async dataDuaHeader(data) {
        const json = {
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.3",
            "body": [
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `**${data.principal}**`,
                                            "wrap": true,
                                            "size": "Large"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "FactSet",
                    "facts": [
                        {
                            "title": "**Número de Declaración**",
                            "value": `${data.declaration_number}`
                        },
                        {
                            "title": "**Fecha de Numeración**",
                            "value": `${data.date_number}`
                        },
                        {
                            "title": "**Modalidad de Despacho Aduanero**",
                            "value": `${data.customs_modality}`
                        },
                        {
                            "title": "**Declarante**",
                            "value": `${data.declarant}`
                        }
                    ],
                    "separator": true
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "**Incoterm**",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "height": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "**Monto**",
                                            "wrap": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "separator": true,
                    "style": "emphasis",
                    "bleed": true
                },
                {
                    "type": "Container",
                    "bleed": true,
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "USD CIF",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.incoterm.usd_cif}`,
                                            "wrap": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "style": "default"
                },
                {
                    "type": "Container",
                    "bleed": true,
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "FOB",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.incoterm.fob}`,
                                            "wrap": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "style": "default"
                },
                {
                    "type": "Container",
                    "bleed": true,
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Flete",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.incoterm.flete}`,
                                            "wrap": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "style": "default"
                },
                {
                    "type": "Container",
                    "bleed": true,
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Seguro",
                                            "wrap": true
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "auto",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.incoterm.seguro}`,
                                            "wrap": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "style": "default"
                }
            ]
        };

        return json;
    }

    async dataDrawbackHeader2(data) {
        const json = {
            "type": "AdaptiveCard",
            "body": [
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "size": "ExtraLarge",
                                            "text": `${data.principal}`,
                                            "wrap": true
                                        }
                                    ],
                                    "width": "stretch"
                                }
                            ]
                        },
                        {
                            "type": "FactSet",
                            "spacing": "Large",
                            "facts": [
                                {
                                    "title": "**Número de Declaración**",
                                    "value": `${data.declaration_number}`
                                },
                                {
                                    "title": "**Fecha de Numeración**",
                                    "value": `${data.date_number}`
                                },
                                {
                                    "title": "**Modalidad de Despacho Aduanero**",
                                    "value": `${data.customs_modality}`
                                },
                                {
                                    "title": "**Declarante**",
                                    "value": `${data.declarant}`
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "style": "emphasis",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "spacing": "Large",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "weight": "Bolder",
                                            "text": "**Incoterm**",
                                            "wrap": true
                                        }
                                    ],
                                    "width": "stretch"
                                },
                                {
                                    "type": "Column",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "weight": "Bolder",
                                            "text": "**Monto**",
                                            "wrap": true
                                        }
                                    ],
                                    "width": "auto"
                                }
                            ]
                        }
                    ],
                    "bleed": true,
                    "spacing": "Large"
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "spacing": "Medium",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "USD CIF",
                                            "wrap": true
                                        }
                                    ],
                                    "width": "stretch"
                                },
                                {
                                    "type": "Column",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.incoterm.usd_cif}`,
                                            "wrap": true
                                        }
                                    ],
                                    "width": "auto"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "spacing": "Medium",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "FOB",
                                            "wrap": true
                                        }
                                    ],
                                    "width": "stretch"
                                },
                                {
                                    "type": "Column",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.incoterm.fob}`,
                                            "wrap": true
                                        }
                                    ],
                                    "width": "auto"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "spacing": "Medium",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Flete",
                                            "wrap": true
                                        }
                                    ],
                                    "width": "stretch"
                                },
                                {
                                    "type": "Column",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.incoterm.flete}`,
                                            "wrap": true
                                        }
                                    ],
                                    "width": "auto"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "spacing": "Medium",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Seguro",
                                            "wrap": true
                                        }
                                    ],
                                    "width": "stretch"
                                },
                                {
                                    "type": "Column",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.incoterm.seguro}`,
                                            "wrap": true
                                        }
                                    ],
                                    "width": "auto"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "spacing": "Medium",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Monto Liquidado",
                                            "wrap": true
                                        }
                                    ],
                                    "width": "stretch"
                                },
                                {
                                    "type": "Column",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.liquidated_amount}`,
                                            "wrap": true
                                        }
                                    ],
                                    "width": "auto"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "spacing": "Medium",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Monto Garantizado",
                                            "wrap": true
                                        }
                                    ],
                                    "width": "stretch"
                                },
                                {
                                    "type": "Column",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.guaranteed_amount}`,
                                            "wrap": true
                                        }
                                    ],
                                    "width": "auto"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "spacing": "Medium",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Monto Cancelado",
                                            "wrap": true
                                        }
                                    ],
                                    "width": "stretch"
                                },
                                {
                                    "type": "Column",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${data.cancelled_amount}`,
                                            "wrap": true
                                        }
                                    ],
                                    "width": "auto"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container"
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "FactSet",
                            "spacing": "Large",
                            "facts": [
                                {
                                    "title": "**Fecha y Hora de Cancelación**",
                                    "value": `${data.cancelled_date}`
                                },
                                {
                                    "title": "**Tipo de Cancelación**",
                                    "value": `${data.cancelled_type}`
                                },
                                {
                                    "title": "**Banco**",
                                    "value": `${data.bank}`
                                },
                                {
                                    "title": "**Garantía**",
                                    "value": `${data.guarantee}`
                                },
                                {
                                    "title": "**Estado de la Declaración**",
                                    "value": `${data.declaration_state}`
                                },
                                {
                                    "title": "**Punto de llegada**",
                                    "value": `${data.arrival}`
                                },
                                {
                                    "title": "**Cantidad de Bultos**",
                                    "value": `${data.quantity}`
                                },
                                {
                                    "title": "**Peso Bruto (KG)**",
                                    "value": `${data.weight}`
                                },
                            ]
                        }
                    ]
                }
            ],
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.3",
            "fallbackText": "This card requires Adaptive Cards v1.2 support to be rendered properly."
        };

        return json;
    }
}

module.exports.Cards = Cards;
