const express = require("express")
const { client, dbConnection} = require("./database/index")
const app = express()
const port = 8000 || process.env.PORT
app.use(express.json())
app.get("/",async(req,res,next)=>{
    try {
        // Here you can make database queries since the connection is ensured
        // For example, query all users from the database
        const users = await client.query('SELECT * FROM users');
        res.json(users.rows);
      } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Error fetching users' });
      }
})
// app.get("/users",(req,res,next)=>{
//     res.send("Ajay")
// })
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