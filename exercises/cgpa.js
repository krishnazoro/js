const marks = [80, 90, 55, 87 , 86, 78];
 

// Average = 70
// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

let len = marks.length;


let sum = 0;

for(let i = 0; i < len; i++)  {
    sum = sum + marks[i];
}

let avg = sum / len;


grade= ''


    if(avg <= 59)
        grade = 'F';
                    
    if(avg > 59 && avg < 69)
        Grade = 'D';
    if(avg > 69  && avg < 79)
        Grade = 'C';
    if(avg > 79 && avg < 89)
        Grade = 'B';
    if(avg > 89 && avg < 100)
        Grade = 'A';                       

    console.log('The',avg,'mark  and',Grade);


