let massMark = 78;
const heightMark = 1.69;

let massJohn = 92;
const heightJohn = 1.95;

let BMIMark = massMark / (heightMark ** 2);
let BMIJohn = massJohn / (heightJohn * heightJohn);

let doesMarkHigherBMI = BMIMark > BMIJohn;

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's!`);
} else {
    console.log("John's BMI (${BMIMark}) is higher than Mark's!"); 
}

console.log(`${BMIMark}, ${BMIJohn}, ${doesMarkHigherBMI}`)