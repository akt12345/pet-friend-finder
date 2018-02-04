// create object to send to frontend
var dog = {
  name:"skipper",breed: "small dog"
}

module.exports = function(app){
  app.get("/friends", function(req,res){
    res.json(dog)
  })
}
