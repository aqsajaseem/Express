let exp_lib = require('express');
let sirf_express = exp_lib()
let path_library = require("path");

let static_file = path_library.join(__dirname , "Files")

sirf_express.use(exp_lib.static(static_file))

sirf_express.get("/",function(a,b){
    b.sendFile(path_library.join(static_file , "Home.html"))
})

sirf_express.get("/c",function(a,b){
    b.sendFile(path_library.join(static_file , "Contact.html"))
})

sirf_express.get("/a",function(a,b){
    b.sendFile(path_library.join(static_file , "About.html"))
})

sirf_express.listen(7000)