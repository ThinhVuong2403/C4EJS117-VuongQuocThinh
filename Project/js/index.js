
let btnSignUpForm = document.getElementById("SignUp");
btnSignUpForm.addEventListener('click',() => {
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "block";
});
let btnSignInForm = document.getElementById("SignIn");
btnSignInForm.addEventListener('click',() => {
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
});

const login  = document.getElementById("login");
const username = document.getElementById("username");
const pass = document.getElementById("pass");

login.addEventListener('click', (e) => {
    e.preventDefault();
    const loginInfor = {
        username: username.value,
        password: pass.value,
    }
    if(!loginInfor.username){
        alert("Nhập usernam");
    }
    else if(!loginInfor.password){
        alert("Nhập password");
    }
    else{
        localStorage.setItem("checkLogin", 'false');
        for(let user of users){
            if(loginInfor.username == user.username && loginInfor.password == user.password){
                localStorage.setItem("checkLogin", 'true');
                localStorage.setItem("position", user.position);
                break;
            }
        }
    }

    if(localStorage.getItem('checkLogin') == 'true'){
        switch(localStorage.getItem('position')){
            case 'HRNhanvien':
                location.replace("HRNhanvien.html");
                console.log(position);
            case 'HRKho':
                location.replace("HRKho.html");
                console.log(position);
            }
    }
    
});

