const router = require('express').Router()

router.get("/",function(req,res){
    console.log("Home")
    res.render("homepage")
})

router.get("/dashboard",function(req,res){
    console.log("dashboard")
    res.render("dashboard")
})
router.get("/login",function(req,res){
    console.log("login")
    res.render("login")
})

router.get("/profile",function(req,res){
    console.log("profile", req.session.user_id)
    let user = {
        id: req.session.user_id,
        name: req.session.user_name,
        email: req.session.user_email
    }
    res.render("profile", user)
})


router.get("/logout",function(req,res){
    console.log("contact")
    res.render("contact")
})

module.exports = router;
