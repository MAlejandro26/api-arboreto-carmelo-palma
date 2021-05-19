const { Router } = require('express');
const router = Router();

const { getArbol, getServicio, getProducto, welcome } = require('../controllers/controller.js');

router.get('/', welcome );
router.get('/arboles', getArbol);
router.get('/servicios', getServicio);
router.get('/productos', getProducto);


module.exports = router;