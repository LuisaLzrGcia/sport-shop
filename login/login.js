document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Obtener valores de los campos
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('password').value.trim();
      
      // Validar campos vacíos
      if (!username || !password) {
        showAlert('Por favor complete todos los campos', 'danger');
        return;
      }
      
      // Validar credenciales
      if (username === 'administrator' && password === 'administrator') {
        // Credenciales correctas - redirigir después de 1 segundo
        showAlert('Inicio de sesión exitoso! Redirigiendo...', 'success');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1000);
      } else {
        // Credenciales incorrectas
        showAlert('Usuario o contraseña incorrectos', 'danger');
        document.getElementById('password').value = '';
      }
    });
  }
  
  // Función para mostrar alertas estilizadas
  function showAlert(message, type) {
    // Eliminar alertas previas
    const existingAlert = document.querySelector('.login-alert');
    if (existingAlert) {
      existingAlert.remove();
    }
    
    // Crear alerta
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} login-alert mt-3`;
    alertDiv.textContent = message;
    
    // Insertar después del botón de login
    const loginButton = document.querySelector('#loginForm button[type="submit"]');
    loginButton.parentNode.insertBefore(alertDiv, loginButton.nextSibling);
    
    // Eliminar automáticamente después de 3 segundos
    setTimeout(() => {
      alertDiv.remove();
    }, 3000);
  }
});