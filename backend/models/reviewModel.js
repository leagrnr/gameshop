// models/reviewModel.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Review = sequelize.define('Review', {
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: { min: 0, max: 10 }
    }
});

module.exports = Review;
