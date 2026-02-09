const http=require('http')
const userForm=require('./09_userForm_02')
const userDataSubmit=require('./09_userDataSubmit_03')
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type':'text/html'})
if(req.url=='/'){

    userForm(req,resp)
}
else if(req.url=='/submit'){
    userDataSubmit(req,resp)
}

    resp.end()
}).listen(3400)