var ObjectID = require('mongodb').ObjectID;

/*import email from ./../signUpScreenn.js'
signup.email */

module.exports = function(app, db) {

    // SIGN UP SCREEN: ALL POST METHODS SINCE CREATING NEW USER 

    app.get('/preferences/', (req,res)=>{
        res.send("PREFERENCE SERVER WORKING");
    });

    // POST all perferences of the user, with an email, have to pass in email to this
    app.post("/preferences/", (req, res)=>{
        var ins = {email:req.body.email, notif_tog:req.body.notif_tog, radius: req.body.radius, categories: req.body.categories};
        db.collection('preferences').insert(ins, (err,result)=>{
            res.sendStatus(200);
        });
    });

    // get notifications toggle value 
    app.get('/preferences/getToggle/:email', (req, res) => {

        const email = {"email": req.params.email};
        db.collection('preferences').findOne(email, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {

                // send item only if the notification is false otherwise null 
                if(item.notif_tog == true){
                    res.send('true');
                }else{
                    res.send('false');
                }
            }
        })
    });

   // update notificaiton toggle
    app.put('/preferences/updateToggle/:email', (req, res) => {

        const email = {"email": req.params.email};
        // store value of found notif_toggle
        var toggle_on = false;

        // need to find current value first
        db.collection('preferences').findOne(email, (err,item) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {

                // check the notification
                if (item.notif_tog == true) {
                    toggle_on = true;
                } 
            }
        })

        // store the notification value found 
        const toggle = {"notif_toggle": toggle_on};

        // user found with specified email, update its toggle 
        db.collection('preferences').updateOne(email, toggle, (err, result) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(toggle);
          } 
        });
    });

    
    // get notifications radius value 
    app.get('/preferences/getRadius/:email', (req, res) => {

        const email = {"email": req.params.email};
        db.collection('preferences').findOne(email, (err, item) => {
            if (err) {
                res.send({'error': 'An error has occurred'});
            } else {
                res.send(item.radius);
            }
        })
    });


   // update notificaiton radius
    app.put('/preferences/updateRadius/:email', (req, res) => {

        const email = {"email": req.params.email};
        // store the notification value found 
        const radius = {"radius": req.params.radius};
        // user found with specified email, update its radius value 
        db.collection('preferences').updateOne(email, radius, (err, result) => {
          if (err) {
              res.send({'error':'An error has occurred'});
          } else {
              res.send(radius);
          } 
        });
    });

    // update list of categories 
    app.put('/preferences/updateCategories/:email', (req, res) => {
        
        const email = {"email": req.params.email};
        // store the notification value found 
        const categories = {"categories": req.params.categories};
        // user found with specified email, update its radius value 
        db.collection('preferences').updateOne(email, categories, (err, result) => {
        if (err) {
            res.send({'error':'An error has occurred'});
             } else {
                res.send(categories);
              } 
        });
    });

    // get the list of categories 
    app.get('/preferences/getCategories/:email', (req, res) => {
        
        const email = {"email": req.params.email};
        db.collection('preferences').findOne(email, (err, item) => {
        if (err) {
            res.send({'error': 'An error has occurred'});
            } else {
            res.send(item.categories);
            }
        })
    });

}