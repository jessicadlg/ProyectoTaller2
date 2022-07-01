// Rutas para cognito
const express = require('express');
const router = express.Router();
const cognitoController = require('../controllers/cognitoController');

// api/cognito
router.post('/signup', cognitoController.signin);
router.post('/signin', cognitoController.signup);
router.post('/confirm', cognitoController.confirm);


module.exports = router;