const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    {
        id: 1,
        name: 'Ralph Monsalud'
    },
    {
        id: 2,
        name: 'John Lloyd Prestoza'
    },
    {
        id: 3,
        name: 'Khen Ashley Limos'
    },
    {
        id: 4,
        name: 'Allen Dave Barte'
    },
    {
        id: 5,
        name: 'John Ivan De Guzman'
    },
    {
        id: 6,
        name: 'Andrew Agojo'
    }
];

app.get('/', (req, res) => {
    res.send('Welcome to our API');
});


app.get('/about', (req, res) => {
    res.json({
        message: 'This is the first Express API of Group 3 of SYSDEV03-1'
    });
});


app.get('/users', (req, res) => {
    res.status(200).json(users);
});


app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.post('/users', (req, res) => {
    const { name } = req.body;

    if (!name || typeof name !== 'string') {
        return res.status(400).json({
            error: 'Name is required and must be a string'
        });
    }
    
    const newUser = {
        id: users.length + 1,
        name: name.trim()
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok'
    });
});

app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found'
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});