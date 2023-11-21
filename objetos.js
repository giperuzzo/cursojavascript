// criação de objetos é extramamente important uma das leituras de dados mais usada em javaScript objeto guarda valores dentro de variais
// const  person = {
//     firstName: "Felipe",
//     lastName: "Rocha",
//     age: "21",
//     hobbies: ['Assistir F1', 'Jogar Futebol', 'ler'],
//     // podemos colocar um objeto dentro de outro objeto exemplo, criamos o objeto dog e dentro dele criamos name,age
//     dog : {
//         name: "simba",
//         age: 4,
//     },
// };
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;
// const hobbies = person.hobbies;

// a mesma coisa acima pode ser feito como abaixo usando o destructuring
// const {firstName: primeiroNome, lastName, age, hobbies, dog:{name: dogName},} = person

// const read = person.hobbies[2]

// console.log(primeiroNome);
// console.log(lastName);
// console.log(age);
// console.log(hobbies);

// // console.log(read);
// console.log(person.dog.age);
// console.log(dogName);
// // 
// o que mais vamos ver é uma lista contendo varios objetos
const todos = [
    {
    id: 1,
    description: "Estudar programação",
    isCompleted: false,
},
{
    id: 2,
    description: "Ler",
    isCompleted: true,
},
{
    id: 3,
    description: "Treinar",
    isCompleted: true,
},
];

const descriptionOfLastTodo = todos[2].description;
console.log(descriptionOfLastTodo);
