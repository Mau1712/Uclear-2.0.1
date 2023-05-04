<?php
$to = "dueño@example.com"; // correo electrónico del destinatario
$subject = "Nuevo suscriptor"; // asunto del correo
$body = "Correo electrónico: " . $_POST['correo']; // cuerpo del correo con el correo electrónico ingresado por el usuario en el formulario
$headers = "From: suscripciones@example.com"; // dirección de correo electrónico que aparecerá como remitente

// envío del correo electrónico
if (mail($to, $subject, $body, $headers)) {
  echo "Correo enviado correctamente.";
} else {
  echo "Hubo un error al enviar el correo.";
}
?>