const { Router } = require ("express");
const userRouter = Router();

const { addUser, getUsers, getUser, putUser,} = require ("./controllers");
const{ hashPass} = require("../middleware/auth");


userRouter.post("/users", hashPass, addUser);

userRouter.get("/users", getUsers);

userRouter.get("/users/:title", getUser);

userRouter.put("/users", putUser);

// userRouter.delete("/users/deleteALL", deleteAllUsers);

// userRouter.delete("/users/deleteOne", deleteUserByUsername);

module.exports = userRouter;