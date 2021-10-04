// let a=20
// var b=40
// console.log(a,b)  // 20 40
// a=10
// b=20
// console.log(a,b)  //10,20


// let vs var-let has block scope but var has global scope

// if(true){
//     var Name='Ferrari'
//     console.log(Name)    //Ferrari
// }

// console.log(Name)       //Ferrari

// if(true){
//     let Name='Ferrari'
//     console.log(Name)    //Ferrari
// }

// console.log(Name)       //error


// for(var i=0;i<10;i++){
//     console.log('loop ran')
// }
// console.log(i)   //10

// for(let i=0;i<10;i++){
//     console.log('loop ran')
// }
// console.log(i)   //error


// if (true){
//     var Name="Ferrari"
//     if (true){
//         console.log(Name)   //Ferrari

//     }  
// }

// if (true){
//     console.log(Name)   //Ferrari
  
//     if (true){
//         var Name="Ferrari" 
        
//     }  
// }



// const print=()=>{
//     var Name='Aalok'
//     if(true){
//         console.log(Name)
//     }
//     return print
// }



// console.log(this)   //window object
// console.log(this.alert('hi'))


// let car={}
// console.log(car)  //{}
// console.log(typeof car)  //object



// let car={
//     name:"C Class",
//     manufacturer:"Mercedes",
//     print:function(){
//         console.log(name +'by'+this.manufacturer)
//     }
// }

// car.print()    //FerraribyMercedes
// console.log(car.name)  //C Class
// console.log(car.manufacturer)   //Mercedes

//A function inside a object is a method

// let car={
//     name:"C Class",
//     manufacturer:"Mercedes",
//     print:function(a){
//         console.log(a)
//     }
// }

// car.print('Ferrari')   //Ferrari


// let car={
//     name:"C Class",
//     manufacturer:"Mercedes",
//     print:function(){
//       console.log(this)
//     }
// }

// car.print()

// let manufacturer="ferrari"
// let car={
//     name:"C Class",
//     manufacturer:"Mercedes",
//     print:function(){
//       console.log(manufacturer)
//     }
// }
// car.print()  //ferrari


// let car={
//     name:"C Class",
//     manufacturer:"Mercedes",
//     print:function(){
//       console.log(car.manufacturer,car.name)
//     }
// }

// car.print()    //Mercedes C Class


// let car = {
//     name: "C Class",
//     manufacturer: "Mercedes",
//     print: function () {
//         console.log(`${this.name} was created by ${this.manufacturer}`)
//     }
// }

// car.print()    //C Class was created by Mercedes



// let car = {
//     name: "C Class",
//     manufacturer: "Mercedes",
//     print:()=> {
//         console.log(this)
//         console.log(`${this.name} was created by ${this.manufacturer}`)
//     }
// }

// car.print()  //Ferrari was created by undefined





let car = {
    name: "C Class",
    manufacturer: "Mercedes",
    print:()=> {
        console.log(this)
        console.log(`${this.name} was created by ${this.manufacturer}`)
    }
}
//console.log(Object)   // Object() { [native code] }
//console.log(car.hasOwnProperty('name'))   //true
//console.log(car)   //{name: 'C Class', manufacturer: 'Mercedes', print: ƒ}
// console.log(Object.keys(car))     //(3) ['name', 'manufacturer', 'print']
// console.log(Object.values(car))  //(3) ['C Class', 'Mercedes', ƒ]






















   
























