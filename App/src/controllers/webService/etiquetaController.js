const builder = require('xmlbuilder');

const jsonEtiqueta = {
  ETIQUETAS: {
    ETIQUETA: {
      NUMERO_ENVIO: '',
      TIPO_IMPRESORA: ''
    },
  },
};

// Crear el elemento raíz "ETIQUETAS"
const root = builder.create('ETIQUETAS');

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

// Agregar elementos a la raíz "ETIQUETAS"
agregarElementos(root, jsonEtiqueta.ETIQUETAS);

// Obtener el string XML
const xmlString = root.end({ pretty: true });

console.log(xmlString);
