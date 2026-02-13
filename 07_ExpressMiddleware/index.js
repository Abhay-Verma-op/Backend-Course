// // import express from 'express'

// // const app=express();

// // // function checkroute(req,resp,next){
// // //     console.log(req.url)
// // //     next()
// // // }

// // // app.use(checkroute)

// // app.use((req,resp,next)=>{
// //     console.log("User is accessing " + req.url + " page")
// //     next()
// // })

// // app.get('/',(req,resp)=>{
// // resp.send("Home Page")
// // })

// // app.get('/users',(req,resp)=>{
// // resp.send("Users Page")
// // })

// // app.get('/product',(req,resp)=>{
// // resp.send("Product Page")
// // })

// // app.listen(3200)

// // // Middleware 

// // /*🧠 Simple Real-Life Example

// // Think of middleware like security at a mall:

// // You enter the mall (request)

// // Security checks your bag (middleware)

// // Then you go inside (route)

// // You buy something (respon) */

// // Middleware Example

// import express from 'express'

// const app=express()

// // function ageCheck(req,resp,next){
// // if(!req.query.age || req.query.age<18){
// //     resp.send("Alert ! You cannot access this page")
// // }

// // else{
//     //     next();
//     // }
//     // }
//     // app.use(ageCheck) 
    

// Ip Address Check


//     function ipCheck(req,resp,next){
//         const ip=req.socket.remoteAddress
//         console.log(ip)
//         if(ip.includes('192.168.1.7')){
//             resp.send("Alert ! You cannot access this page")
//         }
//         else{
//             next()
//         }

// }
// app.use(ipCheck)

// app.get('/',(req,resp)=>{
//     resp.send("<h1>Home Page</h1>")
// })

// app.get('/login',(req,resp)=>{
//     resp.send("<h1>Login Page</h1>")
// })

// app.get('/admin',(req,resp)=>{
//     resp.send("<h1>Admin Page</h1>")
// })

// app.listen(3200)