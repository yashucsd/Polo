var sub = "http://localhost:3001/users/";

//pass in email to check if user exists
//return true if it exists
//returns false if it doesn't exists
function checkUser(email){
	return function(){
		var link = sub + email;
		fetch(link, {method: "GET", 
			headers: {
        		'Accept': 'application/json',
        		'Content-Type': 'application/json',
        	}})
		.then(response=>response.json())
		.then(data=>{
			if(!data){
				return true;
			}else{
				return false;
			}
		});
	}
}

//adding user into the system
function addUser(name, email, phone, password, list){
	var user = {name: name, email:email, phone:phone, password: password, list: list};
	return function(){
		var link = sub;
		fetch(link, {
			method: "POST",
			headers: {
				'Accept': 'application/json',
        		'Content-Type': 'application/json',
			},
			body: JSON.stringify(user)
		});
	}
}


//gets info of user
function getUser(email){
	return function(){
		var link = sub + "getUser/" + email;
		fetch(link, {
			method: "GET",
			headers: {
				'Accept': 'application/json',
        		'Content-Type': 'application/json',
			}})
		.then(response=>response.json())
		.then(data=>{
			console.log(data.name);
		});
	}
}


//return user picture
module.exports = {
	checkUser: checkUser,
	addUser: addUser,
	getUser: getUser
}