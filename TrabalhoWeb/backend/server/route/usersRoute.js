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

router.get('/user/:login', async function (req, res) {
    console.log(req.params.login);
    const user = await usersService.getUser(req.params.login);
    res.json(user);
});

router.get('/users', async function (req, res) {
    const users = await usersService.getUsers();
    res.json(users);
});

module.exports = router;