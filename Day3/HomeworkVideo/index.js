//a
    let n;
    let mangSoNguyen = [];
    n = Number(prompt("Enter n"));
    for (let i = 0; i < n; i++) mangSoNguyen[i] = Number(prompt("Enter number of Array"));
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (mangSoNguyen[i] > mangSoNguyen[j]) {
                let tmp = mangSoNguyen[i];
                mangSoNguyen[i] = mangSoNguyen[j];
                mangSoNguyen[j] = tmp;
            }
        }
    }
    console.log(mangSoNguyen);
//b
    let mangSoNguyenLe = [];
    let mangSoNguyenChan = [];
    for (let i = 0; i < n; i++) {
        if (mangSoNguyen[i] % 2 == 0) mangSoNguyenChan.push(mangSoNguyen[i]);
        else mangSoNguyenLe.push(mangSoNguyen[i]);
    }
    console.log(mangSoNguyenChan);
    console.log(mangSoNguyenLe);

//c 
    let msnci = [];
    let msnli = [];
    for (let i = 0; i < mangSoNguyenChan.length; i++) {
        if(msnci.indexOf(mangSoNguyenChan[i]) === -1){
            msnci.push(mangSoNguyenChan[i]);
        }
    }
    console.log(msnci);
    for (let i = 0; i < mangSoNguyenLe.length; i++) {
        if(msnli.indexOf(mangSoNguyenLe[i]) === -1){
            msnli.push(mangSoNguyenLe[i]);
        }
    }
    console.log(msnli);

