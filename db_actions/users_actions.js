var sub = "http://localhost:3001/users/";

//pass in email to check if user exists
//return true if it exists
//returns false if it doesn't exists
function checkEmail(email){
		var link = sub + email;
		return fetch(link, {method: "GET", 
			headers: {
        		'Accept': 'application/json',
        		'Content-Type': 'application/json',
        	}})
		.then(response=>response.json())
		.then(data=>{
			//console.log("EMAIL DOES EXIST FRONT");
			//return true;
			if(data){
				console.log("EMAIL DOES EXIST FRONT");
			}else{
				console.log("EMAIL DOES NOT EXIST FRONT");
			}
			return data;			
		});
	
}


//checks to see if phone exists
//returns true if it exists
//returns false if it doesnt exist
function checkPhone(phone){
		var link = sub + "getPhone/" + phone;
		return fetch(link, {method: "GET", 
			headers: {
				'Accept': 'application/json',
        		'Content-Type': 'application/json',
			}})
		.then(response=>response.json())
		.then(data=>{
			if(data){
				console.log("PHONE DOES EXIST FRONT");
			}else{
				console.log("PHONE DOES NOT EXIST FRONT");
			}
			return data;
		});
	
}

//adding user into the system
function addUser(name, email, phone, password){
	var user = {name: name, email:email, phone:phone, password: password};
		var link = sub;
		return fetch(link, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
        		'Content-Type': 'application/json',
			},
			body: JSON.stringify(user)
		}).then(message=>{
			if(message == 200){
				return true;
			}else{
				return false;
			}
		}).catch(err=>{
			//something went wrong
			console.log("ERROR IS" + err.message);
			throw err;
		});
}


//gets info of user
//returns object in form of an object 
// {name: "name", email: "email@gmail.com", phone: "123-456-7890", password: "asdf"}
function getUser(email){

		var link = sub + "getUser/" + email;
		return fetch(link, {
			method: "GET",
			headers: {
				'Accept': 'application/json',
        		'Content-Type': 'application/json',
			}})
		.then(response=>response.json())
		.then(data=>{
			var obj = {name: data.name, email: data.email, phone: data.phone, password: data.password};
			return obj;

		});


	
}



//return user picture
module.exports = {
	checkEmail: checkEmail,
	checkPhone: checkPhone,
	addUser: addUser,
	getUser: getUser
}


