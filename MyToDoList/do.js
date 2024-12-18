const Placer = document.getElementById('Placer')
const btns = document.getElementById('btns')
let Objects = {
    productName: "chips" ,
    description: "yum" ,
    price: "2" ,
    category: "food"
    
    }
    
    function showObjectData1 (){
    
        const h2 = document.createElement('h2')
            h2.innerHTML = Objects.productName 
            document.body.appendChild(h2)
        
    }

    showObjectData1()

    function showObjectData2 (){
    
        const h3 = document.createElement('h3')
            h3.innerHTML = Objects.description 
            document.body.appendChild(h3)
        
    }

    showObjectData2()

    function showObjectData3 (){
    
        const h2 = document.createElement('h2')
            h2.innerHTML = Objects.price
            document.body.appendChild(h2)
        
    }

    showObjectData3()

    function showObjectData4 (){
    
        const h2 = document.createElement('h2')
            h2.innerHTML = Objects.category 
            document.body.appendChild(h2)
        
    }

    showObjectData4()

btns.addEventListener('click' , function(){

const h1 = document.createElement('h1')
h1.innerHTML = Placer.value
document.body.appendChild(h1)

})

