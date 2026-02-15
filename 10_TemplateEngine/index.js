// import express from 'express'
// const app=express()

// app.set('view engine','ejs')
// app.get('/',(req,resp)=>{
//     // resp.send("Home Pages")
//     // resp.render('home')
//     resp.render('home',{name:'Abhay Verma',age:'22'})

// })

// app.listen(3200)


import express from 'express'

const app=express()
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.get('/add-user',(req,resp)=>{
    resp.render('addUser')
})

app.post('/submit-user',(req,resp)=>{
    console.log(req.body);
    
resp.render('SubmitUser',req.body)
})

app.get('/users',(req,resp)=>{
    const users=['abhay','akshay','ajay','mayank']
    const isLogin =true
    resp.render("users" ,{users:users,isLogin:isLogin})
})

app.listen(3200)