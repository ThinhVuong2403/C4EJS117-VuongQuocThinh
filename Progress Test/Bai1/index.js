let str_input = 'Hello';
let n = str_input.length - 1;
let str_output = '';
while(n > -1){
    str_output +=str_input[n];
    n--;
}
console.log(str_output);