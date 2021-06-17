/*
const s = 'Bo em hut rat nhieu thuoc, me em nuoc mat nhat nhoa';
const countData = {};
for(let i = 0; i < s.length; i++){
    const c = s[i];
    if(countData[c]){
        countData[c]++;
    }
    else{
        countData[c] = 1;
    }
}
console.log(countData);
*/
const movies = [
    {
        title : 'The dark knight',
        rate : 8.5,
        genre : 'Action',
    },
    {
        title : 'Avenger',
        rate : 8.6,
        genre : 'Action',
    },
    {
        title : 'Naruto',
        rate : 9,
        genre : 'Anime',
    },
    {
        title : 'One piece',
        rate : 8.5,
        genre : 'Anime',
    },
    {
        title : '50 sac thai',
        rate : 8,
        genre : 'Romantic',
    },
];

const movieByGroup = {
};
for(let i = 0; i < movies.length; i++){
    const movie = movies[i];
    const genre = movie.genre;
    if(!movieByGroup[genre]) movieByGroup[genre] = [];
    movieByGroup[genre].push(movie);
}
console.log(movieByGroup);