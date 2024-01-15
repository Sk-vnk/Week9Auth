const Book = require("./model");


const addBook = async (req, res) => {
    try {
        const books = await Book.create({
            title: req.body.title,
            genre: req.body.genre,
            author: req.body.author,
        });

    res.status(201).json({message: "book created", books: books})
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });

    }
};


const getBooks = async (req, res) => {
    try {
        const books = await Book.findAll();

        res.status(201).json({message: "books found", books: books})
    
        } catch (error) {
            res.status(500).json({message: error.message, error: error});
        }
    };

    const getBook = async (req, res) => {
        try {
            const book = await Book.findOne({
                where: {title: req.params.title},
            });
            res.status(201).json({message: "book found", book: book})

        } catch (error) {
            res.status(500).json({message: error.message, error: error });
        }
    };


    const putBook = async (req, res) => {
        try {
            const book = await Book.update({
                genre: req.body.genre,
            },
            {Where: {
                title: req.body.title
            }
            }
            );

            res.status(201).json({ message: "book updated", book: book})

        } catch (error) {
            res.status(500).json({ message: error.message, error: error });
        }
    };






module.exports = {
    addBook: addBook,
    getBooks: getBooks,
    getBook: getBook,
    putBook: putBook,
};