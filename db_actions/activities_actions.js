
/*
 * Call this function to create an activity. Construct a json object
 * to hold all relevant details for an activity (look at db schema),
 * and pass it to this. Instead of passing the HostID, pass the hostEmail
 * instead. Guests will be an empty list because you are creating an activity
 * (i.e. no one can join an activity before it's created). If you don't understand,
 * message @garrett on slack!
 */
function createActivity(activity) {
    fetch('http://localhost:3001/activities', {
        method: 'POST', 
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(activity),
    })
}

/*
 * This function will get an activity given a user's email 
 */
function getActivity(hostEmail, callback) {
    return fetch('http://localhost:3001/activities/' + hostEmail)
    .then((response) => { 
        return response.json().then((data) => {
            return data;
        }).catch((err) => {
            return {}
            console.log(err);
        })
    });
}

/*
 * This function will get all activities
 */
function getActivities() {
    return fetch('http://localhost:3001/activities/')
    .then((response) => { 
        return response.json().then((data) => {
            return data;
        }).catch((err) => {
            return {}
            console.log(err);
        })
    });
}

/*
 * Call this function to add a user to the guests list of an activity (aka joining). 
 * hostEmail: the email of the host of the activity
 * guestEmail: the email of the guest trying to join the activity (the user clicking 'join activity')
 */
function joinActivity(hostEmail, guestEmail) {
    // TODO
}

/*
 * Call this function if you wish to check whether or not a user is hosting. Will return
 * true if hosting, false if not hosting (need to call this before a user creates an activity).
 */
function isUserHosting(hostEmail) {
    getActivity(hostEmail).then((jsonData) => {
        if (JSON.stringify(jsonData).length == 2) {
            return false;
        } else {
            return true;
        }
    })
}

/*
 * This function is to be called when a user wishes to remove an activity 
 * that they are currently hosting. It should also be called when an activity
 * has been up for a user for more than our set time limit for how long an activity
 * can be up for (that is, if we implement that just yet)
 */
function deleteActivity(hostEmail) {
    uri = "http://localhost:3001/activities/" + hostEmail;
    console.log(uri);
    fetch('http://localhost:3001/activities/' + hostEmail, {
        method: 'DELETE'
    }).then(response => response.json());
}

module.exports = {
    createActivity: createActivity,
    getActivity: getActivity,
    isUserHosting: isUserHosting,
    deleteActivity: deleteActivity,
    getActivities: getActivities
};