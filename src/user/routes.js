const { Router } = require ("express");
const userRouter = Router();

const { addUser, getUsers, getUser, putUser,} = require ("./controllers");

userRouter.post("/users", addUser);

userRouter.get("/users", getUsers);

userRouter.get("/users/:title", getUser);

userRouter.put("/users", putUser);

// userRouter.delete("/users/deleteALL", deleteAllUsers);

// userRouter.delete("/users/deleteOne", deleteUserByUsername);

module.exports = userRouter;