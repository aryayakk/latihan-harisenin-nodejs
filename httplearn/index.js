// panggil module http
const http = require('http');
// panggil module file system
const fs = require('fs');

function onRequest(request, response){
    response.writeHead(200, {"Content-Type": "text/html"})
    fs.readFile("./index.html", (error, data) => {
        if(error){
            response.writeHead(404)
            response.write("Not Found")
        } else {
            response.write(data)
        }
        response.end()
    })
}

http.createServer(onRequest).listen(3000);