// import { name } from "ejs";
import express from "express";
import session from "express-session";
const app=express()
app.set('view engine','ejs')

app.use(session({
secret:"apple",
}))

app.use(express.urlencoded({extended:true}))
app.get("/login" ,(req,resp)=>{
    // resp.send("Login form")
    resp.render('login')
})
// app.post("/profile" ,(req,resp)=>{
//     resp.setHeader('Set-Cookie','login=true')
//     resp.setHeader('Set-Cookie','name='+req.body.name)
//     // resp.send("Login form")
//     resp.render('profile')
// })
// app.get("/" ,(req,resp)=>{
//     // resp.send("Login form")
//     let cookieData=req.get('cookie')
//     cookieData=cookieData.split(';')
//     cookieData=cookieData[1].split("=")

//     console.log(cookieData[1]);
    
//     resp.render('home',{name:cookieData[1]})
// })


app.post("/profile",(req,resp)=>{
    req.session.data=req.body;
    console.log(req.session.data);
    
    resp.render("profile")
})
app.get('/',(req,resp)=>{
    const data=req.session.data
    console.log("data",data);
    
    resp.render('home',{data})
})

app.listen(3200)


