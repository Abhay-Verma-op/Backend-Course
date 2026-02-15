import express from 'express'

const app=express();

app.get('/',(req,resp)=>{
    const users=['abhay','sam','peter','mark']
    let data=`<ul>`
    for(let i=0;i<users.length;i++){
        data+=`<li><a href="user/${users[i]}">${users[i]}</a></li>`
    // resp.send("This is home page")
    // console.log(users[i])
}
data+='</ul>'
resp.send(data)
})

app.get('/user/:name',(req,resp)=>{
    // console.log(req.params.name);
    const username=req.params.name
    
    resp.send(`This is ${username}'s a user Profile`)
})

app.listen(3200)
