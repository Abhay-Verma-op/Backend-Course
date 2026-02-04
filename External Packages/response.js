const age=22;
const http=require('http')
const server=http.createServer((req,resp)=>{
    resp.setHeader("Content-Type","text/html")
    resp.write(`
        
        <html>
        <head>
        <title>Node Course</title> 
        </head>
        <body>
        <h1>Hello Abhay Bhai hai</h1>
        <h2>`+age+`</h2>
        </body>
        </html>
        `)
        resp.end()
        // process.exit()
})

server.listen(4800)