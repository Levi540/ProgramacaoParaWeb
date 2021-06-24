const express = require('express');
const router = express.Router();
const booksService = require('../service/booksService');

router.get('/books', async function(req, res) {
    const books = await booksService.getBooks();
    res.json(books);
});

router.get('/book/:id', async function (req, res) {
    const book = await booksService.getBook(req.params.id);
    res.json(book);
});

router.delete('/book/:id', async function(req, res) {
    try {
        const book = await booksService.deleteBook(req.params.id);
        return res.status(201).json({id: req.params.id,  message: 'registro excluído com sucesso'});
    } catch (error) {
        return res.status(404).send(e.message);
    }
});

router.post('/book', async function(req, res) {
    try {
        const book = req.body;
        console.log(book);
        const newBook = await booksService.saveBook(book);
        res.json(newBook);
    } catch (error) {
        console.log(error);
        res.json({messagem: error.message });
    }
});

module.exports = router;