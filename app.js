// Variables para usuario y contraseña simulados
const usuarioCorrecto = "UsuarioRD";
const contraseñaCorrecta = "1234";

// Función para mostrar la vista de login
function mostrarLogin() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
    ocultarSecciones(); // Ocultar secciones de la app
    document.getElementById('logout-button').style.display = 'none'; // Ocultar botón de cerrar sesión
}

// Función para mostrar la vista de registro
function mostrarRegistro() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
}

// Función para ocultar todas las secciones de la aplicación
function ocultarSecciones() {
    document.getElementById('verificar-saldo-form').style.display = 'none';
    document.getElementById('recarga-form').style.display = 'none';
    document.getElementById('bloquear-tarjeta-form').style.display = 'none';
}

// Función para mostrar las secciones de la aplicación una vez logueado
function mostrarSecciones() {
    document.getElementById('verificar-saldo-form').style.display = 'block';
    document.getElementById('recarga-form').style.display = 'block';
    document.getElementById('bloquear-tarjeta-form').style.display = 'block';
}

// Lógica del login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const usuario = document.getElementById('login-usuario').value;
    const contraseña = document.getElementById('login-password').value;
    
    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
        alert("Inicio de sesión exitoso");
        document.getElementById('login-section').style.display = 'none';
        mostrarSecciones();
        document.getElementById('logout-button').style.display = 'block'; // Mostrar botón de cerrar sesión
    } else {
        document.getElementById('login-error').innerText = "Usuario o contraseña incorrectos.";
    }
});

// Lógica del registro (esto es solo una simulación simple)
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nuevoUsuario = document.getElementById('register-usuario').value;
    const nuevaContraseña = document.getElementById('register-password').value;

    if (nuevoUsuario && nuevaContraseña) {
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        mostrarLogin();
    } else {
        document.getElementById('register-error').innerText = "Por favor completa todos los campos.";
    }
});

// Lógica para cerrar sesión
document.getElementById('logout-button').addEventListener('click', function() {
    alert("Has cerrado sesión.");
    mostrarLogin(); // Volver al formulario de login
});

// Cambiar entre login y registro
document.getElementById('go-to-register').addEventListener('click', function(event) {
    event.preventDefault();
    mostrarRegistro();
});

document.getElementById('go-to-login').addEventListener('click', function(event) {
    event.preventDefault();
    mostrarLogin();
});
