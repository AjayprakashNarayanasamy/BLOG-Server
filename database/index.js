const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("Blog", "ajayprakashn66", "2RBoXu9bagnM", {
    host: "ep-fragrant-king-257539.ap-southeast-1.aws.neon.tech",
    dialect: "postgres",
    dialectOptions: {
      ssl: true, // or "require"
    },
  });
  const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  module.exports = { sequelize, testDbConnection };
