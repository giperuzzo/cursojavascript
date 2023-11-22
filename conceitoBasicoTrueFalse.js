// Conceito de True e False   = verdadeiro e falso =  boleanos
/* Consigo verificar se uma variavel é verdadeira ou falsa com !! e uma string vazia sempre vai ser false  0 tb é sempre false numa declaração de variavel   null tb é false  e undefined tb é false conforme exemplos abaixo e o if não vai ser executado  
exemplos:
const x = '';
para verificar criar um console.log com o nome da variavel e !! 
console.log(x!!) vai retornar false
assim tb como os exemplos de 0 null e undefined
lista [] vazia é sempre true e para checar a lista usa o nome da variavel +.length > 0 e vai retornar true e object {} vazio tb é true
!! confirma se é true or false e  ! reverte qq boleano
*/

const x = '';
// false
console.log(!!x);
// const y = 0;
// // false

// const a = null;
// const b = undefined;
// // false

// const list = [];
// // true
// const object = {}
// //true

if(!x) {
    console.log(x)
//     // vai inverter a condição de true para false e de false para true
}