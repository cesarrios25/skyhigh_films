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

// -------------------- CODIGO JS PARA INICIO DE SESION.

// contador en 0 de los fallos de ingreso.
let intentosFallidos = 0; 

function Ingreso(form) {
    if (form.usuario.value === usuario1.email || form.usuario.value === usuario2.email) {
        if (form.password.value === "12345") {
            alert("Sesion iniciada")
            form.reset();
            location = 'index.html'; // Si usuario y contraseña son correctos, me da ingreso a la cuenta en linea.
        } else {
            intentosFallidos++;
// este if verifica los intentos fallidos de contraseña.
            if (intentosFallidos >= 3) {
                alert('Has alcanzado el maximo de intentos, tu cuenta se bloqueo por 24 hrs');
                form.reset();
            } else {
                alert('Error de contraseña. Por favor, inténtalo de nuevo.'); 
            }
        }
    } else {
        intentosFallidos++;
// este if verifica los intentos fallidos de usuario.
        if (intentosFallidos >= 3) {
            alert('Has alcanzado el maximo de intentos, tu cuenta se bloqueo por 24 hrs');
            form.reset();
        } else {
            alert('Error de usuario. Por favor, inténtalo de nuevo.'); 
        }
    }
}


// -------------------- CODIGO JS PARA CARRITO DE COMPRAS.

const contenedorTarjetas = document.getElementById('productos-container')

function crearTarjetasProductosInicio(productos) {
    productos.forEach(producto => {
        const nuevoDron = document.createElement('div');
        nuevoDron.classList = "tarjeta-producto";
        nuevoDron.innerHTML = `
        <img src="./assets/productos-drones/${producto.id}.jpg">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <span>us ${producto.precio}</span>
        <button>Agregar al carrito</button>
        `
        contenedorTarjetas.appendChild(nuevoDron);
        nuevoDron.getElementsByTagName('button')[0].addEventListener('click',() => agregarAlCarrito(producto))
    });
}

crearTarjetasProductosInicio(drones)
