Manejo de Archivos mediante Servidor con Express

-Crear una clase llamada ProductManager que pueda gestionar productos mediante las operaciones de agregar, consultar, modificar y eliminar, con persistencia en archivos. Luego, se debe desarrollar un servidor con Express para acceder a las funciones implementadas en la clase ProductManager.

-Aspectos a Incluir
La clase debe contar con una variable this.path, la cual se inicializará desde el constructor y debe recibir la ruta a trabajar desde el momento de generar su instancia.

-Formato de los Objetos a Guardar
Cada producto gestionado debe tener el siguiente formato:

id: Se debe incrementar automáticamente, no debe enviarse desde el cuerpo de la petición.

title: Nombre del producto.

description: Descripción del producto.

price: Precio del producto.

thumbnail: Ruta de la imagen del producto.

code: Código identificador del producto.

stock: Número de piezas disponibles.

-Métodos a Implementar en la Clase ProductManager
addProduct
Debe recibir un objeto con el formato especificado anteriormente, asignarle un id autoincrementable y guardarlo en un arreglo.

Asegúrate de guardar siempre el arreglo en el archivo.


getProducts
Debe leer el archivo de productos y devolver todos los productos en formato de arreglo.


getProductById
Debe recibir un id, leer el archivo de productos, buscar el producto con el id especificado y devolverlo en formato de objeto.


-Desarrollo del Servidor Express
Desarrollar un servidor Express que, en su archivo app.js, importe el archivo que contiene la clase ProductManager.

El servidor debe contar con los siguientes endpoints:
Ruta /products:
Debe leer el archivo de productos y devolverlos dentro de un objeto.


Ruta /products/:pid:
Debe recibir por req.params el pid (Product Id) y devolver sólo el producto solicitado, en lugar de todos los productos.
