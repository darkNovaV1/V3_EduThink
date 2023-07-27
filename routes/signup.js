const express = require("express");
const router = express.Router();
const path = require("path");

// import student and authority models
// import password security utils

router.route("/studentsignup").get((req, res) => {
  res.render("signup", { role: "student" });
});

router.route("/authoritysignup").get((req,res)=>{
    res.render('signup',{role:'authority'})
})

module.exports = router;