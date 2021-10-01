const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
// const a = document.getElementsByTagName('input')[0]
// const b = document.getElementsByTagName('input')[1]
const add = document.querySelector('#add')
const multiply = document.querySelector('#multiply')
const resultBox = document.querySelector('.result')

// console.log(a,b)
// console.log(add,multiply)
// console.log(result)

const sum=()=>{
   // const result = a.value+b.value
   const result = parseInt(a.value)+parseInt(b.value)
   console.log(result)
   resultBox.innerHTML=result
   // resultBox.textContent=result 
}
add.addEventListener('click',sum)

const product=()=>{
   const result = parseInt(a.value)*parseInt(b.value)
   console.log(result)
   resultBox.innerHTML=result
}
multiply.addEventListener('click',product)



   
























