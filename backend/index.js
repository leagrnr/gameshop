const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const sequelize = require('./database');
const gameRoutes = require('./routes/gameRoute');

app.use(cors())
app.use(express.json());

app.use('/images', express.static('public/images'));

app.use("/api", gameRoutes);

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});

sequelize.sync()
    .then(() => {
        console.log('Base de données synchronisée');
    })
    .catch((err) => console.error('Erreur de synchronisation:', err));
