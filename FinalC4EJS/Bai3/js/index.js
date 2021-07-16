let number = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

function random(arr){
    return Math.floor(Math.random() * (arr - 0));
}

function getMa(){
    let maHex = "#";
    for(let i = 0; i < 6; i++){
        maHex += number[random(number.length)];
    }
    return maHex;
}


let btnPickColor = document.getElementById("pickColor");
let btnCopyColor = document.getElementById("copyColor");
let wrapper = document.getElementById("wrapper");
let gradient = document.getElementById("gradient");
let ma;

btnPickColor.addEventListener('click', () =>{
    ma = getMa();
    wrapper.style.backgroundColor = ma;
    document.getElementById("color").innerHTML = ma;
});

btnCopyColor.addEventListener('click', () => {
    console.log(ma);
});

gradient.addEventListener('click', () => {
    wrapper.style.backgroundColor = "gradient";
});
