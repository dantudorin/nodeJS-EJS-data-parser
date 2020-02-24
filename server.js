const express = require('express');
const aboutRoute = require('./routes/about');
const indexRoute = require('./routes/index');
const errorController = require('./controllers/errorController');

const application = express();

application.set('view engine', 'ejs');

application.use(express.static(__dirname + '/public'));
application.use(aboutRoute);
application.use(indexRoute);

application.use(errorController.notFound);

const serverPort = 3000;

application.listen(serverPort);
