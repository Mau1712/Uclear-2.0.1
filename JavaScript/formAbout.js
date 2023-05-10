const privacyPolicyLink = document.getElementById("privacyPolicyLink");
const termOfServiceLink = document.getElementById("termOfServiceLink");
const cookiesSettingsLink = document.getElementById("cookiesSettingsLink");

// Agregar el evento "click" a cada enlace
privacyPolicyLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  Swal.fire({
    icon: 'info',
    title: 'Uclear® Privacy Policy',
    html: '<p> Uclear® Corporation ("we", "us", "our" or "our company") is committed to protecting your privacy. This privacy policy describes how we collect, use and share your personal information when you use our website for invisible orthodontic aligners, Uclear® (hereinafter, "the website") <br> <h5>Information gathering</h5>  We collect personal information that you provide to us when you register for an account on our website, request information about our products or services, fill out a contact form, or send us an email. This information may include your name, email address, telephone number, and any other information you provide to us. <br> In addition, we may automatically collect information about your use of the Website, such as your IP address, browser type, pages you view, time spent on the Website, and other usage statistics. <br> <br> <h5>Use of information</h5> We use the information we collect to provide you with our products and services, respond to your questions and requests, personalize your experience on our website, and improve our website and our products and services. <br> We may use the information we collect to send you information about our products and services by email or other means. If at any time you would like to stop receiving marketing emails, you can click the "unsubscribe" link at the bottom of any marketing email you receive from us. <br> <br> <h5>Information Sharing</h5> We may share your personal information with third-party service providers who work on our behalf to provide you with our products and services, such as payment processing, product shipping, and customer support services. We may also share your personal information with third parties if we have a good faith belief that disclosure is necessary to comply with an applicable law, regulation, court order, or governmental request, or to protect the rights, property, or safety of Uclear® Corporation, our customers, or the public in general. <br> <br> <h5>Security of the information</h5> We strive to protect the security of your personal information by using reasonable security measures, such as data encryption and password protection. However, no data transmission over the Internet or electronic data storage can guarantee absolute security. <br> <br> <h5>Links to third party websites</h5> Our website may contain links to third party websites that are not under our control. We are not responsible for the privacy practices or the content of these third-party websites. <br><br> <h5>Changes to this privacy policy</h5> We reserve the right to modify this privacy policy at any time and without prior notice. We recommend that you review this privacy policy regularly to be aware of any changes.</p>',
    confirmButtonColor: '#00F77B'
  })
});

termOfServiceLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  swal.fire({
    icon: 'info',
    title: 'Uclear® Terms of Service',
    html: '<p> Please read these terms of service carefully before using our website for invisible orthodontic aligners, Uclear® (hereinafter, "the website"). By accessing and using the Website, you agree to abide by and be bound by these Terms of Service. <br><br> <h5>Intellectual property</h5> All content on the Website, including text, graphics, logos, images, software, code and other materials (hereinafter "the Content") is the exclusive property of Uclear® Corporation ("we", "us" or "our company"), and are protected by the copyright laws of the United States and other countries <br><br> <h5>License</h5> We grant you a limited, non-exclusive, revocable, non-transferable license to access and use the Website and the Content for personal, non-commercial purposes only. You are not granted any license to use the Website or the Content for commercial purposes. <br><br> <h5>Use restrictions</h5> You may not use the Website or the Content in any manner that is illegal, fraudulent, or harmful to Uclear® Corporation, its customers, or the general public. Additionally, you may not: <br> <br> <ul> <li>Copy, modify, create derivative works from, distribute, sell, rent, lease, lend, transmit, publicly broadcast, publicly display, publicly display, transfer, sublicense, or otherwise exploit the Website or the Content without our prior written consent.</li> <br> <li>Access or use the Website or the Content for any purpose that is not expressly permitted by these Terms of Service</li> <br> <li>Use the Website or the Content to send junk mail, spam, computer viruses or any other malicious content.</li> <br> <li>Use any robot, spider, scraper or other automated means to access or use the Website or the Content.</li> <br> <li>Violate any applicable law or regulation by accessing or using the Website or the Content.</li> <br> <li>Modifications to the website and content.</li> <br> <li>We reserve the right to modify, update, suspend or discontinue the website or the content at any time without notice.</li> </ul> <br> <h5>Exclusion of guarantees and limitation of liability</h5> The website and the content are provided "as is" and "as available" without warranties of any kind, either express or implied. Uclear® Corporation does not warrant that the Website or the Content will meet your requirements or be free from errors, viruses, or interruptions. <br> In no event shall Uclear® Corporation be liable for any direct, indirect, special, incidental, consequential, or punitive damages, including loss of profit, revenue, data, or use, related to the use of, or inability to use, the Website or the Content, including if we have been informed of the possibility of such damages. <br><br> <h5>Compensation</h5> The website and the content are provided "as is" and "as available" without warranties of any kind, either express or implied. Uclear® Corporation does not warrant that the Website or the Content will meet your requirements or be free from errors, viruses, or interruptions. <br> In no event shall Uclear® Corporation be liable for any direct, indirect, special, incidental, consequential, or punitive damages, including loss of profit, revenue, data, or use, related to the use of, or inability to use, the Website or the Content, including if we have been informed of the possibility of such damages. <br><br> <h5>Compensation</h5> You agree to indemnify, defend and hold harmless Uclear® Corporation, its directors, officers, employees and agents, from and against any claim, loss, liability, claim or expense, including reasonable attorneys fees, incurred by Uclear® Corporation as a result of your breach of these Terms of Service or your use of the Website or the Content. <br><br> <h5>Governing Law and Jurisdiction</h5> These Terms of Service shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any legal action or proceeding related to the Website or these Terms of Service will be brought exclusively in the state or federal courts located in Los Angeles County, California. <br><br> <h5>Termination</h5> We may terminate or suspend your access to the Website or the Content at any time and for any reason without notice. You may also terminate these Terms of Service at any time by ceasing to use the Website and Content. <br><br> <h5>General disposition</h5> These terms of service constitute the entire agreement between Uclear® Corporation and you with respect to the use of the website and the content. If any provision of these Terms of Service is held invalid or unenforceable, that provision will be construed to the fullest extent permitted by applicable law, and the remaining provisions will remain in full force and effect. The waiver of any right or provision of these terms of service will only be effective if made in writing and signed by Uclear® Corporation. <br><br> <h5>Contact</h5> If you have any questions about these terms of service, you may contact us at any time through our website or by email at info@uclear.com. <br> Thank you for reading these terms of service. By using our website, you agree to be bound by these terms and conditions. </p>',
    confirmButtonColor: '#00F77B'  
  });
});

