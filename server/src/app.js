const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')["development"])

//CORS Failsafe 
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


app.use(express.json());



//SERVER IS ONLINE
app.get('/', (req, res) => {
    res.send('Application running, Please Use an Endpoint For API discovery')
})

//Get Userbase
app.get('/userbase', (req, res) => {
    knex('userbase')
        .select('*')
        .then(data => res.status(200).json(data))
        .catch((err) => res.status(500).json(err));
})
//GET Items
app.get('/items', (req, res) => {
    knex('item')
        .select('*')
        .then(data => res.status(200).json(data))
        .catch((err) => res.status(500).json(err));
})

app.listen(port, () => {
    console.log('Knex and Express applications running successfully')
})
