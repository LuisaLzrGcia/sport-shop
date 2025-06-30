document.addEventListener('DOMContentLoaded', function() {
  // Inicializar tooltips (opcional)
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Validación del formulario
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Validación simple
      if (username.trim() === '' || password.trim() === '') {
        alert('Por favor complete todos los campos');
        return;
      }
      
      // Aquí iría la lógica de autenticación real
      console.log('Login attempt with:', { username, password });
      alert('Login submitted! (This is a demo)');
      
      // Redirección o lógica posterior al login
      // window.location.href = 'dashboard.html';
    });
  }
});