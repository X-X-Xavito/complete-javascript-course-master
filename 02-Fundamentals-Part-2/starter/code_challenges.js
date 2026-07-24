'use strict';

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= (avgKoalas * 2)) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)

//     } else if (avgKoalas >= (avgDolphins * 2)) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log("No team wins...")
//     }
// }


// checkWinner(scoreDolphins, scoreKoalas);

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.2);
}

// console.log(calcTip(100))

// const bills = [125, 555, 44]

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

// console.log(tips)
// console.log(totals)




// const mark = {
//     'fullName': "Mark Miller",
//     'mass': 78,
//     'height': 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi
//     }
// }

// console.log(mark)


// const john = {
//     'fullName': "John Smith",
//     'mass': 92,
//     'height': 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi
//     }
// }

// console.log(john)
// mark.calcBMI()
// john.calcBMI()


// console.log(`${mark.bmi > john.bmi ? mark.fullName : john.fullName} BMI (${mark.bmi > john.bmi ? mark.bmi : john.bmi}) is higher than ${mark.bmi < john.bmi ? mark.fullName : john.fullName} (${mark.bmi < john.bmi ? mark.bmi : john.bmi})`)



// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? (bill * 0.15) : (bill * 0.2);
// }

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = []

const totals = []

for (let i = 0; i < bills.length; i++) {
    // console.log(bills[i]);
    tips.push(calcTip(bills[i]))
    totals.push(bills[i] + calcTip(bills[i]))
}

console.log(bills)
console.log(tips)
console.log(totals)

const calcAverage = function (arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    console.log(sum / arr.length)
    return sum / arr.length

}

calcAverage(totals)