console.log('====================================')
console.log(document)
console.log('====================================')

let headingElement=document.getElementById('heading1')
console.log(headingElement)
console.log(headingElement.innerHTML);
//Welcome <u> to </u>WS
console.log(headingElement.innerText);
//Welcome  to WS

let contentElement=document.getElementById("content")

console.log(contentElement)

// <h1 id="heading">Welcome to WS</h1>


let resDivElement=document.getElementById("resDiv")

resDivElement.innerHTML=headingElement.innerHTML