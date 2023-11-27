// POO (Programação Orientada Objeto)
// as classes do javascript são praticamente impressoras do objeto "construtor"
// metodo estático é aquele que nao precisa ser instanciado, ele nao usa nenhum dado da pessoa enquanto a classe

// class Person {
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     // criando método dentro de uma classe
//     getFullName() {
//         console.log(`${this.firstName} ${this.lastName}`);
//     }
//     speak() {
//     console.log("Hello World!!");
//     }
// }

// const person = new Person("Gi", "Peruzzo", 53);
// console.log(person);
// person.speak();

// "HERANÇAS" o nome mesmo diz, herdar as caracteristicas da classe 
// segue exemplo

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} made some noise!`);
    }
}
// a seguir um exemplo de herança (animal pode ser qq um, estao conformwe abaixo dog "extends"a classe animal e automaticamente herda as caractersticas de animal)
class Dog extends Animal {
    constructor(name){
        super(name);
    }
    speak() {
        console.log(`${this.name} barked!!`)
    }
}
const animal = new Animal("Simba");
const dog = new Dog("Bob");

animal.speak();
dog.speak();