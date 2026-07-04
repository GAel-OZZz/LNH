function enviar(event) {
    event.preventDefault();
    Swal.fire({
  title: 'Enviado con exito!',
  text: 'Todas las peticiones serán guardadas en nuestra base de datos y serán tomadas en cuenta',
  icon: 'success',
  confirmButtonText: 'Continuar',

})
}
