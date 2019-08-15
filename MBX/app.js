const express = require('express');
var server = express();
var userRouter = require('./router/user.js');
var mbxRouter = require('./router/mbx.js');
var textCartRouter = require('./router/textCart.js');
const bodyParser = require('body-parser');
const cors = require('cors');
server.listen(8080);
//npm i -save cors
server.use(cors({
    origin: "*"
        //http://www.mubeixi.top http://127.0.0.1:5500
}));

server.use(bodyParser.urlencoded({
    extended: false
}));

server.use(express.static('public'));
server.use('/user', userRouter);
server.use('/mbx', mbxRouter);
server.use('/text', textCartRouter);