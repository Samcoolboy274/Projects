const holder = document.getElementById('holder')
const btns = document.getElementById('btns')
let myObj = {
product: "icecream",
price: "50",
category: "ice",
taste: "good"

}

function showObj (){

 const h1 = document.createElement("h1")
 h1.innerHTML = myObj.product
 document.body.appendChild(h1)

}

showObj()

btns.addEventListener('click' , function(){

const h2 = document.createElement("h2")
h2.innerHTML = holder.value
document.body.appendChild(h2)


})