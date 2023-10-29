import emailjs from '@emailjs/nodejs';
const emailSend = () => {
    emailjs.init({
        publicKey: '-HFmdfNew_HyF0uVo',
        privateKey: 'wOsTWpEnAce8M0PbEXzOY', // optional, highly recommended for security reasons
      });
    let templateParams = {
        from_name: 'Yumyum',
        user_name: 'José Jerez',
        destinatario: 'yumyum.dev.notification@gmail.com',
        message: 'Gracias por usar nuestros servicios. Deseamos que tengas una buena experiencia con nosotros.'
    };
     
    emailjs.send('service_58bhdtn', 'template_f685fp9', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
    
  };
  
  export default emailSend;