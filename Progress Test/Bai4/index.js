let staffMindX = [
    {
        name: "Dinh Trieu",
        age: 30,
        wage: 10000000,
        position: 'teacher',
    },
    {
        name: "Oanh",
        age: 28,
        wage: 8000000,
        position: 'support',
    },
    {
        name: "Thinh",
        age: 24,
        wage: 5000000,
        position: 'student',
    },
];

let init;
while(true){
    init = prompt("Enter r,c,u,d");
    if(init == "r"){
        for(let i of staffMindX){
            console.log("Name: " + i.name);
            console.log("Age: " + i.age);
            console.log("Wage: " + i.wage);
            console.log("Position: " + i.position);
            console.log("-------------------------------------------------------");
        }
        break;
    }
    else if(init == "c"){
        let staff = new Object();
        let initName = prompt('Enter the name');
        let initAge = prompt('Enter the age');
        let initWage = prompt('Enter the wage');
        let initPosition = prompt('Enter the position');
        staff["name"] = initName;
        staff["age"] = initAge;
        staff["wage"] = initWage;
        staff["position"] = initPosition;
        staffMindX.push(staff);
    }
    else if(init == "u"){
        let number = Number(prompt("Enter the position"));
        let initName = prompt('Enter the name');
        let initAge = prompt('Enter the age');
        let initWage = prompt('Enter the wage');
        let initPosition = prompt('Enter the position');
        staffMindX[number - 1].name = initName;
        staffMindX[number - 1].age = initAge;
        staffMindX[number - 1].wage = initWage;
        staffMindX[number - 1].position = initPosition;
    }
    else if(init == "d"){
        let number = Number(prompt("Enter the position"));
        staffMindX.splice(number - 1, 1);
    }
    else{
        alert("Your choice wrong");
        break;
    }
}