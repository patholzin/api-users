const express = require('express');

const router = express.Router();

const verificarToken = require('../middleware/auth');

const {

    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser

} = require('../controllers/usersController');

// GET Todos
router.get('/', verificarToken, getUsers);

// GET por ID
router.get('/:id', verificarToken, getUserById);

// POST
router.post('/', verificarToken, createUser);

// PUT
router.put('/:id', verificarToken, updateUser);

// DELETE
router.delete('/:id', verificarToken, deleteUser);
module.exports = router;