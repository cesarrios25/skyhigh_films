function agregarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem('drones'));
    console.log(memoria);
    let cuenta = 0;
    if (!memoria) {
        const nuevoproducto = getNuevoProductoParaMemoria(producto);
        localStorage.setItem('drones',JSON.stringify([nuevoproducto]));
        cuenta = 1;
    } else {
        const indiceProducto = memoria.findIndex(drone => drone.id === producto.id);
        console.log(indiceProducto)
        const nuevaMemoria = memoria;
        if(indiceProducto === -1) {
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
            cuenta = 1;
        } else {
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem('drones',JSON.stringify(nuevaMemoria));
    }
    actualizarNumeroCarrito();
    return cuenta;
}

function restarAlCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem('drones'));
    const indiceProducto = memoria.findIndex(drone => drone.id === producto.id);
    if(memoria[indiceProducto].cantidad === 1) {
        memoria.splice(indiceProducto,1);
    } else {
        memoria[indiceProducto].cantidad--;
    }
    localStorage.setItem('drones',JSON.stringify(memoria));
    actualizarNumeroCarrito();
}

// toma un producto y agrega cantidad 1 y lo devuelve

function getNuevoProductoParaMemoria(producto) {
    const nuevoproducto = producto;
    nuevoproducto.cantidad = 1;
    return nuevoproducto;
}

const cuentaCarritoElement = document.getElementById('cuenta-carrito')
function actualizarNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem('drones'));
    if(memoria && memoria.length >0) {
        const cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0);
        cuentaCarritoElement.innerText = cuenta;
    } else {
        cuentaCarritoElement.innerText = 0;
    }
}
actualizarNumeroCarrito();





