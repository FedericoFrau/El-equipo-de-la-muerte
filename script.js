<<<<<<< HEAD
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
=======
let producto = [
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
>>>>>>> 53ff7168313fe1f1f1f019700a40b25f85f895c7
