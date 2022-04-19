// panggil module http
const http = require('http');
// panggil module file system
const fs = require('fs');

function onRequest(request, response){
    response.writeHead(200, {"Content-Type": "application/json"})
    const data = {
        name: "Arya Dharma Pamungkas",
        age: 29
    }
    response.write(JSON.stringify(data))
    response.end()
}

http.createServer(onRequest).listen(3000)