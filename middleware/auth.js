const jwt = require('jsonwebtoken');

const verificarToken = (req, res, next) => {

    // Obtener el token del encabezado Authorization
    const authHeader = req.headers.authorization;

    if (!authHeader) {

        return res.status(401).json({
            mensaje: "Acceso denegado. No se proporcionó un token."
        });

    }

    // El formato debe ser: Bearer TOKEN
    const token = authHeader.split(' ')[1];

    if (!token) {

        return res.status(401).json({
            mensaje: "Token inválido."
        });

    }

    try {

        const usuario = jwt.verify(token, "MiClaveSecreta123");

        req.usuario = usuario;

        next();

    } catch (error) {

        return res.status(401).json({
            mensaje: "Token inválido o expirado."
        });

    }

};

module.exports = verificarToken;