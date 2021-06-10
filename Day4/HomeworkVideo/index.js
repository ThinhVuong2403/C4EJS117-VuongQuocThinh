//1.
    let movie = {
        title : 'Avenger',
        year : 2012,
        rate : 8.4,
    };
    //console.log(movie);
//==============================================================================================================

//2.
//2.1.
    //c1
    // console.log(movie.title);
    //c2
    // console.log(movie['title']);
//2.2
    // console.log(movie['director']);
//2.3
    // let p = prompt("Enter a property");
    // let a = movie[p];
    // if(a == null || a == undefined){
    //     alert(`${p} does not exist in our data`);
    // }
    // else{
    //     alert(a);
    // }
//=========================================================================================================
//3
//3.1.1
    // movie.rate = 8.7;
    // console.log(movie);
//3.1.2
    // movie['rate'] += 0.5;
    // console.log(movie);
//3.2
    // let yourChance = prompt('What you want to update');
    // let init = prompt('What is the update');
    // movie[yourChance] = init;
    // console.log(movie);
//==========================================================================================================

//4.
    let yourChance = prompt('What you want to update');
    let p = movie[yourChance];
    if(p == undefined){
        alert(`${yourChance} does not exist in our data, we will data add new`);
        let init = prompt('Enter the new data');
        movie[yourChance] = init;
    }
    console.log(movie);