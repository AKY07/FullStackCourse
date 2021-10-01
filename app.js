const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
// const a = document.getElementsByTagName('input')[0]
// const b = document.getElementsByTagName('input')[1]
const add = document.querySelector('#add')
const multiply = document.querySelector('#multiply')
const substract = document.querySelector('#substarct')
const resultBox = document.querySelector('.result')

// console.log(a,b)
// console.log(add,multiply)
// console.log(result)

// const sum=()=>{
//    // const result = a.value+b.value
//    const result = parseInt(a.value)+parseInt(b.value)
//    console.log(result)
//    resultBox.innerHTML=result
//    // resultBox.textContent=result 
// }
// add.addEventListener('click',sum)

// const product=()=>{
//    const result = parseInt(a.value)*parseInt(b.value)
//    console.log(result)
//    resultBox.innerHTML=result
// }
// multiply.addEventListener('click',product)




const calculate=(event,operation)=>{
   // console.log(event.target)
   // if(operation=='add'){
   //    console.log('adding')
   // }
   // else if(operation=='multiply'){
   //    console.log('multiply')
   // }
   switch(operation){
      case "add":
         resultBox.innerHTML=parseInt(a.value)+parseInt(b.value)
         break
      case "multiply":
         resultBox.innerHTML=parseInt(a.value)*parseInt(b.value)
         break
      case "substract":
         resultBox.innerHTML=parseInt(a.value)-parseInt(b.value)
         break
      default:
         resultBox.innerHTML="Not a valid operation"   
         
   }
 
 }

add.addEventListener('click',(event) =>{ 
   return calculate(event,'add')
})

// add.addEventListener('click',() =>  calculate('add'))

multiply.addEventListener('click',(event) =>{
   return calculate(event,'multiply')
   
})

substract.addEventListener('click',(event) =>{
   return calculate(event,'substract')
   
})



   
























