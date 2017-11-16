// express helps build our api endpoints
const express = require('express');

// MongoClient will interact with the db
const MongoClient = require('mongodb').MongoClient;

// body-parser helps parse JSON requests sent/received
const bodyParser = require('body-parser');
const db = require('./config/db');

// init node app as instance of express framework
const app = express();

// use port 3001 for localhost dev until db is 
// deployed to heroku
const port = "3001";

// express can't process URL encoded forms, so we use
// body-parser to take care of that for us
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// use the mongo client to connect to the db, wrap app setup
MongoClient.connect(db.uri, (err, database) => {
    if (err) {
        return console.log(err);
    }
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log('server live on localhost:' + port);
    });
});
