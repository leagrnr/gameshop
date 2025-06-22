const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Game = sequelize.define('Game', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    release_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    store_rating: {
        type: DataTypes.FLOAT,
        allowNull: true,
        validate: {
            min: 0,
            max: 10
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    platform: {
        type: DataTypes.STRING,
        allowNull: false
    },
    store_review_like: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    store_review_dislike: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    store_review_global: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Game;
