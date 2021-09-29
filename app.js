var heading=document.getElementById('heading')
heading.innerHTML="Hi from JS"
var para=document.getElementsByClassName('para')
console.log(heading)
console.log(typeof heading)  //object
console.log(para)
console.log(para.length) //2
console.log(para[0])
console.log(para[1])

// para.push('aalok')

var tags=document.getElementsByTagName('a')
console.log(tags) //htmlcollection

var query=document.querySelector('#heading')
console.log(query)  //h2#heading
var query=document.querySelector('.para')
console.log(query)  //p.para

















