let productos = [
	{
		id: 1,
		nombre: 'Computadora',
		descripcion: 'Computadora amd 5 nucleos',
		precio: 50000,
	},
	{
		id: 2,
		nombre: 'Laptop',
		descripcion: 'Laptop amd 5 nucleos',
		precio: 80000,
	},
	{
		id: 3,
		nombre: 'Celular',
		descripcion: 'Celular Samsung',
		precio: 60000,
	},
    {
		id: 4,
		nombre: 'Laptop negra',
		descripcion: 'De la muerte',
		precio: 160000,
	},
    {
		id: 5,
		nombre: 'Entradas para BOCA JUNIORS',
		descripcion: 'El mejor equipo del planeta',
		precio: 16000000,
	}
]

const btnBuscarProducto = document.getElementById("buscarProducto")
btnBuscarProducto.addEventListener("click", ()=>{
	let producABuscar = prompt("Ingrese el producto a buscar")
	buscarProducto(producABuscar);

})

const btnBuscarProductoResultado = document.getElementById("buscarProductoResultado")

btnEliminarProducto.addEventListener('click', () => {
	let id = parseInt(prompt('Ingresa el ID del producto'))
	eliminarProducto(id)
})
function eliminarProducto(id) {
	let index = productos.findIndex((producto) => producto.id === id)
	if (index === -1) {
		alert('No se encontro el producto')
		return
	} else {
		productos = productos.filter((producto) => producto.id !== id)
		console.log(productos)
	}
}

function buscarProducto(producABuscar){
    for(i=0;i<productos.length;i++) {
        let busqueda = producABuscar.toLowerCase();
		let resultado = productos[i].nombre.toLowerCase()
		
        if(busqueda == resultado) {
			btnBuscarProductoResultado.textContent = `El resultado es: ${productos[i].nombre}, 
			${productos[i].descripcion}, ${productos[i].precio} `
			return productos[i]
        }else{
			btnBuscarProductoResultado.textContent = `Producto no encontrado `
			return
		}
    }
}

function mostrarProductos() {
    console.log('---- Productos Actuales ----');
    productos.forEach(producto => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Descripción: ${producto.descripcion}, Precio: ${producto.precio}`);
    });
    console.log('-----------------------------');
}

function agregarNuevoProducto() {
    let continuar = true;
    
    while (continuar) {
        let id = parseInt(prompt('Ingresa el ID del nuevo producto'))
        let nombre = prompt('Ingresa el nombre del nuevo producto')
        let descripcion = prompt('Ingresa la descripción del nuevo producto')
        let precio = parseFloat(prompt('Ingresa el precio del nuevo producto'))

        let nuevoProducto = {
            id: id,
            nombre: nombre,
            descripcion: descripcion,
            precio: precio
        }

        productos.push(nuevoProducto)
        console.log('Nuevo producto agregado:', nuevoProducto)

        let respuesta = prompt('¿Quieres agregar otro producto? (Sí/No)').toLowerCase();
        if (respuesta !== 'sí' && respuesta !== 'si') {
            continuar = false;
        }
    }
}

mostrarProductos();
agregarNuevoProducto();

function listarProductos(producto){
	for (let indice = 0; indice < producto.length; indice++) {
		console.log(`Nombre: ${producto[indice].nombre} | Producto: ${producto[indice].descripcion}  | Precio: $${producto[indice].precio}`);
	}
}

listarProductos(productos);

let btnFiltrarProducto = document.getElementById(`filtrarProducto`);
let filtrarProductoResultado = document.getElementById(`filtrarProductoResultado`)
btnFiltrarProducto.addEventListener("click", () => {
    wordFilter();
});
let wordFilter = () => {
    let searchingWord = prompt(`Por favor introduzca el nombre del producto:`).toLowerCase();    
    let productAmount = productos.length;
    let filterOutcome = [];
    for (ii=0; ii<= productAmount-1; ii++) {
        
        if ((productos[ii].nombre.toLowerCase().includes(searchingWord)) || (productos[ii].descripcion.toLowerCase().includes(searchingWord))) {
            filterOutcome.push(productos[ii]);

        }
    }
    if (filterOutcome.length<1) {
        filtrarProductoResultado.innerHTML= `No se encontraron coincidencias...`;
    }
    filterOutcome.forEach((item) => filtrarProductoResultado.innerHTML= `Nombre: ${item.nombre}, <br> Descripción: ${item.descripcion}`);
}
