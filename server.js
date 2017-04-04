var express = require("express");
var app = express();
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
//usersRouter = require("./routes/users");
//var app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.set("view engine", "ejs");

require('ejs');

const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);


//Get all users
app.get('/users', function(req, res) {
    knex('users').then((users) => {
            console.log(users);
            res.send(users);
        })
        .catch((err) => {
            console.log(err);
        });
});

//Render the data entry page to insert a user
app.get('/users/new', function(req, res) {

    //console.log('Get new user route');
    res.render('users/new');
});

//Render the data entry page to update a user
app.get('/users/update', function(req, res) {

    //console.log('Get new user route');
    res.render('users/update');
});


app.post('/users', function(req, res) {
    //console.log(req.body);

    knex('users').insert(req.body.user)
        .returning('id')
        .then((id) => {
            res.redirect(`/users/${id}`)
        })
        .catch(function(e) {
            console.log("Error inserting user " + e);
        });

});

app.put('/users', function(req, res) {
    console.log("In user update route");
    res.return("In user update route");
    // knex('users')
    // .where('id', req.params.userID)
    // .update({
    //
    // })
});



//Get a single user based on the user ID
app.get('/users/:userID', function(req, res) {

    console.log('Get single user route');


    knex('users')
        .where("id", req.params.userID)
        .then((user) => {
            console.log(user);
            //res.send(user);
            res.render('users/display', {
                user_id: user[0].id,
                full_name: user[0].full_name,
                user_name: user[0].user_name,
                img_url: user[0].img_url
            });
        }) //end then
        .catch((err) => {
            console.log(user[0]);
            console.log(err);
        });
});

//Add a user

//Update a single User
// app.put('/users/:userID', function(req, res) {
//
// });

app.listen(3000, function() {
    console.log("Server is listening on port 3000");
});
