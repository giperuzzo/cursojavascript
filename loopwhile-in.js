// L// loop while = enquanto é o tipo de laço que executa enquanto uma condição passada for verdadeira
let index = 0;

while(index < 10){
    console.log("index é menor do que 10!")
    // o que foi feito a seguir a cada execução foi acrescido 1 conforme maneiras abaixo
    // index = index + 1; pode ser dessa forma
    // index += 1 pode ser feito dessa forma tb
    // melhor forma feita abaixo
    index++;
}

// usamos para objetos o for in mais não é um loop muito performatico

const person = {
    name: "Jane",
    age: 21,
};

for (property in person){
    console.log(person[property]);
}