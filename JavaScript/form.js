const btn = document.getElementById('buttonMail');

document.getElementById('formMail')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_9h4s0of';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Subcribe';
        Swal.fire({
          title: 'Good job!',
          text: 'You have subscribed',
          icon: 'success',
          confirmButtonColor: '#00F77B'
        });
      }, (err) => {
        btn.value = 'Subcribe';
        alert(JSON.stringify(err));
      });
  });