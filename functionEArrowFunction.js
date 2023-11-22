// funções e arrow function função vai executar uma ação determinada por nós/usuario
// exemplo de função 
function sum(a, b = 10) {
    return a + b;
}

// // mesma função com decaração diferente
// exemplo de arrow function

const sumArrow = (a, b = 10) => {
    return a + b;

    const sumArrow = (a, b = 10) => a + b;
    // a demonstração acima tb pode ser escrita sem as chaves :   cons sumArrow = (a, b = 10) => a + b;
}
const sumValue = sumArrow(2);

console.log(sumValue);