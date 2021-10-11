
const button=document.querySelector('button')
const input=document.querySelector('input')
const div=document.querySelector('div')

// div.innerHTML=localStorage.getItem('InputValue')

// button.addEventListener('click',(req,res)=>{
//     // localStorage.setItem('InputValue',input.value)
//     localStorage.setItem('InputValue',[1,2,3,4,5])
//     div.innerHTML=input.value
// })

const arr=[1,2,3,4,5]
const val=JSON.stringify(arr)

console.log(val)

localStorage.setItem('val',JSON.stringify(arr))
console.log(JSON.parse(localStorage.getItem('val')))


//''
// to access local storage 
// localStorage.setItem('InputValue',"Something")
// console.log(localStorage.getItem("InputValue"))
//''





