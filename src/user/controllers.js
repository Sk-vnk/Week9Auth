const User = require("./model");
const { get } = require("./routes");

const addUser = async (req, res) => {
    try {
        const users = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

    res.status(201).json({message: "user created", users: users})
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
            res.status(500).json({message: errormessage, error: error });
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

    const deleteOneByUser = async (req, res) => {
        try {
            const pretendUser = {
                user: "pretend user",
                isDeleted: true,
            };

            const deleteUser = await User.destroy({
                where: {
                    username: req.body.username,
                },
            });
            
            res.status(201).json({message: "user deleted", deleteuser: deleteuser})

        } catch (error) {
            res.status(500).json({ message: error.message, error: error });
        }
    };

    const deleteAllUsers = async (req, res) => {
        try {
            const users = await User.destroy({
                truncate: true,
            });

            res.status(201).json({message: "all books deleted", books: books})
        } catch (error) {
            res.status(500).json({ message: error.message, error: error })
        }
    };










module.exports = {
    addUser: addUser,
    getUsers: getUsers,
    getUser: getUser,
    putUser: putUser,
    // deleteOneByUser: deleteOneByUser,
    // deleteAllUsers: deleteAllUsers,
};