let a,b;
function init(){
    alert("Enter a number again");
    b = prompt("Enter a number");
}

function add(callback){
    a = prompt("Enter a number");
    b = prompt("Enter a number");
    if(!Number(a)) return undefined;
    else{
        if(b == ""){
            callback();
        }
        return Number(a) + Number(b);
    }
}

console.log(add(init));