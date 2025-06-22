const User = require('./userModel');
const Game = require('./gameModel');
const Review = require('./reviewModel');

// Associations
User.hasMany(Review, { foreignKey: 'userId', onDelete: 'CASCADE' });
Review.belongsTo(User, { foreignKey: 'userId' });

Game.hasMany(Review, { foreignKey: 'gameId', onDelete: 'CASCADE' });
Review.belongsTo(Game, { foreignKey: 'gameId' });

module.exports = { User, Game, Review };