// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize("Blog", "ajayprakashn66", "2RBoXu9bagnM", {
//     host: "ep-fragrant-king-257539.ap-southeast-1.aws.neon.tech",
//     dialect: "postgres",
//     dialectOptions: {
//       ssl: true, // or "require"
//     },
//   });
//   const testDbConnection = async () => {
//     try {
//       await sequelize.authenticate();
//       console.log("Connection has been established successfully.");
//     } catch (error) {
//       console.error("Unable to connect to the database:", error);
//     }
//   };
//   module.exports = { sequelize, testDbConnection };
const {Client} = require('pg');

const client = new Client({
  user:'ajayprakashn66',
  password:'2RBoXu9bagnM',
  host:'ep-fragrant-king-257539.ap-southeast-1.aws.neon.tech',
  port:5432,
  database:'Blog',
  ssl: {
    // Specify SSL mode
    rejectUnauthorized: true, // This is usually used for development purposes, it skips SSL certificate validation
    // Other SSL options can be specified here if necessary
  },
  sslmode: 'require',
})
let connection
async function dbConnection()
{
  try {

    connection = await client.connect()
    console.log('Connected to postgres')
    
  } catch (error) {
    console.log('Error connecting to PostgreSQL database', error);
  }
}
module.exports={
  client,
  dbConnection
}
