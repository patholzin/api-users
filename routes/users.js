const express = require('express');

const router = express.Router();

const {

    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser

} = require('../controllers/usersController');

// GET Todos
router.get('/', getUsers);

// GET por ID
router.get('/:id', getUserById);

// POST
router.post('/', createUser);

// PUT
router.put('/:id', updateUser);

// DELETE
router.delete('/:id', deleteUser);

module.exports = router;