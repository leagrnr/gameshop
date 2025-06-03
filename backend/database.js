const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './games.db',
});

sequelize.authenticate()
    .then(() => console.log('Connexion à la base de données SQLite réussie'))
    .catch((err) => console.error('Impossible de se connecter à la base de données:', err));

module.exports = sequelize;
