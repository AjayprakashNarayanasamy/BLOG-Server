const express = require('express');
const authentication = require('./authentication/index');
const router = express.Router();
const apiRoutes = express.Router();

function folderRoutes() {
 
  apiRoutes.use(authentication)
  router.use('/api', apiRoutes);
  return router;
}
module.exports = folderRoutes();

