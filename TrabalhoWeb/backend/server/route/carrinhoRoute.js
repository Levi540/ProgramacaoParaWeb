const express = require('express');
const router = express.Router();
const carrinhoService = require('../service/carrinhoService');

router.post('/carrinho', async function(req, res) {
    try {
        const carrinho = req.body;
        console.log(carrinho);
        const newCarrinho = await carrinhoService.saveCarrinho(carrinho);
        res.json(newCarrinho);
    } catch (error) {
        console.log(error);
        res.json({messagem: error.message });
    }
});

router.get('/carrinho/:id', async function (req, res) {
    const carrinho = await carrinhoService.getCarrinho(req.params.id);
    res.json(carrinho);
});

module.exports = router;
