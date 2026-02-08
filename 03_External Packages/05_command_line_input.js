const http=require('http')
const arg=process.argv;
const port=arg[2]
http.createServer((req,resp)=>{
resp.write("Get Input From Cmd")
resp.end()
}).listen(port)




