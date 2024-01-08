const express = require("express");
const app = express();
require('dotenv').config()
const port = process.env.APP_PORT || 3000;

app.get("/", (req, res) => {
    res.json({ "data": "Hello man.This is data from API."});
});

app.listen(port, () => {
    console.log("Starting node.js at port " + port);
});