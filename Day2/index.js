// 1.

//     1.1. var và const đều là từ khóa để khai báo biến trong Javascript
//     1.2. Sự khác nhau giữa var và let:
//         - Phạm vi: var có phạm vi toàn cục hoặc phạm vi cục bộ/chức năng. Còn với let thì có phạm vi khối(phạm vi giới hạn bởi {})
//         - Khởi tạo biến: Khi khai báo var thì các biến và hàm phải chuyển lên đầu phạm vi của chúng trước khi thực thi mã nếu không sẽ báo lỗi biến undefine
//                          Khi khai báo let thì các biến và hàm phải chuyển lên đầu phạm vi của chúng trước khi thực thi mã nếu không sẽ báo lỗi Reference Error
//         - Khai báo lại và cập nhật: Khi khai báo với var thì cùng 1 biến trong cùng 1 phạm vi sẽ không bị báo lỗi tuy nhiên chúng ta lại không thể kiểm soát chính xác giá trị của biến
//                                     Khi khai báo với let thì cùng trong phạm vi không thể tồn tại cùng 1 biến
//     1.3. Sự khác nhau giữa let và const: Trong khi let có thể khai báo không khởi tạo giá trị thì const lại mặc định phải khởi tạo giá trị ban đầu và giá trị đó không thay đổi trong suốt quá trình đoạn mã thực thi
//     1.4. Các trường hợp sử dụng:
//         const là để khai báo 1 biến làm hằng suốt. VD: const pi = 3.14;
//         let là để khai báo 1 biến thông thường. VD: let number = 4;
//         var để khai báo biến toàn cục. VD: var number = 5;

// =====================================================================================================================================================================================================================================

//2. 
    // 2.1. Boolean là 1 kiểu giá trị trong Javascript
    // 2.2. Kết quả của boolean trả về là 2 giá trị: true hoặc là false
//=====================================================================================================================================

//3. 
    //a
    // for(let i = 0; i < 7; i++) console.log(i);
    // b
    // let number = prompt("Enter a number?");
    // for(let i = 0; i < number; i++) console.log(i);
    //c
    // let number = prompt("Enter n");
    // for(let i = 3; i < number; i++) console.log(i);
    //d
    // let numberEnd = prompt("Enter n");
    // let numberStart = prompt("Enter c");
    // for(let i = numberStart; i < numberEnd; i++) console.log(i);
    //e
    // let numberEnd = Number(prompt("Enter n"));
    // let numberStart = Number(prompt("Enter c"));
    // for(let i = numberStart; i < numberEnd;i += 3) console.log(i);
    //f
    // let numberEnd = Number(prompt("Enter n"));
    // let numberStart = Number(prompt("Enter c"));
    // let s = Number(prompt("Enter s"));
    // for(let i = numberStart; i < numberEnd;i += s) console.log(i);

//================================================================================================================

//4.
    // let n = Number(prompt("Enter a number"));
    // let fac = 1;
    // for(let i = n; i > 0; i--) fac*= i;
    // alert(`The factorial of ${n} is ${fac}`);

//======================================================================================================================

//5.
    // let old = Number(prompt("How old are you?"));
    // if(old < 14) alert("You are not old enough to view this content");
    // else alert("Enjoy!");

//======================================================================================================================

//6.
    // let number = Number(prompt("Enter a number"));
    // if(number <= (9/2)) alert("Lower half of 9");
    // else alert("Higher half of 9");
//==================================================================================================================

//7.
    // let n = Number(prompt("n ="));
    // let x = Number(prompt("x ="));
    // if(x < (n/2)) alert(`${x} is in lower half of ${n}`)
    // else alert(`${x} is in higher half of ${n}`)
//=============================================================================================================

//8. 
    // let n = Number(prompt("n ="));
    // if(n % 2 == 1) alert(`${n} is an odd number`);
    // else alert(`${n} is an even number`);
//=======================================================================================================

//9.
    //a
    // for(let i = 0; i < 3; i++){
    //     console.log("L");
    // }
    // for(let i = 0; i < 3; i++){
    //     console.log("H");
    // }
    //b
    // let n = Number(prompt("Enter the total number of L's anh H's"));
    // let n1 = Math.round(n/2);
    // for(let i = 0; i < n1; i++) console.log("L");
    // for(let i = 0; i < n-n1; i++) console.log("H");
    //c
    // for(let i = 0; i < 4; i++){
    //     console.log(0);
    //     console.log(1);
    // }
    // let n = Number(prompt("Enter the total number of 1's and 0's"));
    // if(n % 2 == 0){
    //     for(let i = 1; i < (n/2); i++){
    //         console.log(0);
    //         console.log(1);
    //     }
    // }
    // else{
    //     for(let i = 1; i < (n/2); i++){
    //         console.log(0);
    //         console.log(1);
    //     }
    //     console.log(0);
    // }
//========================================================================================================================
//10.
    let can = Number(prompt("Your weight in kg?"));
    let cao = Number(prompt("Your height in cm?"));
    let bmi = Math.round((can/(cao/100 * cao/100))*10 )/10;
    alert(`Your BMI is ${bmi}`);
    if(bmi < 16){
        alert("You are Severely underweight ");
    }
    else if(bmi < 18.5){
        alert("You are Underweight ");
    }
    else if(bmi < 25){
        alert("You are Normal ");
    }
    else if(bmi < 30){
        alert("You are Overweight");
    }
    else{
        alert("You are Obese ");
    }