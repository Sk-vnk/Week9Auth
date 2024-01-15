const User = require("./model");
const { get } = require("./routes");
const Book = require ("../book/model");

const addUser = async (req, res) => {
    try {
        const users = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        console.log("hello from add user", users)
    res.status(201).json({message: "user created", users: users})
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });

    }
};

const login = async (req, res) => {
    console.log("hello from login", req.user)
try {
    res.status(201).json({message: "Login succesful", user: req.user})
} catch (error) {
    res.status(500).json({ message: error.message, error: error });
 }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        res.status(201).json({message: "users found", users: users})
    
        } catch (error) {
            res.status(500).json({message: error.message, error: error});
        }
    };

    const getUser = async (req, res) => {
        try {
            const user = await User.findOne({
                where: {username: req.params.username},
            });
            res.status(201).json({message: "user found", user: user})

        } catch (error) {
            res.status(500).json({message: error.message, error: error });
        }
    };


    // const getUsers = async (req, res) => {
    //     try {
    //         const users = await User.findAll({
    //             where: {username: req.params.username},
    //         });
    //         res.status(201).json({message: "user found", user: user });
   
    //     } catch (error) {
    //         res.status(500).json ({message: error.message, error: error})
    //     }
    // };


    const putUser = async (req, res) => {
        try {
            const user = await User.update({
                email: req.body.email,
            },
            {Where: {
                username: req.body.username
            }
            }
            );

            res.status(201).json({ message: "user updated", user: user})

        } catch (error) {
            res.status(500).json({ message: error.message, error: error });
        }
    };


    const updateFavBook = async (req, res) => {
        try {
            const updateBook = await User.update(
            { BookId: req.body.BookId },
            { where: { username: req.body.username } }
            );
            
            const book = await Book.findOne({ where: {id: req.body.BookId}})
            
            res.status(201).json({message: "book updated", book: book})
        } catch (error) {
            res.status(500).json({ message: error.message, error: error });
        }
    };






module.exports = {
    addUser: addUser,
    getUsers: getUsers,
    getUser: getUser,
    putUser: putUser,
    login: login,
    updateFavBook: updateFavBook,
};