let massMark = 78;
const heightMark = 1.69;

let massJohn = 92;
const heightJohn = 1.95;

let BMIMark = massMark / (heightMark ** 2);
let BMIJohn = massJohn / (heightJohn * heightJohn);

let doesMarkHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, doesMarkHigherBMI)