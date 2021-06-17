//1.1
// console.log(Math.random());

//1.2
    /*
    let array = [2,5,6,9,10];
    let number = array.length;
    function getRndInteger(max){
        return Math.floor(Math.random() * (max - 0));
    }
    console.log(array[getRndInteger(number)]);
*/
//1.3.

    let quizzes = [
        {
            question : 'Which fictional detective lived at 221b Baker Street?',
            answer : ['Watson', 'Sam Spade', 'Scubidu', 'Sherlock Holmes'],
            rightChoice : 'Sherlock Holmes',
        },
        {
            question : 'Natri có kí hiệu hóa học là gì?',
            answer : ['Na', 'N', 'Ma', 'Nat'],
            rightChoice : 'Na',
        },
        // {
        //     question : 'Natri clorua có kí hiệu hóa học là gì?',
        //     answer : ['Na', 'N', 'Ma', 'NaCl'],
        //     rightChoice : 'NaCl',
        // },
        // {
        //     question : 'Natri hydroxit có kí hiệu hóa học là gì?',
        //     answer : ['Na', 'N', 'NaOH', 'NaCl'],
        //     rightChoice : 'NaOH',
        // },
        // {
        //     question : 'Natri sunfat có kí hiệu hóa học là gì?',
        //     answer : ['Na', 'N', 'Na2SO4', 'NaCl'],
        //     rightChoice : 'Na2SO4',
        // },
        // {
        //     question : 'Natri cacbonat có kí hiệu hóa học là gì?',
        //     answer : ['Na', 'Na2CO3', 'N', 'NaCl'],
        //     rightChoice : 'Na2CO3',
        // },
        // {
        //     question : 'Bari có kí hiệu hóa học là gì?',
        //     answer : ['Ba', 'B', 'Ma', 'Bar'],
        //     rightChoice : 'Ba',
        // },
        // {
        //     question : 'Bari clorua có kí hiệu hóa học là gì?',
        //     answer : ['Ba', 'BaCl2', 'Ma', 'NaCl'],
        //     rightChoice : 'BaCl2',
        // },
        // {
        //     question : 'Bari sunfat có kí hiệu hóa học là gì?',
        //     answer : ['Ba', 'BaSO4', 'Ma', 'NaCl'],
        //     rightChoice : 'BaSO4',
        // },
    ];
//1.4 + 1.5
    // let number = quizzes.length;
    // function RndInteger(max){
    //     return Math.floor(Math.random() * (max - 0));
    // }
    // let q = quizzes[RndInteger(number)];// lấy ra câu hỏi trong list câu hỏi
    // let question = q.question;
    // let answer = q.answer;
    // let init = prompt(`${question}\n` + "1. " + `${answer[0]}\n` + '2. ' + `${answer[1]}\n` + '3. ' + `${answer[2]}\n` + '4. ' + `${answer[3]}`);
    // if(answer[init - 1] == q.rightChoice) alert('Your choice is correct');
    // else alert('Your choice is wrong. Good luck');
    // console.log(answer[init - 1]);

//1.6 + 1.7
/*
    let number,question,answer,point = 0;
    function RndInteger(max){
        return Math.floor(Math.random() * (max - 0));
    }
    let index = quizzes.length;
    while(true){
        if(quizzes.length != 0){
            number = quizzes.length;
            let index = RndInteger(number);
            let q = quizzes[index];
            quizzes.splice(index, 1);
            question = q.question;
            answer = q.answer;
            let init = prompt(`${question}\n` + "1. " + `${answer[0]}\n` + '2. ' + `${answer[1]}\n` + '3. ' + `${answer[2]}\n` + '4. ' + `${answer[3]}`);
            if(answer[init - 1] == q.rightChoice){
                alert('Your choice is correct');
                point++;
            }
            else alert('Your choice is wrong. Good luck');
        }
        else{
            alert('We are out of question :(');
            break;
        }
    }
    alert(`You answered correctly ${point} in of ${index}`);
*/

//1.8
/*
let number,question,answer,point = 0;
function RndInteger(max){
    return Math.floor(Math.random() * (max - 0));
}
let index = quizzes.length;
while(true){
    if(quizzes.length != 0){
        number = quizzes.length;
        let index = RndInteger(number);
        let q = quizzes[index];
        quizzes.splice(index, 1);
        question = q.question;
        answer = q.answer;
        let answer1 = [], number1, index1;
        while(answer.length != 0){
            number1 = answer.length;
            index1 = RndInteger(number1);
            answer1.push(answer[index1]);
            answer.splice(index1, 1);
        }
        str = '';
        for(let i = 0; i < answer1.length; i++){
            str += ((Number(i) + 1) + '. ' + answer1[i] + '\n');
        }
        let init = prompt(`${question}\n` + `${str}`);
        if(answer1[init - 1] == q.rightChoice){
            alert('Your choice is correct');
            point++;
        }
        else alert('Your choice is wrong. Good luck');
    }
    else{
        alert('We are out of question :(');
        break;
    }
}
alert(`You answered correctly ${point} in of ${index}`);
*/
//================================================================================================

//2
/* 2.1
    let word = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
    let wordByGroup = {};
    for(let i = 0; i < word.length; i++){
        if(!wordByGroup[word[i]]) wordByGroup[word[i]] = 1;
        else wordByGroup[word[i]] += 1;
    }
    for(let i in wordByGroup) console.log(`${i}: ${wordByGroup[i]}`);
*/
//2.2

    let inventory = [
        {
            name: 'HP Envy 13aq',
            price: 21000,
            brand: 'HP',
            quantity: 5,
        },
        {
            name: 'Dell XPS 9370',
            price: 30000,
            brand: 'Dell',
            quantity: 1,
        },
        {
            name: 'Dell Inspiron 3567',
            price: 9300,
            brand: 'Dell',
            quantity: 12,
        },
        {
            name: 'Dell Latitude E5450',
            price: 8600,
            brand: 'Dell',
            quantity: 2,
        },
        {
            name: 'Asus Zenbook',
            brand: 'Asus',
            price: 20000,
            quantity: 4,
        },
        {
            name: 'HP Pavilion',
            brand: 'HP',
            price: 14000,
            quantity: 7,
        },    
    ];

    let inventoryByBrand = {};
    for(let i = 0; i < inventory.length; i++){
        let item = inventory[i];
        if(!inventoryByBrand[item.brand]) inventoryByBrand[item.brand] = [];
        inventoryByBrand[item.brand].push(item);
    }
    console.log(inventoryByBrand);
    let init = prompt('Which brand?').toUpperCase();
    for(let i in inventoryByBrand){
        if(i.toUpperCase() == init){
            let items = inventoryByBrand[i], name = '', total = 0;
            console.log(items);
            for(let j = 0; j < items.length; j++){
                name += '\n' + items[j].name;
                total += (items[j].price * items[j].quantity);
            }
            totalLocal = (total * 1000).toLocaleString();
            alert(`There are ${inventoryByBrand[i].length} generations: \n` + `${name}` + `\n\nWith total value: ${totalLocal}VND`);
        }

    }
    