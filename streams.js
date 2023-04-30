//Sreams used to read/Write large file sequentially 
//not feasible with fs.readFile/writeFile() (can take very long)
const fs = require('fs')

//to read a file
//passed in a 2nd arg no need of .toString() --chunks encoded to readable format utf8
const readStream = fs.createReadStream('./docs/blogsThree.txt',{encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blogsFour.txt');
//.on() an event Listener every time a chunk is received callback is fired 
// readStream.on('data', (chunk) => {
//     console.log('------ NEW CHUNK ------'); //for readability to see the chunks
//     console.log(chunk);//The Buffer 
//     // console.log(chunk.toString());
//     writeStream.write('\n NEW CHUNK \n');
//     writeStream.write(chunk);
// })

//*************PIPING *********/
//replaces the above listener readStream.on(){...}... sompler way to write data to blogFour
//NB: data must be from a readable Stream to a writable one.
readStream.pipe(writeStream);

//duplex streams????