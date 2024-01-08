const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection")

const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        Unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
});

module.exports = User;