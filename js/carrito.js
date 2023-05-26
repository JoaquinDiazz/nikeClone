let productosNike = [];

fetch("../js/productos.json")
    .then(response =>  response.json())
    .then(data => {
        productosNike = data;
        cargarProductos(productosNike);
    })


// CARGAR PRODUCTOS
const sectionProductos = document.querySelector("#sectionProductos");
let btnAgregar = document.querySelectorAll(".btnAgregar");

function cargarProductos(productoElegido) {

    sectionProductos.innerHTML=""
    window.scrollTo({top: 0})

    productoElegido.forEach( producto => {

        const div = document.createElement("div");
        div.classList.add("cardProducto");
        div.innerHTML = `


            <img src="${producto.imagen}" alt="${producto.nombre}" class="cardImg">
            <div class="cardBody">
                <div class="nombreContainer">
                    <p class="nombre">${producto.nombre}</p>
                    <i class="bi bi-bag btnAgregar" id="${producto.id}"></i>
                </div>
                <p class="descripcion">${producto.descripcion}</p>
                <div>
                    <p class="precio" id="${producto.id}">$${producto.precio}</p>
                    <button class="blackBtn botonLoco" id="${producto.id}">Ver más</button>
                </div>
            </div>
        `
        sectionProductos.append(div);

    })
    actualizarBtnAgregar()
    localStorage.setItem("carritoLS", JSON.stringify(carrito))
    btnLoco()
}
let botonLoco = document.querySelectorAll(".botonLoco")
function btnLoco() {
    botonLoco = document.querySelectorAll(".botonLoco")

    botonLoco.forEach(btn => {
        btn.addEventListener("click", () => {
            const idBtn2 = btn.id
            let productoAgregado2 = productosNike.find(prod => prod.id === idBtn2)
            console.log(productoAgregado2)
            localStorage.setItem("holi",JSON.stringify(productoAgregado2))
            window.location.href="../pages/producto.html"
        })
    })
} 

function actualizarBtnAgregar() {
    btnAgregar = document.querySelectorAll(".btnAgregar");

    btnAgregar.forEach(btn => {
        btn.addEventListener("click", () => {
            const idBtn = btn.id

            let productoAgregado = productosNike.find(prod => prod.id === idBtn)

            if(carrito.some(prod => prod.id === idBtn)) {
                let index = carrito.findIndex(prod => prod.id === idBtn);
                carrito[index].cantidad++
            } else {
                productoAgregado.cantidad = 1
                carrito.push(productoAgregado)

                Toastify({

                    text: "Agregaste un producto al carrito",
                    duration: 3000,
                    close: "false",
                    position:"center",
                    gravity:"bottom",
                    style: {
                        background: "black",
                      },
                    }).showToast();
            }
            cargarCarrito()
            localStorage.setItem("carritoLS", JSON.stringify(carrito))
           
        })
    });
}

// MODAL DE FILTROS

const btnAbrirFiltros  = document.querySelector("#btnFiltros");
const filtros          = document.querySelector("#filtros");
const btnCerrarFiltros = document.querySelector("#btnCerrarFiltros");

btnAbrirFiltros.addEventListener("click", () => {
    filtros.classList.add("active")
    document.body.classList.add("modalAbierto")
})

btnCerrarFiltros.addEventListener("click", () => {
    filtros.classList.remove("active")
    document.body.classList.remove("modalAbierto")
})

// ACORDEON FILTROS
const headerAcordeon = document.querySelectorAll(".headerAcordeon");
const contenidoAcordeon = document.querySelectorAll(".contenidoAcordeon");

headerAcordeon.forEach((cadaUno, i) => {

    headerAcordeon[i].addEventListener("click", () => {

        contenidoAcordeon.forEach((cadaItem, i) => {
            contenidoAcordeon[i].classList.remove("active")
        })
        contenidoAcordeon[i].classList.toggle("active")
    })

})

