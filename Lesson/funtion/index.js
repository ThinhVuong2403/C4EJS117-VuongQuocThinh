let myNumber = [];
function checkNumber(n){
    if(n % 2 == 0) alert('Number is even');
    else alert('Number is odd');
}

let init, i =1;
while(i <= 3){
    init = Number(prompt('Enter a number'));
    checkNumber(init);
    myNumber.push(init);
    console.log(myNumber);
    i++;
}
