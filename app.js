const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
const mongoose = require("mongoose");

// --------------> Set up Middleware <---------------------

// Serve static files (e.g., js and css) from the "public" folder
app.use(express.static("public"));

// Parse URL-encoded form data and JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set the template engine to EJS
app.set("view engine", "ejs");

// --------------> Set up Routes <---------------------

// Define the routes and their respective paths
const routes = [
  { path: "/login", router: require("./routes/login") },
  { path: "/signup", router: require("./routes/signup") },
  ,
];

// Register the routes with their respective paths
routes.forEach((route) => {
  app.use(route.path, route.router);
});


//---------------> testing <-----------------------------

app.get('/',(req,res)=>{
    res.sendFile('./index.html');
})




// --------------> Start the Server <---------------------

async function startServer() {
    try {
      
  
      // Start listening for incoming connections on port 3000
      app.listen(process.env.PORT ||5000, () => {
        console.log(`Server running on port ${process.env.PORT}`);
      });
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
    }
  }
  
  startServer();

