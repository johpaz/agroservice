const builder = require('xmlbuilder');

    const jsonRecogida = {
        RECOGIDAS: {
          RECOGIDA: {
            CODIGO_ADMISION: '',
            CLIENTE_REMITENTE: '',
            CENTRO_REMITENTE: '',
            FECHA_RECOGIDA: '',
            RAMGO_HORARIO: '',
            CODIGO_SERVICIO: '',
            EMBALAJE: '',
            OBSERVACIONES: '',
           },
        },
      };
      

const root = builder.create('RECOGIDAS');

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

agregarElementos(root, jsonRecogida.RECOGIDAS.RECOGIDA);

const xmlString = root.end({ pretty: true });

console.log(xmlString);
