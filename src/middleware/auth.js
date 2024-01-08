const bcrypt = require("bcrypt");

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

module.exports = {
 hashPass: hashPass,
}