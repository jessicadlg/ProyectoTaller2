// Rutas para cognito
const express = require('express');
const router = express.Router();
const cognitoController = require('../controllers/cognitoController');

// api/cognito
router.post('/signup', cognitoController.signup);
router.post('/signin', cognitoController.signin);
router.post('/confirm', cognitoController.confirm);


module.exports = router;