// Create web server
const express = require('express');
const app = express();
const PORT = 3000;

// Create an array of comments
const comments = [
    {
        id: 1,
        name: "John",
        comment: "Hello!"
    }
];