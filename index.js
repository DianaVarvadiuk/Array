const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"]
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


 //function 1
function couplStudents(students) {
  return [
    [students[0],students[2]],[students[1],students[3]],[students[4],students[5]]
  ];
}

const couples = (couplStudents(students));
console.log('couples', couples);

 //function 2
function getPairsAndProject (couples, themes) {
  const pairsAndProject = [];

  for (let i = 0; i < couples.length; i++) {
    pairsAndProject.push([couples[i].join(' and '), themes[i]]);
  }
  
  return pairsAndProject;
}

const pairsWithProject = getPairsAndProject (couples, themes);
console.log('pairsAndProject', pairsWithProject );

//function 3
function setStudentsMarks (students, marks) {
  const couplesMark = [];

  for (let i = 0; i < students.length; i++) {
    couplesMark.push([students[i], marks[i]]);
  }

  return couplesMark;
}

console.log('couplesMark', setStudentsMarks(students, marks));

function generationRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  
  return randomNumber;
}

//function 4
function setRandomMark(studentsWithProject){
  const randomResultMark = [];
  console.log('studentsWithProject', studentsWithProject);
  for (let i = 0; i<studentsWithProject.length; i++) {
    const randomMark = generationRandomNumber(1, 5);
    randomResultMark.push ([...studentsWithProject[i], randomMark]); 
  }
console.log('randomResultMark', randomResultMark);
  return randomResultMark;
}

console.log(setRandomMark(pairsWithProject));
