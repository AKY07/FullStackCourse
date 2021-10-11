const path = require('path')
// console.log(path.resolve('./utils.js'))  //give absolute path of the file
// // console.log(path)


// console.log(path.relative('/',"./utils.js")) //give relative path, relative to whatever path we specify

// console.log(path.extname('./app.js'))
// console.log(path.dirname('./app.js'))   //dirname means directory name

// console.log(__dirname)    //give path of current directory

console.log(path.join(__dirname,'app.js'))   //similer to path.resolve