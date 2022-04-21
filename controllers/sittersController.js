const express = require('express');
const router = express.Router();
const sitterData = require('../PetsitterData.json');




router.get('/', (request, response) => {
    response.json(sitterData);  
})


module.exports = router;