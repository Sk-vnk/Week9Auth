const { Router } = require ("express");
const bookRouter = Router();

const { addBook, getBooks, getBook, putBook } = require ("./controllers");


bookRouter.post("/books", addBook);

bookRouter.get("/books", getBooks);

bookRouter.get("/books/:title", getBook);

bookRouter.put("/books/update", putBook);

module.exports = bookRouter;