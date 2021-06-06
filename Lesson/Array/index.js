// Khai báo mảng
    //let menu = [];
    // let menu = ['Cháo gà', 'Cháo trai', 'Cháo lươn'];
    // console.log(menu);
    // let menu = ['Cháo gà', 4, 'Cháo Vịt', 5];
    // console.log(menu);
    // for(let i = 0; i < menu.length; i++) console.log(typeof menu[i]);
    //1. Init
    // let phim = ['Ironman', "Caption American", "Hulk", 'Avenger', 'Antman'];
    // console.log(phim);
    //2. Create
    // Khi dùng hàm push thì js sẽ thêm phần tử vào vị trí cuối của Array
    // let newMovie = prompt("Enter a your movie you like?");
    // phim.push(newMovie);
    // console.log(phim);

    //3. Read
    // let i = prompt("Enter the index:");
    // console.log(phim[i]);

    //4. Update
        //a
            // let movieTitle = prompt('Enter the title movie');
            //  phim[0] = movieTitle;
            // console.log(phim);
        //b
            // let i = prompt("Enter the index");
            // let movieTitle = prompt('Enter the title movie');
            // phim[i] = movieTitle;
            // console.log(phim);
    //5. Delete
    //a
        // let i = prompt("Enter the index");
        // phim.splice(i, 1);
        // console.log(phim);
    //b
        // let i = prompt("Enter the index");
        // let n = prompt('Enter the number');
        // phim.splice(i,n);
        // console.log(phim);
    //6. Read all
        //a
            // for(let i = 0; i < phim.length; i++) console.log(phim[i]);
        //b
            // for(let i = 0; i < Math.floor(phim.length/2); i++) console.log(phim[i]);
        //c
            // for(let i = 0; i < phim.length; i++) console.log((i + 1) + '. ' + phim[i]);

    //7. Update all
        // for(let i = 0; i < phim.length; i++) console.log(phim[i].toUpperCase());
    
    //8. While
    //a
        // let username = prompt("Register an username");
        // while(username.length > 15){
        //     alert("Your user name is too long");
        //     username = prompt("Register an username");
        // }
        // alert("Good username");

    //b
        while(true){
            let yourChoice = prompt("How many legs does a spider have?\n" + "1. None\n" + "2. 4 legs\n" + "3. 8 legs\n" + "4. 12 legs");
            if(yourChoice == undefined){
                alert("Thanks");
                break;
            }
            else{
                if(yourChoice < 1) alert("Your choice an invalid choice. Please choice again!");
                else if(yourChoice < 3){
                    alert("Good luch your time");
                    break;
                }
                else if(yourChoice == 3){
                    alert("Bravo, you are correct");
                    break;
                }
                else if(yourChoice == 4){
                    alert("Good luch your time");
                    break;
                }
                else alert("Your choice an invalid choice. Please choice again!");
            }
        }
        
        