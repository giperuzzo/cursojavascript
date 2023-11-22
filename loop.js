// Loops = for tema muito im portante, vamos usar um loop qdo quisermos exercutar um codigo varias vezes exemplo no caso abaixo o for esta sendo executado enquanto o index nao for <20 a cada execução ele acrescenta um
//  na formula o index é represenrtado por "i"
for(let index = 0; index < 20; index++) {
    console.log(index);
 }
// trabalhando o loop = for com listas a propriedade length é usada em diferentes objetos e retorna a qtde de caracteres de um string ou o taman ho de um array
const cars = ["Ferrari", "Tesla", "Mercedes"];
for(let i = 0; i< cars.length; i++) {
    console.log(cars[i])
}
// mais podemos usar outros metodos mais legiveis pra trabalhar com lista o for of
for(let car of cars) {
    console.log(car)
}
// podemos tb usar o for each é um método que permite executar uma função para cada item do array.e # do for of podemos logar tb a posição do objeto no array indicando o i u seja o index
cars.forEach(function (car, i) {
    console.log(i);
    console.log(car);
});