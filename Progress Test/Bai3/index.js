let arr = [1,2,3,3,4,5,4,4,4,5,5];
let arr_output = [];
for(let i = 0; i < arr.length; i++){
    if(arr_output.indexOf(arr[i]) === -1) arr_output.push(arr[i]);
}
console.log(arr_output);