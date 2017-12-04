var ObjectID = require('mongodb').ObjectID;
var assert = require('assert');

module.exports = function(app, db) {

	app.get('/users/', (req,res)=>{
		res.send("USERS WORKING");
	});
	
	//getting email for User check
	app.get("/users/:email", (req,res)=>{
		var email = req.params.email;
		const val = {email: email};
		db.collection('Users').findOne(val, (err, data)=>{
			assert.equal(err,null);
			if(data){
				console.log("Email DOES EXIST");
				res.send(true);
			}else{
				console.log("Email DOES NOT EXIST");
				res.send(false);
			}
		});
	});

	//getting phone for User check
	app.get("/users/getPhone/:phone", (req,res)=>{
		var phone = req.params.phone;
		const val = {phone: phone};
		db.collection('Users').findOne(val, (err,data)=>{
			assert.equal(err,null);
			if(data){
				console.log("Phone EXIST");
				res.send(true);
			}else{
				console.log("Phone DOES NOT EXIST");
				res.send(false);
			}
		});
	});

	//adding User to database
	app.post('/users/', (req, res) => {
        const user = { name: req.body.name, email: req.body.email, phone: req.body.phone, 
        	password:req.body.password}
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
