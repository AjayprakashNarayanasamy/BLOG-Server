const { authenticationService } = require('../../services');
const express = require('express');
const route = express();
const authenticationController = route.get(
  '/authentication',
  async (req, res) => {
    try {
      const response = await authenticationService();

      res.json(response);
    } catch (error) {}
  }
);
module.exports = authenticationController;
