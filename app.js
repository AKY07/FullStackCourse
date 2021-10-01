// var arr=[1,2,3,4,5,6,7,8]
//  arr.unshift(6) //push beginning of an array
//  arr.push(7)//push end of an array

// arr.shift() //remove first element of an array

// console.log(arr) 

// var new_arr=arr.slice(2,5)
// console.log(new_arr)  //(3) [3, 4, 5]



// var arr=[1,2,3,4,5,6,7,8]
// var new_arr=arr.filter((element,index)=>{
//    if(element%2===0) return true
// })
// console.log(new_arr)  //(4) [2, 4, 6, 8]




var new_arr=[]
var arr=[1,2,3,4,5,6,7,8]
for (var i=0;i<arr.length;i++){
   if(arr[i]%2===0) new_arr.push(arr[i])
}

console.log(new_arr)  //(4) [2, 4, 6, 8]







   
























