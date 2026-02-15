import express from 'express'
import { handleUsers } from './controller/userController.js';

const app=express();

app.set('view engine','ejs')
// app.get('/users',(req,resp)=>{
//     resp.render('user')
// })
app.get('/users',handleUsers)
app.listen(3200)