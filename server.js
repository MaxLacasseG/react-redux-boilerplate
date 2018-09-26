const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const logger = require("tracer").colorConsole();

//require routes

const mongoose = require("mongoose");
//connect mongoose

//Add passport

//use middlewares

// use routes
app.listen(port, err => {
    logger.trace(`listening on port ${port}`);
});
