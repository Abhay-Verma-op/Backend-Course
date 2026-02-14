// import express from 'express'
// import morgan from 'morgan'
// const app=express()
// app.use(morgan('dev'))

// app.get("/",(req,resp)=>{
//     resp.send("Home Page")
// })


// app.get("/users",(req,resp)=>{
//     resp.send("Users Page")
// })

// app.get('/wait',(req,resp)=>{
//     setTimeout(()=>{
//         resp.send("Result after 1 second")
//     },1000)
// })

// app.listen(3200)


// ERROR HANDLING MIDDLEWARE  👇

import express from 'express'
const app=express()

app.get("/",(req,resp)=>{
    resp.send("Home Page")
})


// app.get("/users",(req,resp)=>{
//     resp.send1("Users Page")
// })

app.get("/users",(req,resp)=>{
    resp.send("Users Page")
})

// app.get("/error",(req,resp)=>{
//     resp.send("Error Page")
// })


app.get("/error",(req,resp,next)=>{
    const error=new Error('')
    error.status=404
    next(error)
})

// function errorHandling(error,req,resp,next){
//     resp.status(error.status || 500).send("Try after some time")
// }

// app.use(errorHandling)

app.use((error,req,resp,next)=>{
     resp.status(error.status || 500).send("Try after some time")
})

app.listen(3200)