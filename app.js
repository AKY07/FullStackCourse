const fs = require('fs')
// console.log(fs)
// fs.readFile('./text.txt','utf8',(error,data)=>{
//     if (error) console.log(error)
//     else console.log(data)
// })

// console.log(fs.readFileSync('./text.txt','utf8'))


// console.log('i m random log')

fs.writeFile('./text.txt','new stuff inside the file',(error)=>{
    if (error) console.log(error)
    
})  //change content of text.txt
