var http = require('http');
var express = require('express');
const cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var port = process.env.PORT || 1337;
// var fs = require('fs')

var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// fs.readFile('locations.json', 'utf8', function(err, data) {
//     console.log(data)
// });

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

//Start server
var server = http.createServer(app);
server.listen(port);

console.log("Server is running...");

module.exports = app;
