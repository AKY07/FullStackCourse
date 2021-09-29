var list=document.querySelector('ul')
console.log(list)

var arr=['Go the GYM','cook oamteal','Eat']
arr.push('complete the assignment')

for(var i=0;i<arr.length;i++){
    var element=document.createElement('li')
    var textNode=document.createTextNode(arr[i])
    // console.log(textNode)
    // console.log(arr[i])
    // console.log(element)
    element.appendChild(textNode)
    list.appendChild(element)
    // console.log(element)
}



















