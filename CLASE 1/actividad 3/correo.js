const nodemailer = require('nodemailer');

// Configura el transportador con tu cuenta de Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'oruefranco@gmail.com',
    pass: 'esao hcrx tuzu pluk' // Tu contraseña de aplicación
  }
});

// Configura las opciones del correo
const mailOptions = {
  from: 'techfelix9@gmail.com',
  to: 'techfelix9@gmail.com',
  subject: 'Prueba del correo',
  text: 'Prueba texto del correo'
};

// Envía el correo
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Correo enviado: ' + info.response);
});
