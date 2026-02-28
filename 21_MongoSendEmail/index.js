import express, { urlencoded } from 'express'

const app=express()

app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.get('/mail',(req,resp)=>{
    resp.render("mail")
})
app.post('/submit-email',(req,resp)=>{
    console.log(req.body);
    
    resp.send("email send" )
})

app.listen(3200)