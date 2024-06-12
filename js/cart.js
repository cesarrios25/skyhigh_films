const contenedorTarjetas = document.getElementById('productos-container');
const unidadesElement = document.getElementById('unidades');
const precioElement = document.getElementById('precio');
const carritoVacioElement = document.getElementById('carrito-vacio')
const totalesElement = document.getElementById('totales')
const reiniciarCarritoElement = document.getElementById('reiniciar')


function crearTarjetasProductosInicio() {
    contenedorTarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem('drones'));
    console.log(productos)
    if(productos && productos.length > 0) {
        productos.forEach(producto => {
            const nuevoDron = document.createElement('div');
            nuevoDron.classList = "tarjeta-producto";
            nuevoDron.innerHTML = `
            <img src="./assets/productos-drones/${producto.id}.jpg">
            <h3>${producto.nombre}</h3>
            <p>us ${producto.precio}</p>
            <div>
                <button>-</button>
                <span class="cantidad">${producto.cantidad}</span>
                <button>+</button>
            </div>
            `
            contenedorTarjetas.appendChild(nuevoDron);
            nuevoDron.getElementsByTagName('button')[1].addEventListener('click',(e) => {
                agregarAlCarrito(producto);
                const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
                cuentaElement.innerText = agregarAlCarrito(producto);
                actualizarTotales();
            });

            nuevoDron.getElementsByTagName('button')[0].addEventListener('click',(e) => {
                restarAlCarrito(producto)
                crearTarjetasProductosInicio();
                actualizarTotales()
            });
        });
    }
}

crearTarjetasProductosInicio();
actualizarTotales()

function actualizarTotales() {
    const productos = JSON.parse(localStorage.getItem('drones'));
    let unidades = 0;
    let precio = 0;
    if(productos && productos.length > 0) {
        productos.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        })
        unidadesElement.innerText = unidades;
        precioElement.innerText = precio;
    }
}

function revisarMensajeVacio() {
    const productos = JSON.parse(localStorage.getItem('drones'));
    carritoVacioElement.classList.toggle('escondido',productos && productos.length>0);
    totalesElement.classList.toggle('escondido',!(productos && productos.length>0));
}

revisarMensajeVacio();

reiniciarCarritoElement.addEventListener('click',reiniciarCarrito);
function reiniciarCarrito() {
    localStorage.removeItem('drones');
    actualizarTotales();
    crearTarjetasProductosInicio();
}




