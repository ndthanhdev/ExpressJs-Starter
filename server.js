/**
 * Module dependencies.
 */
const express = require("express");
const compression = require("compression");  // compresses requests
const bodyParser = require("body-parser");
const logger = require("morgan");
const errorHandler = require("errorhandler");
const dotenv = require("dotenv");

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: ".env.example" });

/**
 * Controllers (route handlers).
 */
const homeController =  require("./controllers/home");

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Primary app routes.
 */
app.get("/", homeController.index);

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());


/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get("port"), app.get("env"));
    console.log("  Press CTRL-C to stop\n");
});

module.exports = app;