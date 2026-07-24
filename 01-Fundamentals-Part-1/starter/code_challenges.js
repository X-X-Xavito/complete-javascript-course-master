
// // Code challenge 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark);
// console.log(BMIJohn);

// const markHigherBMI = BMIMark > BMIJohn;

// console.log(markHigherBMI);

// // =====


// // Code challenge 2

// if (BMIMark > BMIJohn) {
//     console.log(`"Mark's BMI is higher than John's!"`)
// } else {
//     console.log(`"John's BMI is higher than Mark's!"`)
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// console.log(scoreDolphins, scoreKoalas)

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("Dolphins win the trophy!");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log("Koalas win the trophy!");
// } else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log("Both win the trophy! with at least 100");
// } else {
//     console.log("No one wins the trophy!");
// }


const bill = 275;

const tip = bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.2);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
