function enviarCorreo(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre-contacto").value.trim();
    const correo = document.getElementById("correo-contacto").value.trim();
    const asunto = document.getElementById("asunto-contacto").value.trim();
    const mensaje = document.getElementById("mensaje-contacto").value.trim();

    let camposFaltantes = [];

    if (!nombre) camposFaltantes.push("Nombre");
    if (!correo) camposFaltantes.push("Correo electrónico");
    if (!mensaje) camposFaltantes.push("Mensaje");

    if (camposFaltantes.length > 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            html: `Los siguientes campos son obligatorios y no han sido completados:<br><b>${camposFaltantes.join(", ")}</b>`,
            confirmButtonText: 'Entendido'
        });
        return;
    }

    let timerInterval;
    Swal.fire({
        title: "Mensaje enviado!",
        timer: 1500,
        timerProgressBar: true,
        icon: "success",
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            //   localStorage.clear();
            //   window.location.href = "index.html";
        }
    })
}