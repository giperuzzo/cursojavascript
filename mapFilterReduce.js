// metodos que posemos e usamos muito em lista 
// metodp "map" executa uma função em cada item da lista  e retorna uma nova lista com essa função executada em todos os itens
const numbers = [1, 2, 3, 4, 5];
const numbersMultipliedByTwo = numbers.map(function (number) {
    return number * 2;
});
// console.log(numbersMultipliedByTwo);

// metodo "filter" so numeros filtrar uma lista

const ages = [8, 13, 27, 30, 22, 40];

// a logica junto com o metodo pra descobrir se o n umero é par é dividir por dois e comparar se o resultado da 0(zero)
// const evenAges = ages.filter(function (age) {
//     return age % 2 === 0;
// });
// 

// método "reduce " qdo queremos reduzir todos os valores de uma lista em um unico valor, ou seja a soma

const sumOfAges = ages.reduce(function(age, accumulator) {
    return accumulator + age
}, 0);
console.log(sumOfAges);