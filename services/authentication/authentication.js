const express = require('express');
const { client } = require('../../database/index');
const authenticationService = async () => {
  try {
    const users = await client.query('SELECT * FROM users');
    return users.rows;
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Error fetching users' });
  }
};
module.exports = authenticationService;
