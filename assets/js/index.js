/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll('.services__modal'), 
        modalButton = document.querySelectorAll('.services__button'),
        modalClose = document.querySelectorAll('.services__modal-close')

let activeModal = (modalClick) => {
            modal[modalClick].classList.add('active-modal')
        }

        modalButton.forEach((modalButton, i) => {
            modalButton.addEventListener('click',() => {
                activeModal(i)
            })
        } )


    modalClose.forEach((modalClose) => {
        modalClose.addEventListener('click', () => {
            modal.forEach((modalRemove) => {

                modalRemove.classList.remove('active-modal')
            })
        })
    })
/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

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