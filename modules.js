// const xyz = require('./test');

//console.log(xyz);//empty array if nothing is exported 
//console.log(module)//to see whole module obj
// console.log(xyz.name, xyz.ages)

//destructuring toget what we need
const {names , ages} = require('./test')//names logged out as test.js is ran automatically

console.log(ages)

//os module
const os = require('os')
console.log(os, os.platform(), os.homedir())

