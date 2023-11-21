// listas pode ser qq tipo de informacao string numero false inclusive variado
// push adiciona elemento no final da lista e unshift no inicio da lista - shift remove o primeiro elemento no incio da lista
const names = ["Gislene", "Camila", "Monique", "Ana", "Luiza"] ;

const joao = names[1];

names.push("Pedro");
names.unshift("Fernanda");
// metodo pop remove o ultimo elemento do array usando a variavel.pop
names.pop();
names.pop();
names.pop();

// mudar o valor do elemento names[posiçao do array(names"variavel)]
names[3] = "Monique";

// verificar o indice de X elemento dentro do array metoo indexOf

console.log(names.indexOf("Camila"));



// mdn array tb tem todos os metodos para usar dar uma olhada nesse conteudo tb
// mais um metodo o sort ( le organiza em ordem alfabetica uma lista)

const sorteDNames = names.sort();
console.log(sorteDNames);

// metodos filter  map e reduce são super avançados veremos na proxima aula pois usaremos muito
// metodo lenght ver qtos itens a lista possui

console.log(names.length);

// isArray verificamos se determinada variavel é uma lista ele retorna treu ou false 

const namesIsArray = Array.isArray(names);
console.log(names);