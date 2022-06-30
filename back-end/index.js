const express = require('express');
const cors = require('cors');

// Creamos el servidor
const app = express();

// Conectamos a la BD
app.use(cors());

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));
app.use('/api/carrito', require('./routes/carrito'));

//seccion cognito extraer a controller y routes

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');
// const jwkToPem = require('jwk-to-pem');
// const jwt = require('jsonwebtoken');

const poolData = {
  UserPoolId: process.env.USER_POOL_ID,
  ClientId: process.env.CLIENT_ID,
};
const pool_region = 'us-east-2';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

app.use(express.json());
app.use(cors());

app.post('/confirm', (req, res) => {
  var userData = {
    Username: req.body.email,
    Pool: userPool,
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.confirmRegistration(req.body.code, true, function (err, result) {
    if (err) {
      console.log(err);
      res.json(err.code);
      return;
    }
    res.json('ok');
  });
});

app.post('/signup', (req, res) => {
  var attributeList = [];
  attributeList.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: 'name',
      Value: req.body.nombre,
    })
  );
  attributeList.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: 'middle_name',
      Value: req.body.apellido,
    })
  );
  //   attributeList.push(
  //     new AmazonCognitoIdentity.CognitoUserAttribute({
  //       Name: 'phone_number',
  //       Value: req.body.telefono,
  //     })
  //   );
  attributeList.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: 'email',
      Value: req.body.email,
    })
  );
  //attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({Name:"password",Value: req.body.password}));

  userPool.signUp(
    req.body.email,
    req.body.password,
    attributeList,
    null,
    function (err, result) {
      if (err) {
        console.log(err);
        res.json(err.name);
        return;
      }
      cognitoUser = result.user;
      console.log('Nombre de usuario es: ' + cognitoUser.getUsername());
      res.json('ok');
    }
  );
});

app.post('/signin', (req, res) => {
  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
    Username: req.body.email,
    Password: req.body.password,
  });

  var userData = {
    Username: req.body.email,
    Pool: userPool,
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      //console.log('access token + ' + result.getAccessToken().getJwtToken());
      //console.log('id token + ' + result.getIdToken().getJwtToken());
      //console.log('refresh token + ' + result.getRefreshToken().getToken());
      res.json([
        {
          login: 'Login Correcto',
        },
      ]);
    },
    onFailure: function (err) {
      res.json(err.name);
    },
  });
});

//

app.listen(4000, () => {
  console.log('El servidor esta corriendo perfectamente en el puerto 4000');
});
