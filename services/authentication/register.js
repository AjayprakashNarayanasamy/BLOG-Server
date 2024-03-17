const { client } = require('../../database/index');
const registerService = async (userData) => {
  try {
    const query = 'SELECT * FROM users WHERE email = $1 ';
    const userAvailable = await client.query(query, [userData.email]);
    if (userAvailable.rows.length === 1) {
      return userAvailable;
    }
    const createQuery =
      'INSERT INTO users (username, email, password, image) VALUES($1,$2,$3, $4)';
    const createUser = await client.query(createQuery, [
      userData.username,
      userData.email,
      userData.password,
      userData?.image,
    ]);
    if (createUser.rowCount === 1) {
      return { message: 'User Created Successfully', status: true, code: 200 };
    }
  } catch (error) {
    console.log('Error', error);
  }
};
module.exports = registerService;
