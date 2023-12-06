const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];
let avg = 0;
function getAverageStudentScore(students) {
  // Start coding here
  //without a build-in function
  /*let total  = 0;
  for (let i=0;i<students.length;i++){
    total+=students[i].score
    console.log(total);
  }
  total =total/students.length;
  avg = total;
  console.log(total);
  return avg;*/
  //with array.reduce
  let sum = students.reduce((accumulator, current) => {
    return accumulator + current.score;
  }, 0);
  let avg = sum / students.length;
  return console.log(`Output: ${avg}`);
}

getAverageStudentScore(students);
