const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile.js')["development"])
const cookieParser = require('cookie-parser');

//Important middleware for utilizing cookies from the server
app.use(cookieParser());

// CORS failsafe in case there is a problem with the browser (prior experience)
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

//Middleware for express
app.use(express.json());

//Let's see if the server is online
app.get('/', (req, res) => {
    res.send('Application running, Please Use an Endpoint For API discovery')
})

//Endpoint for all the users on the platform 
app.get('/userbase', (req, res) => {
    knex('userbase')
        .select('*')
        .then(data => res.status(200).json(data))
        .catch((err) => res.status(500).json(err));
})
//Endpoint for all the listed items
app.get('/items', (req, res) => {
    knex('item')
        .select('*')
        .then(data => res.status(200).json(data))
        .catch((err) => res.status(500).json(err));
})

//Endpoint where new users will be added to database after registering
app.post('/userbase', (req, res) => {
    const newUser = req.body;
    knex('userbase')
        .insert(newUser)
        .then(() => res.status(201).json('New log has been added.'))
        .catch((err) => res.status(500).json(err));
});

//Endpoint For Mangers to Post New Items
app.post('/items', (req, res) => {
    const newItem = req.body;
    knex('item')
        .insert(newItem)
        .then(() => res.status(201).json('New item has been added.'))
        .catch((err) => res.status(500).json(err));
});

//Verification of users against the users already listed in the database to ensure they are authorized 
app.post('/userbase/verify', async (req, res) => {
    const { UserName, Password } = req.body;
    const verifyUser = await knex('userbase')
        .where('UserName', UserName)
        .andWhere('Password', Password).first();
    if (!verifyUser) {
        return res.status(400).json({ error: 'Not Verified' });
    }
    res.json({ message: 'Successfully verified', userId: verifyUser.id });
});


//Endpoint to get items by ID
app.get('/items/:id', (req, res) => {
    const id = req.params.id;
    knex('item')
        .where('id', id)
        .then(data => res.status(200).json(data))
        .catch((err) => res.status(500).json(err));
})

//Endpoint to add items
app.patch('/items/:id', (req, res) => {
    const id = req.params.id;
    const updatedItems = req.body;
    knex('item')
        .where('id', id)
        .update(updatedItems)
        .then(() => res.json('Item has been updated.'))
        .catch((err) => res.status(500).json(err));
});

// Endpoint for deleting Item listed
app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    knex('item')
        .where('id', id)
        .del()
        .then(() => res.json('Item has been deleted.'))
        .catch((err) => res.status(500).json(err));
});

//Inventory Manager Postings by UserId, might not be used if I can't implement
app.get('/items/user/:userId', (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    knex('item')
        .where('UserId', userId)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(500).json(err));
});

// The endpoint for the cookies
app.get('/cookie', (req, res) => {
    const userId = req.cookies.userId;
    if (userId) {
        res.status(200).json({ verified: true, userId: userId });
    } else {
        res.status(401).json({ verified: false });
    }
});
// Standard Listening to ensure everything is working from the terminal
app.listen(port, () => {
    console.log('Knex and Express applications running successfully')
})
