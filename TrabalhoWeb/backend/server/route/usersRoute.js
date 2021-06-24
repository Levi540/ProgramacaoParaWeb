const express = require('express');
const router = express.Router();
const usersService = require('../service/usersService');

router.post('/user', async function(req, res) {
    try {
        const user = req.body;
        console.log(user);
        const newUser = await usersService.saveUser(user);
        res.json(newUser);
    } catch (error) {
        console.log(error);
        res.json({messagem: error.message });
    }
});

module.exports = router;