// FILTROS POR GENERO
const tituloProductos = document.querySelector("#tituloDeProductos");
const btnFiltros = document.querySelectorAll(".btnFiltro");
const btnFiltrosGenero = document.querySelectorAll(".genero");

btnFiltrosGenero.forEach( boton => {

    boton.addEventListener("click", (e) => {

        btnFiltros.forEach(boton => boton.classList.remove("active"));
        boton.classList.add("active");

        const productoFiltradoPorGenero = productosNike.filter(producto => producto.genero === e.currentTarget.id.toLowerCase());
        cargarProductos(productoFiltradoPorGenero);
        window.scrollTo({ top: 0 })
        tituloProductos.innerText = e.currentTarget.id;

        filtros.classList.remove("active")
        document.body.classList.remove("modalAbierto")
    })
})
// FILTROS POR COLOR
const btnFiltrosColor = document.querySelectorAll(".color");
btnFiltrosColor.forEach( boton => {

    boton.addEventListener("click", (e) => {

        btnFiltros.forEach(boton => boton.classList.remove("active"));
        boton.classList.add("active");

        const productoFiltradoPorColor = productosNike.filter(producto => producto.color === e.currentTarget.id)
        cargarProductos(productoFiltradoPorColor);
        window.scrollTo({ top: 0 })
        tituloProductos.innerText = `Productos color ${e.currentTarget.id}`;

        filtros.classList.remove("active")
        document.body.classList.remove("modalAbierto")
    })
})
// FILTROS POR CATEGORIA
const btnFiltrosCategoria = document.querySelectorAll(".categoria");
btnFiltrosCategoria.forEach( boton => {

    boton.addEventListener("click", (e) => {

        btnFiltros.forEach(boton => boton.classList.remove("active"));
        boton.classList.add("active");

        const productoFiltradoPorCategoria = productosNike.filter(producto => producto.tipo === e.currentTarget.id.toLowerCase())
        cargarProductos(productoFiltradoPorCategoria);
        window.scrollTo({ top: 0 })
        tituloProductos.innerText = e.currentTarget.id;

        filtros.classList.remove("active")
        document.body.classList.remove("modalAbierto")
    })
})
// FILTROS POR COLECCION
const btnFiltrosColeccion = document.querySelectorAll(".coleccion");
btnFiltrosColeccion.forEach( boton => {

    boton.addEventListener("click", (e) => {

        btnFiltros.forEach(boton => boton.classList.remove("active"));
        boton.classList.add("active");

        const productoFiltradoPorCategoria = productosNike.filter(producto => producto.coleccion === e.currentTarget.id.toLowerCase())
        cargarProductos(productoFiltradoPorCategoria);
        window.scrollTo({ top: 0 })
        tituloProductos.innerText = e.currentTarget.id;

        filtros.classList.remove("active")
        document.body.classList.remove("modalAbierto")
    })
})
// FILTROS POR PRECIO
const mayorPrecio = document.querySelector("#mayorPrecio");
const menorPrecio = document.querySelector("#menorPrecio");

mayorPrecio.addEventListener("click", () => {
    let productosMasCaros = [...productosNike]
    productosMasCaros.sort((a,b) => b.precio - a.precio)
    cargarProductos(productosMasCaros)
    window.scrollTo({ top: 0 })
    tituloProductos.innerText = "Mas caros";

})

menorPrecio.addEventListener("click", () => {
    let productosMasBaratos = [...productosNike]
    productosMasBaratos.sort((a,b) => a.precio - b.precio)
    cargarProductos(productosMasBaratos)
    window.scrollTo({ top: 0})
    tituloProductos.innerText = "Mas baratos";

})

// LIMPIAR FILTROS
const limpiarFiltros = document.querySelector("#limpiarFiltros");

limpiarFiltros.addEventListener("click", () => {

    btnFiltros.forEach(btn => {
        btn.classList.remove("active")
    })

    cargarProductos(productosNike)
    tituloProductos.innerText = "Todos los productos";

    window.scrollTo({ top: 0 })

    filtros.classList.remove("active")
    document.body.classList.remove("modalAbierto")

})




