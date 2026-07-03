const express = require('express');
const conectarDB = require('./config/database');
conectarDB();

const app = express();

const PORT = 5000;
const HOST = '0.0.0.0';

// Middleware para leer JSON
app.use(express.json());

// Importar las rutas
const userRoutes = require('./routes/users');

// Ruta principal
app.get('/', (req, res) => {
    res.send('¡Bienvenido a la API de Usuarios!');
});

// Ruta de usuarios
app.use('/users', userRoutes);

// Iniciar servidor
app.listen(PORT, HOST, () => {
    console.log(`Servidor ejecutándose en http://${HOST}:${PORT}`);
});