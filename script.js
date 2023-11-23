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
]

const btnEliminarProducto = document.getElementById('btnEliminarProducto')

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

const producto = ['Computadora', 'Laptop', 'Celular'];
let carrito = [];

function buscarProducto(producto){
    for(i=0;i<carrito.length;i++) {
        producto.toLowerCase();
        if(producto == carrito[i]) {
            productosBuscados.push(producto)
        }
    }
	console.log(productosBuscados)
}
buscarProducto(producto);

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

        let respuesta = prompt('¿Quieres agregar otro producto? (Sí/No)').toLowerCase()
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

listarProductos(producto);