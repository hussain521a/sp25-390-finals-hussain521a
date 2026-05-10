"use strict";

 
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // This enables CORS for all routes and origins
 
// Parse JSON request bodies (needed for POST)
app.use(express.json());

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', message: "Yello"},
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: "Hola"}
];

let nextId = 3;

app.get('/users', (req, res) => {
    res.json(users)
});

app.post('/users', (req, res) => {
    const { Name, emailAddress, message } = req.body;

    if (!Name || !emailAddress || !message) {
        return res.status(400).json({
        error: "all fields are required"
        });
    }

    // const duplicateUser = users.contains(user.email === emailAddress);
    // if (duplicateUser) {
    //     return res.status(400).json({
    //
    //     error: "email already exists"    //     });
    // }

    const newUser = {
        id: nextId++,
        name: Name,
        email: emailAddress,
        message
    };

    users.push(newUser);

    res.status(201).json(newUser);
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



