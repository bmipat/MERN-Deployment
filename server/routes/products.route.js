const ProductController = require('../controllers/products.controller');
module.exports = function (app) {
    app.get('/api/all/', ProductController.allProducts);
    app.post('/api/addproduct/', ProductController.createProduct);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.put('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}
