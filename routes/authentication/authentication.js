const express = require('express');
const router = express.Router();
const apiRoutes = express.Router();
const { authenticationController, registerController } = require('../../controllers');

function authenticationRoutes() {
  apiRoutes.use(authenticationController);
  apiRoutes.use(registerController);
  router.use('/auth', apiRoutes);
  return router;
}
module.exports = authenticationRoutes();
