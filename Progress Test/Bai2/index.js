let str = "This is my name"
let array_str = str.split(" ");
let str_output = '';
for(let i of array_str){
    str_output += i[0].toUpperCase() + i.slice(1) + " ";
}
console.log(str_output);