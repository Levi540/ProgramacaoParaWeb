const express = require('express');
const router = express.Router();
const carrinhoItemService = require('../service/carrinhoItemService');

router.post('/carrinhoitem', async function(req, res) {
    try {
        const carrinhoItem = req.body;
        console.log(carrinhoItem);
        const newCarrinhoItem = await carrinhoItemService.saveCarrinho(carrinhoItem);
        res.json(newCarrinhoItem);
    } catch (error) {
        console.log(error);
        res.json({messagem: error.message });
    }
});

router.get('/carrinhoitem/:idproduto/:idcarrinho', async function (req, res) {
    const carrinhoItem = await carrinhoItemService.getCarrinhoItem(req.params.idproduto, req.params.idcarrinho);
    res.json(carrinhoItem);
});

module.exports = router;