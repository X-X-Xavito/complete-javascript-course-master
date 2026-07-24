'use strict';

// let has_drivers_license = false;
// const pass_test = true;

// if (pass_test) has_drivers_license = true;

// if (has_drivers_license) console.log('i can drive');

// // const interface = "Audio";

// function logger() {
//     console.log("eu sou kaique");
// }

// logger();


// function fruit_processor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Suco de ${apples} maças e ${oranges} laranjas`;
//     return juice;
// }

// const apples_juice = fruit_processor(5, 0);
// console.log(apples_juice)
// console.log(fruit_processor(5, 0))


// const apple_orange_juice = fruit_processor(10, 20);
// console.log(apple_orange_juice);


// //func declaration
// function calc_age1(birthyear) {
//     return 2037 - birthyear;
// }
// const age1 = calc_age1(1993);

// // // function expression ou função anonima
// const calc_age2 = function (birthyear) {
//     return 2037 - birthyear;
// }
// const age2 = calc_age2(1993)

// console.log(age1, age2);

//arrow function
// const calc_age3 = birthyear => 2037 - birthyear;
// const age3 = calc_age3(1991);
// console.log(age3)

// const years_until_retirement = (birthyear, first_name) => {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${first_name} retires in ${retirement} years`;
// }

// console.log(years_until_retirement(1991, "kaique"));


// function cut_fruit_pieces(fruit) {
//     return fruit * 4;
// }

// function fruit_processor(apples, oranges) {

//     const apple_pieces = cut_fruit_pieces(apples);
//     const orange_pieces = cut_fruit_pieces(oranges);

//     const juice = `Suco de ${apple_pieces} pedaços de maças e ${orange_pieces} pedaços de laranjas`;
//     return juice;
// }


// console.log(fruit_processor(2, 3));


// arrays

// const friends = ['carlos', 'joao', 'betinho', 'diego', 'valdivia']

// console.log(friends)

// console.log(friends[0])

// console.log(friends.length)

// console.log(friends[friends.length - 1])

// friends[1] = 'teste'

// console.log(friends);

// // exercise


// function calc_age1(birthyear) {
//     return 2037 - birthyear;
// }

// const years = [1990, 1965, 1954];

// const age1 = calc_age1(years[0])
// const age2 = calc_age1(years[years.length - 1])

// console.log(age1, age2)

// const ages = [calc_age1(years[0]), calc_age1(years[years.length - 1])]

// console.log(ages)


// const friends = ['carlos', 'joao', 'betinho', 'diego', 'valdivia'];
// const new_length = friends.push('elvis');
// console.log(friends); //adiciona elemento no fim
// console.log(new_length);

// friends.unshift('lucas'); //adiciona elemento no começo
// console.log(friends);


// // friends.pop() ////remove elemento no fim
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift() // remove elemento no começo
// console.log(friends);

// console.log(friends.indexOf('joao')); // traz a posição do elemento

// console.log(friends.indexOf('BOB')) // se tentar trazer a posição de algum elemento que não exista ele retorna -1

// console.log(friends.includes('joao')) // checa se o elemento existe. Retorna true ou false

// if (friends.includes('joao')) {
//     console.log('vc tem um amigo chamado joao')
// }


// OBJECTS - DICT

// const kaiqueArray = [
//     'Kaique',
//     'Xavier',
//     2037 - 1993,
//     'dev',
//     ['carlos', 'joao', 'betinho', 'diego', 'valdivia']
// ]

// const kaique = {
//     firstName: 'Kaique',
//     lastName: 'Xavier',
//     age: 2037 - 1993,
//     job: 'dev',
//     friends: ['carlos', 'joao', 'betinho', 'diego', 'valdivia']
// };

// cada um dos elementos é uma property

// console.log(kaique)

// console.log(kaique.lastName);
// console.log(kaique['lastName']);

// const nameKey = 'Name';
// console.log(kaique['first' + nameKey]);
// console.log(kaique['last' + nameKey]);


// const question = prompt('What do you wnat know about?')
// console.log(kaique.question) //retorna undefined

// if (kaique[question]) {
//     console.log(kaique[question]) //retorna algo pois bracket notation retorna algo
// } else {
//     console.log('wrong request')
// }

// kaique.location = 'brazil'
// kaique['twitter'] = 'teste!'
// console.log(kaique)

// // challenge
// //"Kaique tem 5 amigos e seu melhor amigo é carlos"
// // kaique.firstName
// // kaique['friends'].length
// // kaique.friends[0]

// console.log(`${kaique.firstName} tem ${kaique['friends'].length} amigos e seu melhor amigo é ${kaique.friends[0]}`)


// const kaique = {
//     firstName: 'Kaique',
//     lastName: 'Xavier',
//     birthYear: 1993,
//     job: 'dev',
//     friends: ['carlos', 'joao', 'betinho', 'diego', 'valdivia'],
//     hasDriversLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2037 - birthYear
//     // } //  é um metodo do objeto

//     // calcAge: function () {
//     //     console.log(this)
//     //     return 2037 - this.birthYear
//     // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYear
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} é um ${this.job} de ${this.calcAge()} e ele ${this.hasDriversLicense ? 'tem' : 'nao tem'} carteira de motorista`
//     }

// };

// console.log(kaique.calcAge())
// console.log(kaique.age)
// console.log(kaique['calcAge'](2000))
// console.log(kaique.temCNH())


//Challenge
// "Kaique é um dev de 33 anos, e ele nao tem/tem carteira de motorista."
// console.log(kaique.getSummary())
// console.log(kaique)


//// FOR Loop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Levantando peso repeticao ${rep}`)
// }


// const kaiqueArray = [
//     'Kaique',
//     'Xavier',
//     2037 - 1993,
//     'dev',
//     ['carlos', 'joao', 'betinho', 'diego', 'valdivia']
// ];
// const types = [];

// for (let i = 0; i < kaiqueArray.length; i++) {
//     //reading
//     console.log(kaiqueArray[i]);

//     //filling
//     // types[i] = typeof kaiqueArray[i];
//     types.push(typeof kaiqueArray[i])
// }
// console.log(types)

// const years = [1993, 2007, 2020];

// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i])
// }
// console.log(ages)

// //continue and break

// console.log('só string')

// for (let i = 0; i < kaiqueArray.length; i++) {
//     if (typeof kaiqueArray[i] !== 'string') continue;
//     console.log(kaiqueArray[i], typeof kaiqueArray[i]);

// }

// console.log('só break com number')

// for (let i = 0; i < kaiqueArray.length; i++) {
//     if (typeof kaiqueArray[i] === 'number') break;
//     console.log(kaiqueArray[i], typeof kaiqueArray[i]);

// }


// const kaiqueArray = [
//     'Kaique',
//     'Xavier',
//     2037 - 1993,
//     'dev',
//     ['carlos', 'joao', 'betinho', 'diego', 'valdivia']
// ];

// for (let i = kaiqueArray.length - 1; i >= 0; i--) {
//     console.log(i, kaiqueArray[i]);
// }

// for (let exer = 1; exer < 4; exer++) {
//     console.log(`---- Iniciando exercicio ${exer}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercicio ${exer}: Repetição ${rep}`);
//     }
// }



// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Levantando peso repeticao ${rep}`)
// }


//while
// let rep = 1
// while (rep <= 10) {
//     console.log(`Levantando peso repeticao ${rep}`)
//     rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// // console.log(dice)

// while (dice !== 6) {
//     console.log(`voce tirou um ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1
//     if (dice === 6) console.log('acabou')
// }
