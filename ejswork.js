 let exp = require("express")
 let myexp = exp();
 let path = require("path")

 myexp.use("/css",exp.static(path.join(__dirname,"node_modules","bootstrap","dist","css")))
 myexp.use("/js",exp.static(path.join(__dirname,"node_modules","bootstrap","dist","js")))

 myexp.set("view engine" , "ejs")
 myexp.get("/" , function(a,b){
    let planet = ["Earth" , "Mars" , "Jutiper", "Venus"]
    b.render("Home",{p : planet})
 })
 myexp.get("/a" , function(a,b){
    let planet = [
        {name:"Earth" , image:"https://www.esri.com/news/arcuser/0610/graphics/nospin_1-lg.jpg",Description:"Hi I am Earth"},
        {name:"Mars" , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSOXems5hecNN2eFScMMeDSGTgZBCJ4jCNHw&s",Description:"Hi I am  Mars"},
        {name:"Jupiter" , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTIWPqNK9ACuaTRT9Itha96bGQtZrBVGZMDA&s",Description:"Hi I am Jupiter"},
        {name:"Venus" , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa2nKRCeIiXw0Ea2gm5GvklXGHgLcIQFE2Sg&s",Description:"Hi I am Venus"},
        ]
        b.render("about" ,{p : planet})
 })
 myexp.get("/c" , function(a,b){
  
   b.render("Criminal")
})
myexp.get("/d" , function(a,b){
  
   b.render("Domestic")
})

 myexp.listen(2001)