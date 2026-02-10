const http=require('http')
http.createServer((req,resp)=>{
    resp.write("Page Check")
    resp.end()
}).listen(3300)