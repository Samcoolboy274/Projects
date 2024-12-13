function reverseArray(arr){

    let emptyArray=[]

    for(let i = arr.length - 1; i >=0 ; i--){

        emptyArray.push(arr[i]);

    }
    return emptyArray
 
}

const myArray = [1,2,3,4,5];
const reversableArray = reverseArray(myArray);
console.log("Old array", myArray)
console.log(" New array",reversableArray)