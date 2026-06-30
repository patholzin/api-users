const users = require('../data/users');

// GET - Todos los usuarios
const getUsers = (req, res) => {
    res.json(users);
};

// GET - Usuario por ID
const getUserById = (req, res) => {

    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            mensaje: "Usuario no encontrado"
        });
    }

    res.json(user);
};

// POST - Crear usuario
const createUser = (req, res) => {

    const { usuario, password, rol } = req.body;

    const nuevoUsuario = {

        id: users.length + 1,
        usuario,
        password,
        rol

    };

    users.push(nuevoUsuario);

    res.status(201).json({
        mensaje: "Usuario creado",
        usuario: nuevoUsuario
    });

};

// PUT - Actualizar usuario
const updateUser = (req, res) => {

    const id = parseInt(req.params.id);

    const user = users.find(u => u.id === id);

    if (!user) {
        return res.status(404).json({
            mensaje: "Usuario no encontrado"
        });
    }

    const { usuario, password, rol } = req.body;

    user.usuario = usuario;
    user.password = password;
    user.rol = rol;

    res.json({
        mensaje: "Usuario actualizado",
        usuario: user
    });

};

// DELETE - Eliminar usuario
const deleteUser = (req, res) => {

    const id = parseInt(req.params.id);

    const index = users.findIndex(u => u.id === id);

    if (index === -1) {

        return res.status(404).json({
            mensaje: "Usuario no encontrado"
        });

    }

    users.splice(index, 1);

    res.json({
        mensaje: "Usuario eliminado"
    });

};

module.exports = {

    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser

};