cookiesSettingsLink.addEventListener("click", function (event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  swal.fire({
    icon: 'warning',
    title: 'Uclear® Corporation Cookie Settings',
    html: '<p> Uclear® Corporation uses cookies on its website. By using our website, you agree to the use of cookies in accordance with this cookie policy. If you do not accept the use of these cookies, please disable cookies by following the instructions in this cookie policy or in your browser settings. If you disable cookies, some features of our website may not be available. <br><br> <h5>What are cookies?</h5> Cookies are small text files that are placed on your device (computer, mobile phone or tablet) when you visit our website. Cookies are used to collect information about your activity on our website, such as the pages you visit and how often you visit them. <br><br> <h5>Types of cookies we use</h5> We use different types of cookies on our website, which can be classified as follows: <br> <ul> <li>Necessary cookies: these cookies are essential to enable you to use our website and its features. Without these cookies, some features would not be available.</li> <br> <li>Performance Cookies: these cookies are used to collect information about how visitors use our website. They allow us to improve our website and provide a better user experience.</li> <br> <li>Functionality Cookies: these cookies allow our website to remember choices you have made in the past, such as your preferred language, to provide a personalized experience.</li> <br> <li>Advertising Cookies: these cookies are used to display relevant advertisements to you. They are also used to limit the number of times you see an advertisement and to measure the effectiveness of an advertising campaign.</li> </ul> <br> <h5>How to disable cookies</h5> You can disable cookies in your browser settings. <br> Please note that if you disable cookies, some features of our website may not be available. <br><br> <h5>Changes in the cookie policy</h5> We may update this cookie policy from time to time. Any changes we make to this cookie policy will be posted on this page. Therefore, we recommend that you check this page regularly to be aware of any changes to our cookie policy. <br><br> <h5>Contact Us</h5> If you have any questions about our cookie policy, you can contact us through our website or by email at info@uclearsmile.com </p>',
    confirmButtonColor: '#00F77B'  
  });
});



//------------------------------------------------------------------//


// Obtén el modal y los botones para abrirlo
var modal = document.getElementById("BookAppoimentModal");
var buttonsSend = document.querySelectorAll("[id^='bookAppoimentId']");

// Obtén el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Asigna el evento onclick a cada botón para abrir el modal correspondiente
buttonsSend.forEach(function(button) {
  button.onclick = function() {
    modal.style.display = "block";
  }
});

// Cuando el usuario haga clic en <span> (x), cierra el modal
span.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic fuera del modal, también lo cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function limpiarFormulario() {
  document.getElementById("formBook").reset();
}

// Cuando el usuario envía el formulario, limpiar los campos del formulario
formBook.addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe
});


function closeModal() {
  var modal = document.getElementById("BookAppoimentModal");
  modal.style.display = "none";
}

const btnBook = document.getElementById('button-Book-send');

document.getElementById('formBook')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btnBook.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_1hllf74';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      
      btnBook.value = 'Send Email';
      Swal.fire({
        title: 'Good job!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonColor: '#00F77B'})
        limpiarFormulario();
        closeModal();
    }, (err) => {
      btnBook.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});



// cerrar OffCanvas con el click a form
let menuBtn = document.querySelector('.bookAppoimentMobile');
let offCanvas = document.querySelector('.offcanvas');

menuBtn.addEventListener('click', function () {
    let offCanvas = document.querySelector('.offcanvas');
    let offCanvasBackdrop = document.querySelector('.offcanvas-backdrop');
    offCanvas.classList.remove('show');
    offCanvasBackdrop.classList.remove('show');
});
