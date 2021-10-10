// console.log('Something')

// for(var i=0;i<10;i++){
//     console.log('iteration',i+1)
// }




// console.log(document)  //error
// console.log(window) //error



// setTimeout(()=>{
//     console.log('hi')
// },5000)                 //hi


//Module is just file which contain codes.
// console.log(module)
// console.log(module.exports)


const greet=()=>'hi'
// module.exports.something='hi'
module.exports.greet=greet
console.log(module.exports)        //{ something: 'hi' }    and { greet: [Function: greet] }
console.log('i m index.js')
