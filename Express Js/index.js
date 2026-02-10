
/*
const express = require("express");


const app = express();

app.get("", (req, resp) => {
  resp.send("<h1>Basic Node JS express</h1>");
});
app.get("/about", (req, resp) => {
  resp.send("<h1>This is about page</h1>");
});
app.get("/contact", (req, resp) => {
  resp.send("<h1>This is contact page</h1>");
});

app.listen(3200);

*/

const express=require('express')
const app=express()
// console.log(app);

// const express=require('express')()
// 👉 A callback is a function passed into another function

app.get("",(req,resp)=>{
    resp.send("<h1>Hello Express js it works now</h1>")
})

app.get("/about",(req,resp)=>{
    resp.send("<h1>Hello About Page Express js it works now</h1>")
})

// app.get("",(req,resp)=>{
//     resp.send("<h1>Hello 2222 Express js it works now</h1>")
// })

app.listen(3400)












// nodemon → needs global install

// npx nodemon → runs local or temporary

// npm run → uses local automatically
