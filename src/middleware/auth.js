const bcrypt = require("bcrypt");

const User = require("../user/model");

const saltRounds = parseInt(process.env.SALT);

const hashPass = async (req, res, next) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds)

        req.body.password = hashedPassword;

        next();
    } catch (error) {
        res.status(500).json({ message: error.message, error: error });
    }
};

const comparePass = async (req, res, next) => {
    try {


        const user = await User.findOne({
            where: {username: req.body.username},
        })
         console.log(user)

   const passwordCheck = await bcrypt.compare(req.body.password, user.dataValues.password)

 

 if (!passwordCheck){
    res.status(404).json({message: "passwords don't match"})
    return
}

    req.user = user
    next();


    } catch (error) {
        res.status(500).json({ message: error.message, error: error });
    }
};


module.exports = {
 hashPass: hashPass,
 comparePass: comparePass,
};