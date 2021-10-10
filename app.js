// console.log(module)


// console.log(require('./index'))   // { greet: [Function: greet] }


// const stuff=require('./index')
// console.log(stuff)    
//o/p
// { greet: [Function: greet] }
//i m index.js

// const stuff=require('./utils')
// console.log(stuff)
//o/p
// {
//     add: [Function: add],
//     substract: [Function: substract],
//     multiply: [Function: multiply],
//     divide: [Function: divide]
//   } 


const {add,substract,multiply,divide,message}=require('./utils')
require('./utils')
add()
substract()
multiply()
divide()
console.log(message)
//o/p
// I Add stuff
// I sub stuff
// I multiply stuff
// I divide stuff
//Message





