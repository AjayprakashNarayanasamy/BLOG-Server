const express = require("express")
const router = require('./routes/index')
const { client, dbConnection} = require("./database/index")
const app = express()
const port = 8000 || process.env.PORT
app.use(express.json())
app.use(router)
dbConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch(error => {
    console.error('Failed to start server:', error);
    process.exit(1); // Exit the process with a non-zero status code
  });