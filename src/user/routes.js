const { Router } = require ("express");
const userRouter = Router();

const { addUser, login, getUsers, getUser, putUser,} = require ("./controllers");
const{ hashPass, comparePass } = require("../middleware/auth");


userRouter.post("/users", hashPass, addUser);

userRouter.post("/users/login", comparePass, login)

userRouter.get("/users", getUsers);

userRouter.get("/users/:title", getUser);

userRouter.put("/users/update", putUser);

module.exports = userRouter;