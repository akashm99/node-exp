// const http = require('http')

// const server = http.createServer( (req, res) => {
//     if(res.url === '/') {
//         res.end('Welcome to our home Page')
//     }
//     if(res.url === '/about') {
//         res.end('Here is our short history')
//     }
//     // res.end
// })

// server.listen(3000)

const http = require('http')

const requestListener = function (req, res) {
    console.log(res)
    if(req.url === '/') {
        console.log("Inside /")
        res.end('Welcome to our home Page')
    }
    if(req.url === '/about') {
        console.log("Inside /about")
        res.end('Here is our short history')
    }
    // res.end("<h1>404</h1> <p>Page not found</p> <a href='/'>Back to home</a>")
}

const server = http.createServer(requestListener)
server.listen(8080)