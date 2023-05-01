const http = require('http');
const fs = require('fs');
//_commonly used in lodash(not necessary)
const _ = require('lodash');

//create server takes a callback func which takes 2 args request obj and response Obj
const server = http.createServer((req, res)=>{
    // console.log('request made')
    // console.log(req) //...a big Request obj
    console.log(req.url, req.method)

    //lodash usage
    //a utility pkg with diff methods eg random no's b2n 0 & 20
    const num = _.random(0,20);
    //running a func once
    const greet = _.once(()=> console.log('hello'));
    greet();
    greet();
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

    //Basic routing...to see diff html pages
    //status codes added to show the type of response sent
    let path = './views/';

    switch(req.url) {
        case '/':
            path += 'index.html'
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        //redirect
        case '/about-me':
            //301 for resource moved
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end()
            break;

        default:
            path += '404.html'
            res.statusCode = 404;
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