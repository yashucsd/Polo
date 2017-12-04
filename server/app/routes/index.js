const testUserRoutes = require('./test_user_routes.js');
const userRoutes = require('./users_routes.js')
const activitiesRoutes = require('./activities_routes.js');
//const preferencesRoutes = require('./preferences_routes.js')

module.exports = function(app, db) {
    testUserRoutes(app, db);
    userRoutes(app, db);
    activitiesRoutes(app, db);
    //preferencesRoutes(app, db);
}
