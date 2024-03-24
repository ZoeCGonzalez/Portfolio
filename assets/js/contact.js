/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message')
const sendEmail = (e) => {
    e.preventDefault()

  //serviceID - templateID - #form - publicKey

  emailjs.sendForm('service_ajr3hip','template_u5xdmyr','#contact-form','xrUFuqEvVtpSqZI--')
  .then(() => {
     // Muestra mensaje enviado 
     contactMessage.textContent = ' Message sent successfully ✅'

     //se borra despues de 5 segundo
     setTimeout(()=> {
        contactMessage.textContent = ''
     }, 5000)


     //borra los campos

     contactForm.reset()

  }, () => {
    //error mensaje
    contactMessage.textContent = 'Message not sent (service error) ❌'
  })
}

contactForm.addEventListener('submit', sendEmail)