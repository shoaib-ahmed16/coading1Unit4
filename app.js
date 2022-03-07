const express = require("express");

let app =express();

// app.use("/libraries",(req,res,next)=>{
//     console.log("Request Type:",`${req.path}/libraries`)
//     if(req.path =="/libraries")
//     {
//         res.status(200).json({permission:true})
//     }
//     else
//     {
//         res.status(404).json({permission:false})
//     }
//     next()
// })
app.use("/book",(req,res,next)=>{
    console.log("Request Type:",`${req.method}/book`)
    next()
})

app.use("/libraries",(req,res,next)=>{
    console.log("Request Type:",`${req.method}/libraries`)
    next()
})
app.use("/authors",(req,res,next)=>{
    console.log("Request Type:",`${req.method}/authors`)
    next()
})

app.get("/book",(req,res)=>{
    res.status(200).json({route: "/books"})
})

app.get("/libraries",(req,res)=>{
    res.status(200).json({route: "/libraries",permission: true})
})

app.get("/authors",(req,res)=>{
    res.status(200).json({route: "/authors",permission: true})
})


app.listen(3999,(req,res)=>{
    console.log("Listening to localHost 3999")
})

// ///////////////////////////
