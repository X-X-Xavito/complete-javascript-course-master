'use strict';

// function describeCountry(country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`
// }

// const finland = describeCountry("Finland", 6, "Helsinki");
// const portugal = describeCountry('Portugal', 10, 'Lisbon');
// const germany = describeCountry('Germany', 83, 'Berlin');

// console.log(finland, portugal, germany);

// function percentageOfWorld1(population) {
//     return (population / 7900) * 100;
// }

// const brazil = percentageOfWorld1(200);
// const finland = percentageOfWorld1(6);
// const germany = percentageOfWorld1(83);

// console.log(brazil, finland, germany);


// const percentageOfWolrd2 = function (population) {
//     return (population / 7900) * 100;
// }

// const brazil2 = percentageOfWolrd2(200)
// console.log(brazil2)

// const percentageOfWolrd3 = population => (population / 7900) * 100;
// const brazil3 = percentageOfWolrd3(200)
// const finland3 = percentageOfWolrd3(6);
// const germany3 = percentageOfWolrd3(83);
// console.log(brazil3)
// console.log(finland3)
// console.log(germany3)


// const describePopulation = function (country, population) {
//     const percentage = percentageOfWorld1(population);
//     return `${country} has ${population} million people, which is about ${percentage} % of the world`
// }

// console.log(describePopulation("brazil", 200))

// const populations = [10, 200, 6]

// console.log(populations.length === 4)

// const percentages = [
//     percentageOfWorld1(200),
//     percentageOfWorld1(6),
//     percentageOfWorld1(83)
// ]
// console.log(percentages)

// const myCountry = {
//     country: 'Finland',
//     capital: 'Helsinki',
//     language: 'finnish',
//     population: 6,
//     neighbours: ['Norway', 'Sweden', 'Russia'],

//     describe: function () {
//         console.log(
//             `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//         );
//     },

//     checkIsland: function () {
//         this.isIsland = this.neighbours.length > 0 ? false : true;
//         console.log(this.isIsland);
//     }
// };

// myCountry.describe()
// myCountry.checkIsland()

// console.log(myCountry);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry['population'] -= 2;
// console.log(myCountry.population);


// for (let voter = 1; voter <= 50; voter++)
//   console.log(`Voter number ${voter} is currently voting`);



// const populations = [200, 6, 83]

// const percentages2 = []

// for (let i = 0; i < populations.length; i++) {
//     percentages2.push(percentageOfWorld1(populations[i]));
// }

// console.log(percentages2)


// const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
// // const listOfNeighbours = [['Norway', 'Sweden', 'Russia']];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     // console.log(listOfNeighbours[i])

//     if (listOfNeighbours[i].length < 2) continue

//     for (let pais = 0; pais < listOfNeighbours[i].length; pais++) {
//         console.log(`---- Pais: ${listOfNeighbours[i][pais]}`)

//         for (let vizinho = 0; vizinho < listOfNeighbours[i].length; vizinho++) {
//             if (listOfNeighbours[i][pais] === listOfNeighbours[i][vizinho]) continue
//             console.log(`Neighbor ${listOfNeighbours[i][vizinho]}`)
//         }
//     }
// }

