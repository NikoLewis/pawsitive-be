const express = require("express");
const app = express();
const cors = require("cors");

const sittersController = require("./controllers/sittersController");

app.use(cors());

app.use('/sitters', sittersController);

app.get('/', (request, response) => {
    response.status(200).send('Welcome to Pawsitive!');
})

module.exports = app;