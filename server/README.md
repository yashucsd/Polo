# Polo Backend/DB
## Starting Server
Our DB is currently run on the cloud DB provider mLab. However, our DB is not hosted on anything (will be on heroku shortly), so you must run the server on localhost.

To do this, you first need to set some environment variables. Modify your `~/.bash_profile` and export two variables
named `mLabUser` and `mLabPass`, each respectively set to their proper credentials (you can see the credentials on slack). This is so that the mongodb client
can connect to our mLab deployment, and so that our credentials are hidden. 

Once you've done the previous step, to start the server, make sure you are in `Polo/server/` and run `npm run dev`. This will startup the server on `localhost:3001`.

## Getting Familiar 
I made some simple changes to App.js for now (using parts of Andrew's original code) where you can submit a simple POST HTTP request
to `http://localhost:3001/test_users`, which is our test users endpoint. You can do this by running the app on your device/simulator and entering in
a name, email, phone number, and then click "Create User", or via the command line: `curl -X POST {insert parsable JSON here that will represent a test user}`.
Once you have done this, you should successfully see your created test user at the endpoint `http://localhost:3001/test_users`.