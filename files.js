const fs = require('fs');

//reading files
//async files hence callback func with err,data
fs.readFile('./docs/blogs.txt', (err, data)=>{
    if(err){
        console.log(err);
    }console.log(data);//returns a Buffer
    console.log(data.toString());
})
//writing files
// fs.writeFile('./docs/blogs.txt','the microwave of evil',()=>{
//     console.log('file was written');
// })
//it creates a file and writes in it if file nonexistent
fs.writeFile('./docs/blogsTwo.txt','the microwave of evil',()=>{
    console.log('file was written');
})

//creating folders
// fs.mkdir('./assets', (err, data)=>{
//     if(err){
//         console.log(err);
//     }console.log('folder was created');
// })
//if folder exists returns error so(synchronous code to block & check 1st)
if(!fs.existsSync('./assets')){  
    //existsSync() returns boolean...! negate
    fs.mkdir('./assets', (err, data)=>{
        if(err){
            console.log(err);
        }console.log('folder was created');
    })
}else{
    // console.log('folder already exists')
    //rmdir() is asunc so takes a callback func
    fs.rmdir('./assets', (err)=>{
        if(err){
            console.log(err)
        }console.log('file was deleted')
    })
}

//deleting files
if(!fs.existsSync('./docs/delete.txt')){  
    fs.unlink('./docs/delete.txt', err => {
        if(err){
            console.log(err);
        }console.log('folder was deleted');
    })
}
