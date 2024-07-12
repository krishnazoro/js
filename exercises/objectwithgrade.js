let name = ['x' , 'y', 'z' , 'a', 'b'];


let start = 0;
let end = 4;
for(let i = start; i <= end ; i++) {
    console.log(name[i]);
}

 let student = [
    {name: 'Krishna',
        mark: 80},
    {name:'Ravi',
         mark: 85},
    {name: 'vijay',
        mark: 86},
    {name: 'rahman',
        mark: 99},
    {name: 'lokesh',
        mark: 84},
    {name:'siril',
        mark: 87},
    {name: 'anirudh',
        mark: 20},
    {name: 'batman',
        mark: 90},
    {name:'superman',
        mark: 70},
    {name: 'nolan',
        mark: 100}
    
    ]
    
    let currentGrade = '';
    let currentMark = 70;
    let currentName = '';
    for (i in student) {
        currentMark = student[i].mark;
        currentName = student[i].name;
        if(currentMark <= 40)
            currentGrade ='F';
        if(currentMark >= 40 && currentMark <= 60)
            currentGrade ='C';
        if(currentMark >= 60  && currentMark <= 80)
            currentGrade ='B';
        if(currentMark >=80 && currentMark <= 100)
            currentGrade ='A';




        console.log (currentName, 'has scored', currentMark, 'marks with', currentGrade, 'Grade.');
    }

