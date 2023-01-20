let students =[
    {
        id: 111115,
        name: "mika",
        grades: [70,80,90,100]
    },
    {
        id: 111113,
        name: "mosha",
        grades: [70,60,97,65]
    },
    {
        id: 111117,
        name: "lili",
        grades: [75,73,70,55]
    }
]

//a function receives arr of students. filter from the grades's arr only the grades above 80 and then return list with the students that their avg of grades above 80 is above 90.

const avg= arr =>{
    if (arr.length===0) return 0;
    let sum=0;
    arr.forEach(num=> sum+=num);
    return sum/arr.length;
};
const excellentSdudent = arr => {
    var exellents=[];
       arr.map(student => student.grades=student.grades.filter(grade => grade>=80));
       arr.forEach(s=> {
        if(avg(s.grades)>90){
            exellents.push(s.name);
        }
       });
if (exellents.length===0) return "there are no exelents students"
    else return exellents;
}
   console.log(excellentSdudent(students));

