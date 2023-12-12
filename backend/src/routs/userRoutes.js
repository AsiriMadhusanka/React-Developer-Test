//In src/routes/userRoutes.js, define a route to fetch all users:
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);

module.exports = router;
