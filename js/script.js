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


let registros = {}; // En este objeto vacio almacenamos los registros que vamos a ingresar.

function almacenarRegistro() {
// Datos que ingresemos al formulario.
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById('contraseña').value;
    const repetirContraseña = document.getElementById('repcontraseña').value;

// Si alguno de estos campos del formulario esta sin llenar, me da el alert.
    if (!correo || !contraseña || !repetirContraseña) {
        alert('Faltan campos por ingresar.');
        return;
    }

// los campos ingresados son guardados en registros.
    registros[nombre] = { correo, contraseña, repetirContraseña};

    document.getElementById('formulario').reset(); // Deja el formulario vacio para nuevos campos.
    location = 'index.html'; 

alert('Registro exitoso.');
console.log()
}


// -------------------- CODIGO JS PARA CARRITO DE COMPRAS.

const contenedorTarjetas = document.getElementById('productos-container')

function crearTarjetasProductosInicio(productos) {
    productos.forEach(producto => {
        const nuevoDron = document.createElement('div');
        nuevoDron.classList = "tarjeta-producto";
        nuevoDron.innerHTML = `
        <img src="../assets/productos-drones/${producto.id}.jpg">
        <h3>${producto.nombre}</h3>
        <p>$ ${producto.precio}</p>
        <button>Agregar al carrito</button>
        `
        contenedorTarjetas.appendChild(nuevoDron);

    });
}

crearTarjetasProductosInicio(drones)
console.log(`../assets/productos-drones/${producto.id}.jpg`);