const http = require('http');
const fs = require('fs');

//create server takes a callback func which takes 2 args request obj and response Obj
const server = http.createServer((req, res)=>{
    // console.log('request made')
    // console.log(req) //...a big Request obj
    console.log(req.url, req.method)

    // set Header content-type
    // res.setHeader('Content-type', 'text/plain');
    // res.write('find the white rabbit...');
    // res.end();

    // content-Type html
    res.setHeader('Content-type', 'text/html');
    //replacing default head in browser...just an example 
    // res.write('<head><link rel="stylesheet" href="#"></head>');
    // res.write('<p>find the white rabbit...</p>');
    // res.write(`<p>and you'll sink deep into the rabbit hole...</p>`);
    // res.end();

    //Basic routing
    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html'
            break;
        case '/about':
            path += 'about.html'
            break;
        default:
            path += '404.html'
            break;
    }

    //reading outside html file from dir
    // fs.readFile('./views/index.html', (err, data) => {
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);
            //can pass data as arg in end()..if write() is used only once
            res.end(data);
        }
    })
});

//to listen for requests
server.listen(3000, 'localhost', ()=>{
    console.log('listening on port 3000')
})