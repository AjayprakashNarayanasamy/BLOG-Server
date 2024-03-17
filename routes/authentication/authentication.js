const express = require('express');
const router = express.Router();
const apiRoutes = express.Router();
const authenticationController = require('../../controllers/authentication/authentication')

function authenticationRoutes() {
  console.log('Ajay2')
  apiRoutes.use(authenticationController);
  router.use('/auth', apiRoutes);
  return router;
}
module.exports = authenticationRoutes();
