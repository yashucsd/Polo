var sub = 'http://localhost:3001/preferences/';

// create new user preferences 
function createPreferences(email, categories) {

    // categories must be an array of booleans 
    var user = { "email": email, "notif_tog": true, "radius": 50, "categories": categories};
    
    // use fetch() to make HTTP requests to our api
    var path = sub;
    fetch(path, {
        method: 'POST', 
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
}

// check if toggleOn
function getToggle(email) {
    
    // fix the string passed in 
    var path = sub + 'getToggle/' + email; 
    fetch(path, {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
    }).then(response=>response.json())
    .then(data=>{
        if (data == 'true') 
            return true;
        else {
            return false;
        }
    })
}

// set notification toggle
function setToggle(email) {

    var path = sub + 'setToggle/' + email;
    // use fetch() to make HTTP requests to our api
    // TODO: can I just enter user with this parameter 
    var user = {"email": email};
    fetch(path, {
        method: 'PUT', 
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
}

// find the notification radius 
function getRadius(email) {

    // fix string passed in
    var path = sub + 'getRadius/' + email;
    fetch(path, {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
    }).then(response=>response.json())
    .then(data=>{

        // TODO can you just return the integer in this way 
        return data;
    })
}

// set notification radius
function setRadius(email, radius) {
    
    var path = sub + 'setRadius' + email;
    // use fetch() to make HTTP requests to our api
    // TODO only some parameters as mentioned above ^ 
    var user = {"email": email, "radius": radius};
    fetch(path, {
        method: 'PUT', 
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
}

// update list of categories 
// set notification radius
function updateCategories(email, categories) {
    
    var path = sub + 'updateCategories/' + email;
    // use fetch() to make HTTP requests to our api
    // TODO only some parameters as mentioned above ^ 
    var user = {"email": email, "categories": categories};
    fetch(path, {
        method: 'PUT', 
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
}

// find the notification radius 
function getCategories(email) {
    
    // fix string passed in
    var path = sub + 'getCategories/' + email;
    fetch(path, {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
    }).then(response=>response.json())
    .then(data=>{
    
        // TODO can you just return the integer in this way 
        return data;
    })
}

// get categories

module.exports = {
    // place functions here 
    createPreferences: createPreferences,
    getToggle: getToggle,
    setToggle: setToggle,
    getRadius: getRadius,
    setRadius: setRadius,   
    updateCategories: updateCategories,
    getCategories: getCategories
    
};
