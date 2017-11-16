var sub = 'http://128.54.97.9:3001/preferences/';

// create new user preferences 
function createPreferences(email, categories) {

    // categories must be an array of booleans 
    var user = { email: email, notif_tog: true, radius: 50, categories: categories};
    // use fetch() to make HTTP requests to our api
    return fetch(sub, {
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
    return fetch(path, {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
    }).then(response=>response.json())
    .then(data=>{
        return data;
    })
}

// set notification toggle
function setToggle(email, notif_tog) {

    var path = sub + 'setToggle/';
    // use fetch() to make HTTP requests to our api
    // TODO: can I just enter user with this parameter 
    var user = {"email": email, "notif_tog": notif_tog};
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
    return fetch(path, {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
    }).then(response=>response.json())
    .then(data=>{
        // TODO can you just return the integer in this way 
        return data.radius;
    })
}

// set notification radius
function setRadius(email, radius) {
    var path = sub + 'setRadius/';
    // use fetch() to make HTTP requests to our api
    // TODO only some parameters as mentioned above ^ 
    var user = {"email": email, "radius": radius};
    return fetch(path, {
        method: 'PUT', 
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    }).then(data=>{
        return true;
    });
}

// update list of categories 
// set notification radius
function updateCategories(email, categories) {
    
    var path = sub + 'updateCategories/' + email;
    // use fetch() to make HTTP requests to our api
    // TODO only some parameters as mentioned above ^ 
    var user = {"email": email, "categories": categories};
    return fetch(path, {
        method: 'PUT', 
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    }).then(data=>{
        return true;
    });
}

// find the notification radius 
function getCategories(email) {
    // fix string passed in
    var path = sub + 'getCategories/' + email;
    return fetch(path, {
        method: 'GET',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
    }).then(response=>response.json())
    .then(data=>{
    
        // TODO can you just return the integer in this way 
        return data.categories;
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
