const testUserRoutes = require('./test_user_routes');

module.exports = function(app, db) {
    testUserRoutes(app, db);
    // other route groups may go here in future
}
