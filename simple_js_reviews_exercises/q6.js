const students = [
    {name:'student 1', score:87},
    {name:'student 2', score:94},
    {name:'student 3', score:68},
    {name:'student 4', score:59},
    {name:'student 5', score:61},
    {name:'student 6', score:100},
    {name:'student 7', score:79},
    {name:'student 8', score:85},
    {name:'student 9', score:73},
    {name:'student 10', score:80},
]

console.log(students.filter(item => item.score >= 80))