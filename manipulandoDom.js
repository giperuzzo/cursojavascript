// manipulando o DOM
// excluindo itens, exemplo abaixo excluindo item 1, 2, 3 manipulando o DOM

const items = document.querySelector(".items");
// items.remove(); REMOVEU TODOS OS ITENS

// ===========Removendo apenas um elemento usando a descendencia do elemento first lest ......
// items.firstElementChild.remove();
// items.lastElementChild.remove();

// childres retorna um html collection porem com caracteristica de lista podendo assim executar modificações em posição especifica, nesse caso nao podemos umas os metodos .map, for it segue exemplo abaixo
items.children[0].textContent = 'ITEM UM';
const button = document.querySelector('.btn')
// 
// mudando o elemento por completo no exemplo abaixo veremos a mudança do elementoi li pra h1

// items.lastElementChild.innerHTML = "<h1>Hello World!!</h1>";

// mudando a cor do botão
button.style.background = "red";
button.style.color = "black";