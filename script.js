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
