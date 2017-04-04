
Steps to create MVP

Create the database
  Users: | user_id | full_name  | username | img_url

Get a package.json file from a prior project
  run npm install --g

Create the server.js file
  Add listener
  Include express
  Make sure server is running

Create an app.js file
  Add routes for users
    View all
      Implment knex query
    View One
      Implment knex query with parm for userID
    Insert New
      Implment knex insert
    Update
      Implment knex update with parm for UserID
    Delete
      Implment knex update with parm for UserID

Implement ejs
  Create files in the views directory for each route
