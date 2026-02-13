// import express from 'express'
// const app=express()

//  /*In Express.js:
// Route middleware is a middleware function that runs only for a specific route.
// It does NOT run for all routes*/

// function checkAgeRouteMiddleware(req,resp,next){
//     console.log(req.query.age);

//     if(!req.query.age || req.query.age<18){
//         resp.send("You are not allowed to visit this website")
//     }
//     else{
//         next();
//     }
// }

// function checkURLRouteMiddleware(req,resp,next){
//     console.log("this requested url is " , req.url);
//     next()
// }
// app.get('',(req,resp)=>{
//     resp.send("<h1>Home Pages</h1>")
// })
// app.get('/login', checkAgeRouteMiddleware ,(req,resp)=>{
//     resp.send("<h1>Login Pages</h1>")
// })

// app.get('/users',checkURLRouteMiddleware,(req,resp)=>{
//     resp.send("<h1>Users Pages</h1>")
// })

// app.get('/products' , checkAgeRouteMiddleware , checkURLRouteMiddleware,(req,resp)=>{
//     resp.send("<h1>Products Pages</h1>")
// })

// app.listen(3200)

// Built-In Middleware

import express from "express";
import path from "path";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.get("/", (req, resp) => {
  const filePath = path.resolve("view/home.html");
  resp.sendFile(filePath);
});

app.get("/login", (req, resp) => {
  resp.send(`
        <form action="/submit" method="post">
        <input type="text" placeholder="enter name"  name="name"/>
        <input type="text" placeholder="enter password" name="password" />
        <button>Login</button>
        </form>
        `);
});

app.post("/submit", (req, resp) => {
  console.log(" User Login Details Are :", req.body);
  resp.send("<h1>Submit Page</h1>");
});

app.get("/users", (req, resp) => {
  resp.send("<h1>Users Page</h1>");
});

app.listen(3200);
