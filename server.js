require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001
const compression = require("compression")

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(function (req, res) {
    // res.sendFile(path.join(__dirname, "client/build/index.html"));
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on ${PORT}`);
});


