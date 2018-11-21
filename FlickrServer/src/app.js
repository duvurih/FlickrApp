/**
 * Description: Application start-up process
 */

// setting-up initial required packages
const bodyParser = require("body-parser");
const morgan = require("morgan");
const express = require("express");
const logger = console;

// initializing express
const app = express();

// initializing routes
const flickrRoutes = require("./routes/flickr.routes");

// initializing setting
app.set("port", process.env.PORT || 3000);

// setting-up middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// setting-up headers
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// configure routes
app.use("/flickrs", flickrRoutes);

// exception handling
process.on('unhandledRejection', function(reason, promise){
    logger.error('Unhandled rejection',{reason: reason, promise: promise});
});
process.on('uncaughtException', function(error){
    logger.error('Uncaught Exception', {message: error.message});
});

// finally start the server
app.listen(app.get("port"), () => {
  console.log("server on port ", app.get("port"));
});
