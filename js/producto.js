
const productoInfo = JSON.parse(localStorage.getItem("holi"))
const imagenesContainer = document.querySelector("#imagenesContainer")
const detallesContainer = document.querySelector("#detallesContainer")

function cargarPagina() {
    const div = document.createElement("div");
    div.classList.add("imagenesSecundarias");
    div.innerHTML = `
    <img src="${productoInfo.imagen2}" alt="${productoInfo.nombre}">
    <img src="${productoInfo.imagen3}" alt="${productoInfo.nombre}">
    <img src="${productoInfo.imagen4}" alt="${productoInfo.nombre}">
    <img src="${productoInfo.imagen5}" alt="${productoInfo.nombre}">
    `
    imagenesContainer.append(div)

    const div2 = document.createElement("div")
    div2.classList.add("detalles")
    div2.innerHTML = `
        <h3 class="titulo">${productoInfo.nombre}</h3>
        <p class="descripcion" id="descripcionProducto">${productoInfo.descripcion}</p>
        <p class="precio" id="precioProducto">$${productoInfo.precio}</p>
        <p class="seleccionar">Seleccionar Talle</p>
        <div class="talles">
            <p>${productoInfo.talle1}</p>
            <p id="p2">${productoInfo.talle2}</p>
            <p id="p3">${productoInfo.talle3}</p>
            <p id="p4">${productoInfo.talle4}</p>
        </div>
        <div class="button">
            <button class="blackBtn btnAgregar">Agregar a la bolsa de compra</button>
        </div>
        <p>${productoInfo.descripcionLarga}</p>
    `
    detallesContainer.append(div2)

    document.title = `${productoInfo.nombre} - ${productoInfo.tipo}`
} 
cargarPagina()

// HAY VECES Q UN PRODUCTO TIENE UN SOLO TALLE Y POR SI SALE UN UNDEFINED HAGO Q TENGA UN DISPLAY NONE 
let p2 = document.querySelector('#p2');
if (productoInfo.talle3 !== undefined) {
    p2.textContent = productoInfo.talle3;
} else {
    p2.style.display = 'none';
}

let p3 = document.querySelector('#p3');
if (productoInfo.talle3 !== undefined) {
    p3.textContent = productoInfo.talle3;
} else {
    p3.style.display = 'none';
}

let p4 = document.querySelector('#p4');
if (productoInfo.talle3 !== undefined) {
    p4.textContent = productoInfo.talle3;
} else {
    p4.style.display = 'none';
}