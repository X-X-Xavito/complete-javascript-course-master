// // let js = 'amazing';
// // let first_name = "Kaique";


// // console.log(first_name);
// // console.log(typeof first_name);

// // first_name = 23;

// // console.log(first_name);
// // console.log(typeof first_name);


// // let ano;
// // console.log(ano)
// // console.log(typeof ano)


// // const now = 2037;

// // const age_kaique = now - 1993;
// // const age_sara = now - 2018;

// // console.log(age_kaique, age_sara);
// // console.log(age_kaique * 2, age_kaique / 10, 2 ** 3);

// // const fist_name = "Kaique";
// // const last_name = "Xavier";

// // console.log(fist_name + " " + last_name);

// // let x = 10 + 5;
// // x += 10; // adciona mais 10 ao x
// // x *= 4; // multiplica x por 4;
// // x++; // adiciona 1 pro x;
// // x--; // diminui 1 pro x;
// // console.log(x);


// // // comparison operatros
// // console.log(age_kaique > age_sara);
// // console.log(age_sara >= 18);


// // const is_full_age = age_sara >= 18;


// // console.log(now - 1993 > now - 2018);



// // const now = 2037;

// // const age_kaique = now - 1993;
// // const age_sara = now - 2018;


// // console.log(now - 1993 > now - 2018);

// // const average_age = (age_kaique + age_sara) / 2;
// // console.log(age_kaique, age_sara, average_age);


// // const first_name = "Kaique";
// // const job = "dev";
// // const ano_de_nascimento = 1993;
// // const ano = 2037;

// // const kaique_new = `I'm ${first_name}, a ${ano - ano_de_nascimento} years old ${job}!`;
// // console.log(kaique_new);

// // const template_literal_test = `oi
// // arrombada
// // fdp`;

// // console.log(template_literal_test);

// // const age = 15;

// // if (age >= 18) {
// //     console.log("Sarah can drive!😊")
// // } else {
// //     const years_left = 18 - age
// //     console.log(`Sarah can't drive 😒. Wait another ${years_left} years`)
// // }

// // const birth_year = 1993;
// // let century;

// // if (birth_year <= 2000) {
// //     century = 20;
// // } else {
// //     century = 21;
// // }
// // console.log(century);

// // type conversion
// // const input_year = "1993"
// // console.log(Number(input_year))
// // console.log(Number(input_year) + 18)


// // console.log(Number("kaique")) // produces a NaN - Not a Number
// // console.log(typeof NaN) // it means it is a number, but not a valid one
// // console.log(String(23))


// // //type coercion
// // console.log("I am number " + 23) // converte numero para string
// // console.log("23" - "10" - 3) // sinal de menos não converte para string e sim todos para numero
// // console.log("23" - "10" + 3) // vai produzir 16. sinal de menos não converte para string e sim todos para numero
// // console.log("23" + "10" - 3) //  vai produzir 2307. sinal de menos não converte para string e sim todos para numero
// // console.log("23" * "2") // sinal de mult e divisao  não converte para string e sim todos para numero


// // 5 falsy values: 0, '', undefined, null, NaN

// // console.log(Boolean(0));
// // console.log(Boolean(undefined));
// // console.log(Boolean('kaique'));
// // console.log(Boolean({})); // objeto vazio
// // console.log(Boolean(''));

// // const money = 10;

// // if (money) {
// //     console.log("Dont spend it")
// // } else {
// //     console.log('get a job')
// // }

// // let altura; // quando defino assim, sem valor, ela torna-se undefined

// // if (altura) {
// //     console.log("YES, altura definida");
// // } else {
// //     console.log("altura não definida")
// // }

// // const age = "18";

// // if (age === 18) console.log("You are an adult SEM type coercion") // exatamente o mesmo valor SEM type coercion

// // if (age == 18) console.log("You are an adult COM TYPE COERCION") // TEM o mesmo valor COM type coercion


// // const favorite = Number(prompt("Qual seu numero favorite?")); // vai salvar uma string
// // console.log(favorite);
// // console.log(typeof favorite);

// // if (favorite === 23) {
// //     console.log('que legal é esse 23')
// // } else if (favorite === 7) {
// //     console.log('7 é legal tbm')
// // } else {
// //     console.log('escolha um numero bom')
// // }

// // if (favorite !== 23) console.log("pq não 23?")

// const has_driver_license = true;
// const has_good_vision = true;


// console.log(has_driver_license && has_good_vision);// OPERADOR AND
// console.log(has_driver_license || has_good_vision);// OPERADOR OR
// console.log(!has_driver_license);// OPERADOR NOT

// // if (has_driver_license && has_good_vision ) {
// //     console.log("Sara pode dirigir")
// // } else {
// //     console.log("Outro deve dirigir")
// // }

// const is_tired = true;
// console.log(has_driver_license && has_good_vision && is_tired);// OPERADOR OR


// if (has_driver_license && has_good_vision && !is_tired) {
//     console.log("Sara pode dirigir")
// } else {
//     console.log("Outro deve dirigir")
// }

// const day = "friday";

// switch (day) {
//     case "monday":
//         console.log('é segunda');
//         break;
//     case "tuesday":
//         console.log("é terça");
//         break;
//     case "wednesday":
//         console.log("é quarta");
//         break;
//     case "thursday":
//         console.log("é quinta");
//         break;
//     case "friday":
//         console.log("é sexta");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("é fds");
//         break;
//     default:
//         console.log("é porra nenhuma")
// }


const age = 1;

const drink = age >= 18 ? "vinho" : "agua";
console.log(drink);

console.log(`I like to drink ${drink}`);

