const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const AWS = require('aws-sdk');
const request = require('request');

const poolData = {
  UserPoolId: 'us-east-1_TRmT0DwQy',
  ClientId: 'si5i934nqu5vaj71ofkmo41f9',
};
const pool_region = 'us-east-2';

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

exports.signin = async(req,res)=>{
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

    attributeList.push(
      new AmazonCognitoIdentity.CognitoUserAttribute({
        Name: 'email',
        Value: req.body.email,
      })
    );
  
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
}


exports.signup = async (req,res)=>{
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
          res.json(
            {
              login: 'Login Correcto',
            },
          );
        },
        onFailure: function (err) {
          res.json(err.name);
        },
      });
}

exports.confirm = async(req,res)=>{
    var userData = {
    Username: req.body.email,
    Pool: userPool,
  };
  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.confirmRegistration(req.body.code, true, function (err, result) {
    if (err) {
      console.log(err);
      res.json({error : err.code});
      return;
    }
    res.json({msg: "¡Tu cuenta ha sido confirmada con exito!"});
  });
}