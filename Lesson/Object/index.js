//1. Khai báo object
// let person = {}; // Khai báo một object rỗng
// console.log(person);
//Khai báo object với 1 dữ liệu
// let person = {
//     name : 'Nam'
// };
// console.log(person);
//Khai báo object với nhiều dữ liệu
//c1
// let person = {
//     name: 'Nam',
//     age: 18,
//     gender: 'Male',
// };
//c2
// let person = new Object();
// person.name = 'Nam';
// person.age = 18;
// person.gender = 'Male';

// console.log(person);

//2. Truy xuất vào thuộc tính của object: có 2 cách:
//c1 Dùng "."
    // let person = {
    //     name: 'Thinh',
    //     age: 21,
    //     gender: 'Male',
    // };
    // console.log(person.name);
// Những trường hợp không thể truy xuất được object khi dùng ".":
//     Tên thuộc tính không theo quy tắc chuẩn đặt tên
//     Thuộc tính được người dùng(bên khác) quyết định
//c2 Dùng []
let person = {
    name: 'Thinh',
    age: 21,
    gender: 'Male',
    favs: ['Football', 'Game', 'Girl'],
};
// console.log(person['gender']);
//3. Tạo object: 2 cách tạo
//c1.
    // person.status = "Single";
    // console.log(person);

//c2
    // person['address'] = 'Ha Noi';
    // console.log(person);

//4. Update
//c1
    // person.gender = 'Female';
    // console.log(person);
//c2
    // person['age'] = 23;
    // console.log(person);

    // for(let item of person.favs) console.log(item);
    // for(let i = 0; i < person.favs.length; i++) console.log(person.favs[i]);
    // for(let item in person) console.log(item);
    const product = {
        name: 'Xaomi',
        price: 1700,
    }
    product.price = 2000;
    console.log(product);
    product['rate'] = 5.0;
    console.log(product);
