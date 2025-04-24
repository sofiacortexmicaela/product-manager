const express = require('express');
const ProductManager = require('./ProductManager');

const app = express();
const port = 3000;

const productManager = new ProductManager('./products.json');

// Middleware para parsear JSON
app.use(express.json());

// Ruta para obtener todos los productos
app.get('/products', (req, res) => {
    try {
        const products = productManager.getProducts();
        res.json({ products });
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los productos.' });
    }
});

// Ruta para obtener un producto por ID
app.get('/products/:pid', (req, res) => {
    try {
        const pid = parseInt(req.params.pid, 10);
        const product = productManager.getProductById(pid);
        res.json({ product });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

// Ruta para agregar un producto
app.post('/products', (req, res) => {
    try {
        const newProduct = productManager.addProduct(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});