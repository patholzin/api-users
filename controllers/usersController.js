const User = require('../models/User');

// GET - Todos los usuarios
const getUsers = async (req, res) => {

    try {

        const users = await User.find();

        res.json(users);

    } catch (error) {

        res.status(500).json({ mensaje: error.message });

    }

};

// GET - Usuario por ID
const getUserById = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {

            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });

        }

        res.json(user);

    } catch (error) {

        res.status(500).json({ mensaje: error.message });

    }

};

// POST - Crear usuario
const createUser = async (req, res) => {

    try {

        const nuevoUsuario = new User(req.body);

        const usuarioGuardado = await nuevoUsuario.save();

        res.status(201).json(usuarioGuardado);

    } catch (error) {

        res.status(500).json({ mensaje: error.message });

    }

};

// PUT - Actualizar usuario
const updateUser = async (req, res) => {

    try {

        const usuarioActualizado = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!usuarioActualizado) {

            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });

        }

        res.json(usuarioActualizado);

    } catch (error) {

        res.status(500).json({ mensaje: error.message });

    }

};

// DELETE - Eliminar usuario
const deleteUser = async (req, res) => {

    try {

        const usuarioEliminado = await User.findByIdAndDelete(req.params.id);

        if (!usuarioEliminado) {

            return res.status(404).json({
                mensaje: "Usuario no encontrado"
            });

        }

        res.json({
            mensaje: "Usuario eliminado correctamente"
        });

    } catch (error) {

        res.status(500).json({ mensaje: error.message });

    }

};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};