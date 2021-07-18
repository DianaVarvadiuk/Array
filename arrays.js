const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];
const pairsAndProject = [];
 //function 1
 function couplStudents(students) {
     return [[students[0],students[2]],[students[1],students[3]],[students[4],students[5]]];
 }
  const couples = (couplStudents(students));
  console.log(couples);
 //function 2
  function getNestedArray (couples, themes) {
    for (let i = 0; i < couples.length; i++) {
        pairsAndProject.push([couples[i].join(' and '), themes[i]]);
    }
    return pairsAndProject;
}
console.log(getNestedArray (couples, themes));
//function 3
function joinStudentsMarks (students, marks) {
    const couplesMark = [];
    for (let i = 0; i< students.length; i++) {
        couplesMark.push([students[i],marks[i]]);
    }
    return couplesMark;
}
console.log(joinStudentsMarks(students, marks));
//function 4
function randomMarker(pairsAndProject){
   const min = 1;
   const max = 5;
   const randomResultMark = [];
   for (let i = 0; i<pairsAndProject.length; i++) {
    const mark = Math.floor(Math.random() * (max - min + 1) + min);
    randomResultMark.push ([...pairsAndProject[i], mark]);
    }
    return randomResultMark;
}
console.log(randomMarker(pairsAndProject));
