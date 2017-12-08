var ObjectID = require('mongodb').ObjectID;
var assert = require('assert');
/*import email from ./../signUpScreenn.js'
signup.email */

module.exports = function(app, db) {

    // SIGN UP SCREEN: ALL POST METHODS SINCE CREATING NEW USER 
    //WORKS
    app.get('/preferences/', (req,res)=>{
        res.send("PREFERENCE SERVER WORKING");
    });

    // POST all perferences of the user, with an email, have to pass in email to this
    //WORKS
    app.post("/preferences/", (req, res)=>{
        //var ins = {email:req.body.email, notif_tog:req.body.notif_tog, radius: req.body.radius, categories: req.body.categories};
        db.collection('preferences').insert(req.body, (err,result)=>{
            assert.equal(err,null);
            res.sendStatus(200);
        });
    });

    // get notifications toggle value 
    app.get('/preferences/getToggle/:email', (req, res) => {

        const email = {"email": req.params.email};
        db.collection('preferences').findOne(email, (err, item) => {
            assert.equal(err,null);
            if(item.notif_tog){
                res.send(true);
            }else{
                res.send(false);
            }
        })
    });

   // update notificaiton toggle
    app.put('/preferences/setToggle/', (req, res) => {

        const email = {"email": req.body.email};
        // store value of found notif_toggle
        const update = {"$set": {"notif_tog": req.body.notif_tog} };

        // need to find current value first
        db.collection('preferences').updateOne(email, update,(err,item) => {
            assert.equal(err,null);
        })

        
    });

    
    // get notifications radius value 
    //WORKS
    app.get("/preferences/getRadius/:email", (req, res) => {
        const val = {email: req.params.email};
        db.collection('preferences').findOne(val, (err, item) => {
            assert.equal(err,null);
            res.send({radius: item.radius});
        })
    });


   // update notificaiton radius
   //WORKS
    app.put('/preferences/setRadius/', (req, res) => {
        console.log("NEW RADIUS IS " + req.body.radius);
        const email = { "email": req.body.email };
        // store the notification value found 
        const radius = { "$set" :{"radius": req.body.radius} };
        // user found with specified email, update its radius value 
        db.collection('preferences').updateOne(email, radius, (err, result) => {
          assert.equal(err,null);
          res.send(200);
        });
    });

    // update list of categories 
    //WORKS
    app.put('/preferences/updateCategories/:email', (req, res) => {
        
        const email = {"email": req.body.email};
        // store the notification value found 
        const categories = {"$set": {"categories": req.body.categories} };
        // user found with specified email, update its radius value 
        db.collection('preferences').updateOne(email, categories, (err, result) => {
            assert.equal(err,null);
            res.send(200);  
        });
    });

    // get the list of categories 
    //WORKS
    app.get('/preferences/getCategories/:email', (req, res) => {
        const email = {email: req.params.email};
        db.collection('preferences').findOne(email, (err, item) => {
            assert.equal(err,null);
            res.send({categories: item.categories});
        })
    });

}
