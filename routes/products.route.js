// incluye la ruta de los productos
const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/products.controllers');


router.get('/test', product_controller.test);
router.post('/create', product_controller.product_create)// envio un valor a la base de datos a traves de postman route>>controller>>model

router.get('/:id', product_controller.product_details) // leer
router.put('/:id/update', product_controller.product_update) // actualizar
router.delete('/:id/delete', product_controller.product_delete); // eliminar
module.exports = router
