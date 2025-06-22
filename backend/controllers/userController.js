const User = require('../models/userModel');
const bcrypt = require('bcrypt');


const userController = {
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(401).json({ message: 'Utilisateur non trouvé.' });
            }
            // Si tu utilises bcrypt pour hasher les mots de passe :
            // const valid = await bcrypt.compare(password, user.password);
            // if (!valid) {
            //     return res.status(401).json({ message: 'Mot de passe incorrect.' });
            // }
            // Si tu n'utilises pas bcrypt :
            if (user.password !== password) {
                return res.status(401).json({ message: 'Mot de passe incorrect.' });
            }
            res.json({ id: user.id, username: user.username, email: user.email });
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la connexion.' });
        }
    },

    create: async (req, res) => {
        try {
            const { username, email, password } = req.body;

            const user = await User.create({ username, email, password });
            res.status(201).json(user);
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({
                message: 'Error while creating the user.',
                error: error.message || 'Unknown error'
            });
        }
    },

    getAll: async (req, res) => {
        try {
            const users = await User.findAll({ attributes: ['id', 'username', 'email'] });
            res.json(users);
        } catch (error) {
            console.error('Error retrieving users:', error);
            res.status(500).json({ message: 'Failed to fetch users' });
        }
    },

    getById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id, {
                attributes: ['id', 'username', 'email']
            });

            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }

            res.json(user);
        } catch (error) {
            console.error('Error retrieving user:', error);
            res.status(500).json({ message: 'Failed to fetch user' });
        }
    },

       update: async (req, res) => {
            const { id } = req.params;
            const { username, email, password } = req.body;

            try {
                const user = await User.findByPk(id);
                if (!user) {
                    return res.status(404).json({ message: 'User not found.' });
                }

                user.username = username;
                user.email = email;
                user.password = password;
                await user.save();

                res.json(user);
            } catch (error) {
                console.error('Error updating user:', error);
                res.status(500).json({
                    message: 'Error while updating the user.',
                    error: error.message || 'Unknown error'
                });
            }
        },

    delete: async (req, res) => {
        const {id} = req.params;

        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(404).json({message: 'User not found.'});
            }

            await user.destroy();
            res.json({message: 'User deleted successfully.'});
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).json({
                message: 'Error while deleting the user.',
                error: error.message || 'Unknown error'
            });
        }
    }
};

module.exports = userController;
