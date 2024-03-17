const { authenticationService, registerService } = require('../../services');
const express = require('express');
const route = express();
const registerController = route.post('/register', async (req, res) => {
  try {
    const response = await registerService(req.body);

    if (response?.rows?.length === 1) {
      return res
        .status(404)
        .json({ message: 'User Already Exist', stauts: false });
    }
    res
      .status(response.code)
      .json({ message: response.message, stauts: response.stauts });
  } catch (error) {
    console.log(error, 'error');
  }
});
module.exports = registerController;
