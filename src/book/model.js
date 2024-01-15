const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection")

const Book = sequelize.define("Book", {
    title: {
        type: DataTypes.STRING,
        Unique: true,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
    },
    author: {
        type: DataTypes.STRING,
    },
});

module.exports = Book;