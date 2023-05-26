// let btnAgregar = document.querySelectorAll(".btnAgregar");

// function actualizarBtnAgregar() {
//     btnAgregar = document.querySelectorAll(".btnAgregar");

//     btnAgregar.forEach(btn => {
//         btn.addEventListener("click", () => {
//             const idBtn = btn.id

//             // let productoAgregado = productosNike.find(prod => prod.id === idBtn)

//             if(carrito.some(prod => prod.id === idBtn)) {
//                 let index = carrito.findIndex(prod => prod.id === idBtn);
//                 carrito[index].cantidad++
//             } else {
//                 productoAgregado.cantidad = 1
//                 carrito.push(productoAgregado)

//                 Toastify({

//                     text: "Agregaste un producto al carrito",
//                     duration: 3000,
//                     close: "true",
//                     position:"left",
//                     gravity:"bottom",
//                     style: {
//                         background: "black",
//                       },
//                     close: true  
//                     }).showToast();
//             }
//             cargarCarrito()
//             localStorage.setItem("carritoLS", JSON.stringify(carrito))
           
//         })
//     });
// }
const productoInfo = JSON.parse(localStorage.getItem("holi"))
const imagenesContainer = document.querySelector("#imagenesContainer")
const detallesContainer = document.querySelector("#detallesContainer")

function cargarPagina() {
    const div = document.createElement("div");
    div.classList.add("imagenesSecundarias");
    div.innerHTML = `
    <img src="${productoInfo.imagen2}" alt="${productoInfo.nombre}" class="imgDetalles">
    <img src="${productoInfo.imagen3}" alt="${productoInfo.nombre}" class="imgDetalles">
    <img src="${productoInfo.imagen4}" alt="${productoInfo.nombre}" class="imgDetalles">
    <img src="${productoInfo.imagen5}" alt="${productoInfo.nombre}" class="imgDetalles">
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
            <p class="talle">${productoInfo.talle1}</p>
            <p id="p2" class="talle">${productoInfo.talle2}</p>
            <p id="p3" class="talle">${productoInfo.talle3}</p>
            <p id="p4" class="talle">${productoInfo.talle4}</p>
        </div>
        <div class="button">
            <button class="blackBtn" onclick="agregar()" id="${productoInfo.id}">Agregar a la bolsa de compra</button>
        </div>
        <p>${productoInfo.descripcionLarga}</p>
    `
    detallesContainer.prepend(div2)
    document.title = `${productoInfo.nombre} - ${productoInfo.tipo}`
} 
cargarPagina()

const imgDetalles = document.querySelectorAll(".imgDetalles")
const modalImg = document.querySelector("#modalImg")
const cerrar = document.querySelector("#cerrarModalImg")
const containerImg = document.querySelector("#containerImg")

imgDetalles.forEach(img => {

    img.addEventListener("click", (e)=> {

        let src = e.target.src
        
        modalImg.style.display = "block"
        document.body.classList.add("modalAbierto")

        let img = document.createElement("img")
        img.src = src

        containerImg.innerHTML = ""
        containerImg.append(img)

        cerrar.addEventListener("click", () => {
            modalImg.style.display="none"
        document.body.classList.remove("modalAbierto")
        })
    })
})

function agregar() {

    for (let i = 0; i < talles.length; i++) {
        let talle = talles[i]
        if(talle.classList.contains("active")) {
            tieneLaClase = true
            break
        }
    }
    
    if(tieneLaClase) {
        if (carrito.some(prod => prod.id === productoInfo.id)) {
            let index = carrito.findIndex(prod => prod.id === productoInfo.id);
            carrito[index].cantidad++
        } else {
            productoInfo.cantidad = 1
            carrito.push(productoInfo)
    
            Toastify({
    
                text: "Agregaste un producto al carrito",
                duration: 3000,
                close: "true",
                position:"center",
                gravity:"bottom",
                style: {
                    background: "black",
                  },
                close: false 
                }).showToast();
        }
    } else {
        Toastify({
    
            text: "Seleccione un talle",
            duration: 3000,
            close: "true",
            position:"center",
            gravity:"top",
            style: {
                background: "black",
              },
            close: false  
            }).showToast();
    }


    cargarCarrito()
    localStorage.setItem("carritoLS", JSON.stringify(carrito))
}

function verImg(n) {
    let img = 
    console.log(n);
}

// HAY VECES Q UN PRODUCTO TIENE UN SOLO TALLE Y POR SI SALE UN UNDEFINED HAGO Q TENGA UN DISPLAY NONE 
let p2 = document.querySelector('#p2');
if (productoInfo.talle2 !== undefined) {
    p2.textContent = productoInfo.talle2;
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
if (productoInfo.talle4 !== undefined) {
    p4.textContent = productoInfo.talle4;
} else {
    p4.style.display = 'none';
}

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

const talles = document.querySelectorAll(".talle")
let tieneLaClase = false
talles.forEach(talle => {
        talle.addEventListener("click", ()=> {
        talles.forEach(talle => {
            talle.classList.remove("active")
        })
        talle.classList.add("active")


    })
            
})




