const http = require("http")



const server = http.createServer((req, res)=>{

    // (/) is home page
    if (req.url === "/"){
        res.end("welcom to my home page")
    }
    else if (req.url === "/about"){
        res.end("welcom to my about page")
    } else{
    // this is of the page does not exist 
    res.end('<h1>oops </h1> <p>this page does not exist</p> <a href="/">go to home page</a>')
    }
})

server.listen(5000)

