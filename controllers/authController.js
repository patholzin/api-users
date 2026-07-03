const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {

    try {

        const { usuario, password } = req.body;

        // Buscar usuario
        const user = await User.findOne({ usuario });

        if (!user) {

            return res.status(401).json({
                mensaje: "Usuario o contraseña incorrectos"
            });

        }

        // Comparar contraseña
        const passwordCorrecta = await bcrypt.compare(password, user.password);

        if (!passwordCorrecta) {

            return res.status(401).json({
                mensaje: "Usuario o contraseña incorrectos"
            });

        }

        // Crear token
        const token = jwt.sign(

            {
                id: user._id,
                usuario: user.usuario,
                rol: user.rol
            },

            "MiClaveSecreta123",

            {
                expiresIn: "3m"
            }

        );

        res.json({

            mensaje: "Login correcto",
            token

        });

    } catch (error) {

        res.status(500).json({
            mensaje: error.message
        });

    }

};

module.exports = {
    login
};