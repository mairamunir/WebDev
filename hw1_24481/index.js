
var createError = require('http-errors');
var express = require('express');
const mongoose = require('mongoose');

var app = express();
app.get('/', (req, res) => {
    res.send('hello');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/your_database"); // Update the database name
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

const router = require('./routes/index');
app.use('/', router);

app.use(function (req, res, next) {
    next(createError(404));
});

const PORT = 5600;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
