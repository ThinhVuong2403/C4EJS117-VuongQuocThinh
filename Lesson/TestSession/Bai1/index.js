let number = [16,32,72,96];

let result = [];

function check(n){
    for(let i = 2; i < Math.sqrt(n); i++){
        while(n > 1){
            if(n % i == 0){
                n = n/i;
            }
            else break;
        }

        if(n == 1) return true;
        else return false;
    }
}

for(let i of number){
    if(check(i)) result.push(i);
}

console.log(result);