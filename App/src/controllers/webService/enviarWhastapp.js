const accountSid = 'AC344509e668c331d5532fa634782a0885';
const authToken = '77e84f7f83b35e5ffd10f4d695d7a1cb';
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

// Función para enviar un mensaje de texto
function enviarMensajeTexto(destinatario, mensaje) {
//     return client.messages
//       .create({
//         body: mensaje,
//         from: '18646971712',
//         to: destinatario
//       })
//       .then(message => {
//         console.log(`Mensaje enviado con SID: ${message.sid}`);
//         return message.sid;
//       })
//       .catch(error => {
//         console.error(`Error al enviar el mensaje: ${error.message}`);
//         throw error;
//       });
//   }

// // Ejemplo de uso
// const destinatario = '+57310403592';  // Reemplaza con el número al que quieres enviar el mensaje
// const mensaje = 'Hola, esto es un mensaje de prueba desde Twilio!';

// enviarMensajeTexto(destinatario, mensaje);
}
module.exports = {
    enviarMensajeTexto
  };