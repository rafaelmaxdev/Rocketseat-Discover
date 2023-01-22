// function scope
let subject;

function createThink() {
  subject = "study";
  return subject;
}

console.log(subject); // undefined
createThink(); // study
console.log(subject);
