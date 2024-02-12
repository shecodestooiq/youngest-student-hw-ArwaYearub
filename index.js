var students = [
    {
        name: 'arwa',
        age: 20
    },
    {
        name: 'Nihad',
        age: 33
    },
    {
        name: 'Noor',
        age: 23
    }
]

function showYoungestStudent(students) { 
    var temp = students[0];

    for(var i=0; i<students.length;i++){
        if(temp.age >= students[i].age){
            temp = students[i];
        }
    }

    console.log(temp.name) //prints the name of the youngest student
}

showYoungestStudent(students);
module.exports = showYoungestStudent;
