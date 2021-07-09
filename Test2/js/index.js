
async function load(){
    const conn = await fetch('https://tobitheme.net/api/characters.json');
    const db = await conn.json();
    const data = db.data;
    console.log(data);
    for(let i = 0; i < 6; i++){
        document.getElementById(`name${i + 1}`).innerHTML = data[i].name;
        document.getElementById(`house${i + 1}`).innerHTML = data[i].house;
        document.getElementById(`picture${i + 1}`).src = data[i].image;
    }
}

load();