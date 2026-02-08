const http=require('http');

const userData=[
    {
        name:"Abhay",
        age:22,
        email:"abhay@test.com",
    },
    {
        name:"sam",
        age:230,
        email:"sam@test.com",
    },
    {
        name:"Peter",
        age:25,
        email:"peter@test.com",
    },
]
http.createServer((req,resp)=>{
resp.setHeader("Content-Type",'application/json')
resp.write(JSON.stringify(userData))
resp.end()    
}).listen(6100)