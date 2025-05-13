// server.js
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path')



const app = express();
app.use(bodyParser.json());

const users = [];
const secretKey = 'yourSecretKey';

app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;
  const userExists = users.find(user => user.email === email);
  if (userExists) {
    return res.status(409).send({ message: 'Email already exists' });
  }
  const newUser = { id: users.length + 1, name, email, password };
  users.push(newUser);
  const token = jwt.sign({ id: newUser.id }, secretKey);
  res.status(201).send({ message: 'User created', token });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).send({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user.id }, secretKey);
    res.status(200).send({ message: 'Logged in', token });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});