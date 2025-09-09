const express = require("express");

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(3000)

//Adding env vairiables using the terminal 

// -e [env varialble]

console.log(process.env.NAME);


