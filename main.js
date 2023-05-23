function sumArray (arr) {
    let sum = 0;
    
    arr.forEach((element)=> {
    console.log(element); 
    sum = element+sum;
});
return sum;
}

const arr = [ 1, 20, 3];
const result = sumArray(arr);
console.log(result);