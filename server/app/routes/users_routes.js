var ObjectID = require('mongodb').ObjectID;
var assert = require('assert');

module.exports = function(app, db) {
	
	//getting email for User check
	app.get("/users/:email", (req,res)=>{
		var email = req.params.email;
		const val = {email: email};
		db.collection('Users').findOne(val, (err, data)=>{
			assert.equal(err,null);
			if(data){
				console.log("DATA DOES EXIST");
				res.send(data);
			}else{
				console.log("DATA DOES NOT EXIST");
				res.send(null);
			}
		});
	});

	//adding User to database
	app.post('/users/', (req, res) => {
        const user = { name: req.body.name, email: req.body.email, phone: req.body.phone, 
        	password:req.body.password, list:req.body.list }
        db.collection('Users').insert(user, (err, result) => {
        	assert.equal(err,null);
            console.log("Successfully Inserted User");
        });
    });

	//getting User
    app.get("/users/getUser/:email", (req,res)=>{
    	var email = req.params.email;
    	const val = {email: email};
    	db.collection('Users').findOne(val, (err,data)=>{
    		assert.equal(err,null);
    		res.send(data);
    	});
    });
}