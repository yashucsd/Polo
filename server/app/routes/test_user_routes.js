// MongoDB requires not just an ID as a string, but as an ID object
var ObjectID = require('mongodb').ObjectID;

// in express, routes are wrapped in a function, which takes
// the express instance and a database as args
module.exports = function(app, db) {
    
    // find test user by mLab assigned id
    app.get('/test_users/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('test_users').findOne(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
            }
        })
    });

    // find all test users
    app.get('/test_users', (req, res) => {
        db.collection('test_users').find().toArray((err, item) => {
            if (err) {
                res.send({'error':'An error has occured'});
            } else {
                res.send(item);
            }
        })
    })

    // when the app receives a post request to the '/test_users' path,
    // it will execute the code inside the callback, passing in a request
    // object (which contains the parameters or JSON of the request) and a 
    // response object (used to reply)
    app.post('/test_users', (req, res) => {
        const user = { name: req.body.name, email: req.body.email, title: req.body.phone }
        db.collection('test_users').insert(user, (err, result) => {
            if (err) {
                res.send({ "error": "An error has occured"});
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    // delete test user with mLab assigned ID
    app.delete('/test_users/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('test_users').remove(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send('Note ' + id + ' deleted!');
            }
        })
    })

    // update test user
    app.put('/test_users/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const user = { name: req.body.name, email: req.body.email, title: req.body.phone }
        db.collection('test_users').update(details, user, (err, result) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(note);
            }
        });
    });
};