const express = require("express");
const router = express.Router();
const path = require("path");

// import student and authority models
// import password security utils

router.route("/studentlogin").get((req, res) => {
  res.render("login", { role: "student" });
});

router.route("/authoritylogin").get((req,res)=>{
    res.render('login',{role:'authority'})
})

module.exports = router;