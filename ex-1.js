let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  /*  let wordLengths = [];
  for (let value of words){
    wordLengths.push(value.length)
    //console.log(value.length);
  }
  return wordLengths;
  */
  return words.length;
}
//console.log(words[0].length);
let result = words.map(getWordLengths);

console.log(result); // Output: [5, 5]
