

const arr = [
    
{
name: "Mansab",
age: 21,
job: "Software Developer" 
}, 
{
    name: "Abdullah",
    age: 20,
    job: "Software Developer" 
    }, 
    {
        name: "Musa",
        age: 19,
        job: "Software Developer" 
        }, 


]

function createDivs(speakerName, speakerAge, speakerJob){

    const speaker = document.createElement("h1")
    const age = document.createElement("p")
    const job = document.createElement("p")
    const div = document.createElement("div")
    
    speaker.innerHTML = speakerName
    age.innerHTML = speakerAge
    
    job.innerHTML = speakerJob
    
    document.body.appendChild(div)
    div.appendChild(speaker)
    div.appendChild(age)
    div.appendChild(job)
}


for(let  i  = 0 ; i<arr.length; i++) {
    const elem  = arr[i]
    console.log(elem)

    createDivs(elem.name, elem.age, elem.job)

}

