const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
const sequelize = require('./database');
const gameRoutes = require('./routes/gameRoute');
const reviewRoutes = require('./routes/reviewRoute');
const userRoutes = require('./routes/userRoute');

app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json());

app.use('/images', express.static('public/images'));

app.use("/api/games", gameRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});

sequelize.sync()
    .then(() => {
        console.log('Base de données synchronisée');
    })
    .catch((err) => console.error('Erreur de synchronisation:', err));