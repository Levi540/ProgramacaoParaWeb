const express = require('express');
const router = express.Router();
const compraService = require('../service/compraService');

router.post('/compra', async function(req, res) {
    try {
        const compra = req.body;
        console.log(compra);
        const newCompra = await compraService.saveCompra(compra);
        res.json(newCompra);
    } catch (error) {
        console.log(error);
        res.json({messagem: error.message });
    }
});

router.get('/compra/:idusuario/:idcarrinho', async function (req, res) {
    const compra = await compraService.getCompra(req.params.idusuario, req.params.idcarrinho);
    res.json(compra);
});

module.exports = router;