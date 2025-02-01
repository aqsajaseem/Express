 let exp = require("express")
 let myexp = exp();

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

 myexp.listen(2001)