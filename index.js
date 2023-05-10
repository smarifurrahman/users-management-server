const express = require('express');
var cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: "Shabana", email: "shabana@gmail.com" },
    { id: 2, name: "Shabnur", email: "shabnur@gmail.com" },
    { id: 3, name: "Sabila", email: "sabila@gmail.com" },
]

app.get('/', (req, res) => {
    res.send('Users management server is running.');
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log('post api hitting');
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});