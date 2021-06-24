const express = require('express');
const router = express.Router();
const wineService = require('../service/wineService');

router.post('/wine', async function(req, res) {
    try {
        const wine = req.body;
        console.log(wine);
        const newWine = await wineService.saveWine(wine);
        res.json(newWine);
    } catch (error) {
        console.log(error);
        res.json({messagem: error.message });
    }
});

module.exports = router;