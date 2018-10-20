var express = require("express");
var app = express();
var bodyParser = require("body-parser");

//for express to use body parseur
app.use(bodyParser.urlencoded({extended:true}));

//to access html files with9 .laladid a
app.use(express.static("public"));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image: "/img/Camp1.jpg"},
  {name: "Granite Hill", image: "/img/Camp2.jpeg"},
  {name: "Salmon Creek", image: "/img/Camp1.jpg"},
  {name: "Granite Hill", image: "/img/Camp2.jpeg"},

];

app.get("/", function(req, res){
  res.render("homepage");
});

app.get("/campgrounds", function(req, res){
  res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newcamp = {name: name, image : image};
  campgrounds.push(newcamp);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("newcamp");
});



//listening port
app.listen(4000, function (){
	console.log('server started');
});
