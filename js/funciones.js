function redireccionar(url) {
    const nuevaVentana = window.open(url, '_blank');
    if (nuevaVentana) {
        nuevaVentana.focus();
    } else {
        alert('Por favor, permite las ventanas emergentes para esta página.');
    }
}

document.getElementById('abrirModal').addEventListener('click', function() {
    let myModal = new bootstrap.Modal(document.getElementById('miModal'));
    myModal.show();
  });
