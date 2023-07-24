// Global Object

// console.log(global);

// global.setTimeout(()=>{
//     console.log('in a few')
// }, 3000)

setTimeout(()=>{
    console.log('in a few')
    clearInterval(int)
}, 3000)

const int = setInterval(()=>{
    console.log('loopty loops')
}, 1000)

console.log(__dirname);//without file
console.log(__filename);//with filename in path