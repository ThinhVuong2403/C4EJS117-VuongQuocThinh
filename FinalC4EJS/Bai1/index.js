let input = ['BINH', 'HUNG', 'PHUOC', 'CAO', 'KHANH'];

let output = [];

function allLongestStrings(array){
    let maxLengArray = 0;
    for(let i of array){
        if(i.length > maxLengArray) maxLengArray = i.length;
    }
    for(let i of array) if(i.length == maxLengArray) output.push(i);

    return output;
}

console.log(allLongestStrings(input));