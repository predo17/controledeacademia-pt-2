const express = require ('express');
const routes = express.Router()
const instructors = require ('./instructors')

routes.get('/',function(req,res){
    return res.redirect ("/instructors")
})

routes.get('/instructors',function(req,res){
    return res.render ("instructors/index")
})

routes.get('/instructors/create',function(req,res){
    return res.render ("instructors/create")
})
routes.get('/instructors/:id/edit', function(req,res){
    return res.render ("instructors/edit")
})
 routes.get("/members",function(req,res){
    return res.render("members")
})

routes.get('/instructors/edit/:id',instructors.editNow)

routes.get ('/instructors/:id',instructors.show)

routes.post ("/instructors", instructors.post)

routes.put("/instructors",instructors.put)

routes.put("/members",instructors.post)

// routes.delete("/instrutors",instructors.delete)


module.exports = routes
