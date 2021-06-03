//a
    let n;
    let mangSoNguyen = [];
    n = Number(prompt("Enter n"));
    for(let i = 0; i < n; i++) mangSoNguyen[i] = Number(prompt("Enter number of Array"));
    for(let i = 0; i < n - 1; i++){
        for(let j = i + 1; j < n; j++){
            if(mangSoNguyen[i] > mangSoNguyen[j]){
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
    for(let i = 0; i < n; i++){
        if(mangSoNguyen[i] % 2 == 0) mangSoNguyenChan.push(mangSoNguyen[i]);
        else mangSoNguyenLe.push(mangSoNguyen[i]);
    }
    console.log(mangSoNguyenChan);
    console.log(mangSoNguyenLe);