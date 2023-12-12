//In src/app.js, set up the Express application and use the user routes:
const express = require('express');
const userRoutes = require('../src/routs/userRoutes');

const app = express();

app.use('/users', userRoutes);

module.exports = app;
