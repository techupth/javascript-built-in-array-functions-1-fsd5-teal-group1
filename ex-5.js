const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let sumScore = students.reduce(
    (total, students) => total + students.score, 0
  );
  return sumScore / students.length;
}

console.log(getAverageStudentScore(students)); // Output: 87.5
