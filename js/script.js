// ----------- evento para mostrar y esconder el menu hamburguesa.
document.getElementById('hamburger-menu').addEventListener('click', () => {
    document.querySelector('.container-right').classList.toggle('active');
});


// --------- INICIAR SESION CON CORREO Y CONTRASEÑA.

// ---------- clase guarda usuarios que pueden ingresar
class Usuario {
    constructor (email, password) {
        this.email = email;
        this.password = password;
    }
}
let usuario1 = new Usuario ('usuario1@example.com', '12345')
let usuario2 = new Usuario ('usuario2@example.com', '12345')

// ---------- funcion que permite el ingreso desde html y js.
intentosFallidos = 0;

function Ingreso (form) {
    if (form.usuario.value === usuario1.email || form.usuario.value === usuario2.email && form.password.value === '12345') {
        alert('Bienvenida, has iniciado Sesion');
        form.reset();
        location = 'index.html'
    } else {
        // alert('Error, usuario o contraseña erronea')
        intentosFallidos ++
    }
    if (intentosFallidos >= 3) {
        alert('Has alcanzado el maximo de intentos, tu cuenta se bloqueo por 24 hrs')
    } else {
        // alert('Error al ingresar')
        alert('Error, usuario o contraseña erronea')
        form.reset();
    }
}