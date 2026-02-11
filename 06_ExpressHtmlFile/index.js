import express from 'express'
import path from 'path'
const app=express();
const absPath=path.resolve('view')

const publicPath=path.resolve('public')
app.use(express.static(publicPath))
// console.log(publicPath)

app.get("/",(req,resp)=>{
    // const absPath=path.resolve('view/home.html') // Make Only One same path for everyone
    // console.log(absPath) // Get Path From File
    resp.sendFile(absPath +"/home.html")
})

app.get("/login",(req,resp)=>{
    // const absPath=path.resolve('view/login.html')
    // console.log(absPath)
    resp.sendFile(absPath +"/login.html")
})

app.get("/about",(req,resp)=>{
    // const absPath=path.resolve('view/about.html')
    // console.log(absPath)
    resp.sendFile(absPath +"/about.html")
})

app.use((req,resp)=>{
    // const absPath=path.resolve('view/404_error.html')

    resp.status(404).sendFile(absPath +"/404_error.html")
})

app.listen(3200)