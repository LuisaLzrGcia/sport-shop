const metodoTarjeta = document.getElementById('pagoTarjeta');
const metodoPaypal = document.getElementById('pagoPaypal');
const campoTarjeta = document.getElementById('campoTarjeta');
const btnFinalizar = document.getElementById('btnFinalizar');

function actualizarMetodoPago() {
    if (metodoTarjeta.checked) {
        campoTarjeta.style.display = 'block';
        btnFinalizar.textContent = 'Finalizar compra';
    } else {
        campoTarjeta.style.display = 'none';
        btnFinalizar.textContent = 'Ir a PayPal para finalizar compra';
    }
}

// Escuchar cambios
metodoTarjeta.addEventListener('change', actualizarMetodoPago);
metodoPaypal.addEventListener('change', actualizarMetodoPago);

// Ejecutar al cargar
actualizarMetodoPago();

function finalizarCompra() {
    let timerInterval;
    Swal.fire({
        title: "Compra finalizada con éxito!",
        timer: 1500,
        timerProgressBar: true,
        icon: "success",
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            localStorage.clear();
            window.location.href = "index.html";
        }
    })
}