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

let students = [
    {
        id: 1,
        name: 'Ralph Monsalud',
        course: 'BSIT'
    },
    {
        id: 2,
        name: 'John Lloyd Prestoza',
        course: 'BSIT'
    },
    {
        id: 3,
        name: 'Khen Ashley Limos',
        course: 'BSIT'
    },
    {
        id: 4,
        name: 'Allen Dave Barte',
        course: 'BSIT'
    },
    {
        id: 5,
        name: 'John Ivan De Guzman',
        course: 'BSIT'
    },
    {
        id: 6,
        name: 'Andrew Agojo',
        course: 'BSIT'
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

app.get('/students', (req, res) => {
    res.status(200).json(students);
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

app.post('/students', (req, res) => {
    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({
            error: 'Name and course are required'
        });
    }

    const newStudent = {
        id: students.length + 1,
        name: name.trim(),
        course: course.trim()
    };

    students.push(newStudent);
    res.status(201).json(newStudent);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});