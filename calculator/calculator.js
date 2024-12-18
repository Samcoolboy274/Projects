const buttonPlus = document.getElementById('Plus')
const buttonMinus = document.getElementById('Minus')
const buttonMultiply= document.getElementById('Multiply')
const buttonDivide = document.getElementById('Divide')
const user1 = document.getElementById('user1')
const user2 = document.getElementById('user2')
const total = document.getElementById('total')



buttonPlus.addEventListener('click' , function(){
    
 const num1 = user1.value
 const num2 = user2.value
 const sum = parseInt(num1) + parseInt(num2) 
 total.innerHTML = sum
 console.log(sum)
     
    
})

buttonMinus.addEventListener('click' , function(){
    
 const num1 = user1.value
 const num2 = user2.value
 const sum = parseFloat(num1) - parseFloat(num2) 
 console.log(sum)
     
    
})

buttonMinus.addEventListener('click' , function(){
    
 const num1 = user1.value
 const num2 = user2.value
 const sum = parseFloat(num1) - parseFloat(num2) 
 total.innerHTML = sum
    
})
buttonMultiply.addEventListener('click' , function(){
    
 const num1 = user1.value
 const num2 = user2.value
 const sum = parseFloat(num1) *parseFloat(num2) 

    
})
buttonDivide.addEventListener('click' , function(){
    
 const num1 = user1.value
 const num2 = user2.value
 const sum = parseFloat(num1) / parseFloat(num2) 
 total.innerHTML = sum
    
})




 



