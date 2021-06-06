//1
// let a = 5;
// let b = 6;
// console.log(a , b);
// //c1: Chuyển nhượng cấu trúc
// // [a, b] = [b, a];

// //c2: Bổ sung và khác biệt
// // a = a + b;
// // b = a - b;
// // a = a - b;

// //c3: Toán tử XOR
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

// console.log(a, b);
//=====================================================================

//2. 
// const s = 'Hello beauty there';
// let a = Array(s).toString().split(" ");
// console.log(a);
//======================================================================

//3.
// const a = [4, 5, 7, -8];
// console.log(...a);
//====================================================================

//4. Thực hiện với console
// let shop = ['Jeans', 'T-Shirt', 'Socks'];
// let init;
// let item, index;
// while(true){
//     init = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?');
//     if(init == undefined){
//         alert("Thanks");
//         break;
//     }
//     else if(init == "r"){
//         for(let i = 0; i < shop.length; i++) console.log((i + 1) + ". " + shop[i]);
//         break;
//     }
//     else if(init == "c"){
//         item = prompt('Enter the name of the new item');
//         shop.push(item);
//         alert("Done");
//     }
//     else if(init == "d"){
//         index = Number(prompt("Enter the position"));
//         shop.splice(index-1, 1);
//         alert("Done");
//     }
//     else if(init == "u"){
//         index = Number(prompt("Enter the position"));
//         item = prompt('Enter the name of the new item');
//         shop[index - 1] = item;
//         alert("Done");
//     }
//     else{
//         alert("This command is not supported");
//     }
// }
//Thực hiện với alert

// let shop = ['Jeans', 'T-Shirt', 'Socks'];
//     let init;
//     let item, index;
//     while(true){
//         init = prompt('Hi there, welcome to shop admin panel, what do you want (C, R, U, D)?');
//         if(init == undefined){
//             alert("Thanks");
//             break;
//         }
//         else if(init == "r"){
//             for(let i = 0; i < shop.length; i++) alert((i + 1) + ". " + shop[i] + "\n");
//             break;
//         }
//         else if(init == "c"){
//             item = prompt('Enter the name of the new item');
//             shop.push(item);
//             alert("Done");
//         }
//         else if(init == "d"){
//             index = Number(prompt("Enter the position"));
//             shop.splice(index-1, 1);
//             alert("Done");
//         }
//         else if(init == "u"){
//             index = Number(prompt("Enter the position"));
//             item = prompt('Enter the name of the new item');
//             shop[index - 1] = item;
//             alert("Done");
//         }
//         else{
//             alert("This command is not supported");
//         }
//     }
//================================================================================================================

//5.
// let a = [], sum = 0;
// let init = prompt("Enter a squence of Number, separated by commas (,)");
// a = init.split(",");
// for(let i = 0; i < a.length; i++) sum += Number(a[i]);
// alert(`The sum of them is ${sum}`);
//====================================================================================================

//6.
// let a = [], sum = 0, min;
// let init = prompt("Enter a squence of Number, separated by commas (,)");
// a = init.split(",");
// min = Number(a[0]);
// for(let i = 1; i < a.length; i++){
//     if(Number(a[i]) < min) min = Number(a[i]);
// }
// alert(`The smallest number is ${min}`);
//========================================================================================================

// 7.
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let d = 0;
// let init = Number(prompt("Enter a number"));
// for(let i = 0; i < arr.length; i++){
//     if(init == arr[i]){
//         alert(`${init} is found in my array at index ` + i);
//         d = 1;
//     } 
// }
// if(d != 1) alert(`${init} is NOT found in my array`);
//=======================================================================================================

// //8.
// //1
// let arraySheep = [5, 7, 300, 90, 24, 50, 75];
// console.log("Hello, your sheep:\n");
// console.log(...arraySheep);
// //2
// console.log("Now my biggest sheep has size " + Math.max(...arraySheep));
// //3
// console.log("After shearing, here is my flock\n");
// arraySheep[arraySheep.indexOf(Math.max(...arraySheep))] = 8;
// console.log(...arraySheep);
// //4
// // for (let i = 0; i < arraySheep.length; i++) arraySheep[i] += 50;
// // console.log("After one month\n");
// // console.log(...arraySheep);
// //5
// let n = Number(prompt("Enter a number"));
// let j = 1;
// while (j <= n) {
//     for (let i = 0; i < arraySheep.length; i++) arraySheep[i] += 50;
//         console.log(`After ${j} month`);
//         console.log(...arraySheep);
//     if (j != n) {
//         console.log("Now my biggest sheep has size " + Math.max(...arraySheep));
//         console.log("After shearing, here is my flock\n");
//         arraySheep[arraySheep.indexOf(Math.max(...arraySheep))] = 8;
//         console.log(...arraySheep);
//         j++;
//     }
//     else{
//         break;
//     }
// }

// //6
// let sum = 0;
// for(let i = 0; i < arraySheep.length; i++) sum += arraySheep[i];
// console.log(`Total size: ${sum}`);
// console.log("I would get " + sum*2);
//=======================================================================================================

//10.
    //c1
        // let array9 = [];
        // let init = prompt("Enter a sequence of names");
        // array9 = init.split(",");
        // for(let i = 0; i < array9.length; i++) array9[i] = '<' + array9[i] + '>';
        // alert(`${init} ==> ${array9}`);

    //c2: Phương thức map() tạo một mảng mới mà được điền với các kết quả của việc gọi một hàm đã cho trên mọi phần tử của mảng
        // let array9 = [];
        // let init = prompt("Enter a sequence of names");
        // array9 = init.split(",");
        // let map = array9.map(array9 => "<" + array9 + ">");
        // alert(`${init} ==> ${map}`);
        // //console.log(map);
    
//11.
    //c1
        // let a = [], al = [];
        // let init = prompt("Enter a sequence number");
        // a = init.split(",");
        // for(let i = 0; i < a.length; i++){
        //     if(Number(a[i]) % 2 == 1) al.push(a[i]);
        // }
        // alert(`${init} ==> ${al}`);
        ////console.log(...al);
    //c2: Dùng filter
    //Test git
        let a = [];
        let init = prompt("Enter a number");
        a = init.split(",");
        let al = a.filter(a => a % 2);
        alert(`${init} ==> ${al}`);