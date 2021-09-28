//Operators

//Arithmetic Operators
a=10
b=5
console.log('a+b=',a+b)
console.log('b-a=',b-a)
console.log('b/a=',b/a)
console.log('b*a=',b*a)
console.log('b**a=',b**a)
console.log('b%a=',b%a)

//Assignment Operators
console.log('b ',b) //b 5
b += 10
console.log('b+=10',b) // b+=10 15
b++
console.log('b++',b) // b++ 16
b-=10
console.log('b-=10',b) //b-=10 6
b--
console.log('b--',b) // b-- 5

//Comparison operators

var d =10
var e =2
var f="10"
console.log(d>e)
console.log(d<e)
console.log(d>=e)
console.log(d<=e)
console.log(d==e)
console.warn(d==f)  //true  - double equal to is lose check, it does'nt check types
console.warn(d===f) //false - triple equal also check for type

console.warn(d+f)  //1010

//Logical Operators

//AND-&&
console.log(true&&true)  //true
console.log(true&&false)  //false
console.log(false&&true)  //false
console.log(false&&false)  //false

//OR-||
console.log(true||true)  //true
console.log(true||false)  //true
console.log(false||true)  //true
console.log(false||false)  //false











