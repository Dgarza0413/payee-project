require('dotenv').config();
const compression = require("compression")
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on ${PORT}`);
});


