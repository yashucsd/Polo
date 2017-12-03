var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

    // get all activities
    app.get('/activities', (req, res) => {
        db.collection('activities').find().toArray((err, item) => {
            if (err) {
                res.send({'error':'An error has occured'});
            } else {
                res.send(item);
            }
        })
    })

    // get an activity hosted by a user 
    app.get('/activities/:hostEmail', (req, res) => {
        const id = req.params.hostEmail;
        const hostEmail = { "hostEmail": req.params.hostEmail }
        db.collection('activities').findOne(hostEmail, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
            }
        })
    });

    // get an activity by activity ID (this is for when a user wishes to join an activity)
    app.get('/activities/:id', (req, res) => {
        const id = req.params.id;
        const activityID = { '_id': new ObjectID(id) };
        db.collection('activities').findOne(activityID, (err, activity) => {
            if (err) {
                res.send({'error':'Could not get activity'});
            } else {
                res.send(activity);
            }
        })
    })

    // create activity
    app.post('/activities', (req, res) => {
        const activity = { 
            startTime: req.body.startTime,
            location: req.body.location,
            category: req.body.category,
            title: req.body.title,
            description: req.body.description,
            emoji: req.body.emoji,
            rating: req.body.rating,
            hostEmail: req.body.hostEmail,
            guests: req.body.guests,
        }
        db.collection('activities').insert(activity, (err, result) => {
            if (err) {
                res.send({ "error": "An error has occured"});
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    // update activity
    app.post('/activities/:guestEmail', (req, res) => {
        const activity = { 
            startTime: req.body.startTime,
            location: req.body.location,
            category: req.body.category,
            title: req.body.title,
            description: req.body.description,
            emoji: req.body.emoji,
            rating: req.body.rating,
            hostEmail: req.body.hostEmail,
            guests: req.body.guests,
        }
        db.collection('activities').updateOne(
            { hostEmail: req.body.hostEmail }, 
            { $push: { guests: [req.body.guestEmail] } }
        )
    })

    // delete activity
    app.delete('/activities/:hostEmail', (req, res) => {
        const hostEmail = {"hostEmail": req.params.hostEmail}
        db.collection('activities').remove(hostEmail, (err, item) => {
            if (err) {
                res.send({'error':'Could not delete activity'});
            } 
        });
    })

}