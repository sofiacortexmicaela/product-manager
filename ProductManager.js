const fs = require('fs');

class ProductManager {
    constructor(path) {
        this.path = path;
    }

    readProducts() {
        try {
            if (fs.existsSync(this.path)) {
                const data = fs.readFileSync(this.path, 'utf-8'); // Usa fs.readFileSync correctamente
                return JSON.parse(data); // Convertir los datos a JSON
            }
            return []; // Si el archivo no existe, devolver un arreglo vacío
        } catch (error) {
            console.error('Error al leer el archivo:', error);
            return []; // Si ocurre un error, devolver un arreglo vacío
        }
    }

    saveProducts(products) {
        fs.writeFileSync(this.path, JSON.stringify(products, null, 2), 'utf-8');
    }

    addProduct(product) {
        const products = this.readProducts();
        const newProduct = {
            id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
            ...product
        };
        products.push(newProduct);
        this.saveProducts(products);
        return newProduct;
    }

    getProducts() {
        return this.readProducts();
    }

    getProductById(id) {
        const products = this.readProducts();
        const product = products.find(p => p.id === id);
        if (!product) {
            throw new Error(`Product with id ${id} not found.`);
        }
        return product;
    }
}

module.exports = ProductManager;