
let btnSignUpForm = document.getElementById("SignUp");
btnSignUpForm.addEventListener('click',() => {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register").style.display = "block";
});
let btnSignInForm = document.getElementById("SignIn");
btnSignInForm.addEventListener('click',() => {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register").style.display = "none";
});

const login  = document.getElementById("login");
const username = document.getElementById("username");
const pass = document.getElementById("pass");
const rmCheck = document.getElementById("rememberMe");


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
                break;
            case 'HRKho':
                location.replace("HRKho.html");
                break;
        }
    }
    
});

//Xét giá trị cho checkbox của Remember
if(localStorage.checkbox && localStorage.checkbox !== ''){
    rmCheck.setAttribute("checked","checked");
    username.value = localStorage.username;
    pass.value = localStorage.pass;
}
else{
    rmCheck.removeAttribute("checked");
    username.value = "";
    pass.value = "";
}

login.addEventListener('click',() => {
    if(rmCheck.checked && username.value !== "" && pass.value !== ""){
        localStorage.username = username.value;
        localStorage.pass = pass.value;
        localStorage.checkbox = rmCheck.value;
    }
    else{
        localStorage.username = "";
        localStorage.pass = "";
        localStorage.checkbox = "";
    }
});
