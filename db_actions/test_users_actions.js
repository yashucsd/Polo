function createTestUser(name, email, phone) {
    var user = { "name": name, "email": email, "phone": phone };
    
    // use fetch() to make HTTP requests to our api
    fetch('http://128.54.97.9:3001/test_users', {
        method: 'POST', 
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    })
}

module.exports = {
    createTestUser: createTestUser
};