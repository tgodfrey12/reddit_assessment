var express = require("express");
router = express.Router();


router.route("users/new")
    .get(function(req, res) {
        res.render("users/new");
    });

router.route("users/update")
    .get(function(req, res) {
        res.render("users/update");
    });
