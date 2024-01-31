  const builder = require('xmlbuilder');

      const jsonData = {
          ADMISIONES: {
            ADMISION: {
              GRABAR_ENVIO: '',
              CODIGO_ADMISION: '',
              NUMERO_ENVIO: null,
              FECHA_HORA_ADMISION: '',
              CLIENTE_REMITENTE: '',
              CENTRO_REMITENTE: '',
              NOMBRE_REMITENTE: '',
              DIRECCION_REMITENTE: '',
              PAIS_REMITENTE: '',
              CODIGO_POSTAL_REMITENTE: '',
              POBLACION_REMITENTE: '',
              TIPO_DOC_REMITENTE: '',
              DOCUMENTO_IDENTIDAD_REMITENTE: '',
              PERSONA_CONTACTO_REMITENTE: '',
              TELEFONO_CONTACTO_REMITENTE: '',
              DEPARTAMENTO_REMITENTE: '',
              EMAIL_REMITENTE: '',
              CLIENTE_DESTINATARIO: '',
              CENTRO_DESTINATARIO: '',
              NOMBRE_DESTINATARIO: '',
              DIRECCION_DESTINATARIO: '',
              PAIS_DESTINATARIO: '',
              CODIGO_POSTAL_DESTINATARIO: '',
              POBLACION_DESTINATARIO: '',
              TIPO_DOC_DESTINATARIO: '',
              DOCUMENTO_IDENTIDAD_DESTINATARIO: '',
              PERSONA_CONTACTO_DESTINATARIO: '',
              TELEFONO_CONTACTO_DESTINATARIO: '',
              DEPARTAMENTO_DESTINATARIO: '',
              EMAIL_DESTINATARIO: '',
              INCOTERM: '',
              RAZON_EXPORTAR: '',
              EMBALAJE: '',
              CODIGO_SERVICIO: '',
              KILOS: '',
              VOLUMEN: '',
              LARGO: '',
              ANCHO: '',
              ALTO: '',
              NUMERO_REFERENCIA: '',
              IMPORTE_VALOR_REMBOLSO: '',
              IMPORTE_VALOR_DECLARADO: '',
              TIPO_PORTES: '',
              OBSERVACIONES1: '',
              TIPO_MERCANCIA: '',
              ASEGURAR_ENVIO: '',
              TIPO_MONEDA: '',
              
              
            },
          },
        };
        

  const root = builder.create('ADMISIONES');

  const agregarElementos = (parent, data) => {
    for (const [key, value] of Object.entries(data)) {
      if (typeof value === 'object') {
        const subElement = parent.ele(key);
        agregarElementos(subElement, value);
      } else if (Array.isArray(value)) {
        for (const item of value) {
          const subElement = parent.ele(key);
          agregarElementos(subElement, item);
        }
      } else {
        parent.ele(key, value);
      }
    }
  };

  agregarElementos(root, jsonData.ADMISIONES.ADMISION);

  const xmlString = root.end({ pretty: true });

