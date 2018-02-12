// import declare what are dep are
var express = require ("express")
var bodyParser = require ("body-parser")

// set up express server
var app = express()
app.use(express.static("assets"));
// set up port
var PORT = process.env.PORT || 3000

// set up body parser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// require routes - comment out till its ready
require("./app/routing/apiRoutes.js")(app)
require("./app/routing/htmlRoutes.js")(app)




// set up listner on speciic ports
app.listen(PORT, function(){
console.log("listen on PORT:"+PORT)
});


