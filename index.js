const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

// app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));
//Built in middle-wares
// console.log(path.join(__dirname,"/views"));

// const staticPath = path.join(__dirname,"/views");

 app.use(express.static(path.join(__dirname,"/views")));

app.get("/",(req,res) => {
    res.send("home.html");
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});