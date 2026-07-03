const mongoose = require('mongoose');

const conectarDB = async () => {

    try {

        await mongoose.connect('mongodb://localhost:27017/api_users');

        console.log('✅ MongoDB conectado');

    } catch (error) {

        console.log(error);

        process.exit(1);

    }

};

module.exports = conectarDB;