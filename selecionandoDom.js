// selecionando elementos do "DOM" (Document Object Model) ele permite que os desenvolvedores web interajam com elementos da página usando javaScript
// para selecionar um elemnto usar o getElementByID (localizando e modificando um elemento pelo ID)
// const addUserText = document.getElementById("add-user");
// addUserText.innerText = "Adicionar Usuário";
// console.log(addUserText);
// ----------------------------------------------------
// selecionar apenas um elemento tambem podemos usar o querySelector que é mais recente no caso abaixo usamos o "#" para ionformar o ID
// lembrando que op querySlector seleciona so o primeiro elemento da classe
//   const addUserText = document.querySelector("#add-user"); no caso de estar dentro de um container usamos ".container  #"
// selecionar muitos elementos usando o querySelectorAll( ele ttransforma a lista array e fazemos a modificação usando a posição do elemento dentro do array )
// segue exemplo
// const allItems = document.querySelectorAll(".item");
// console.log(allItems[0]);

// metodo para selecionar varios elementos, porem nao tem como manipular um elemento pq ele nao retorna uma lista, ele retornsa um html collection, ou seja uma coleção daquele elemento não é recomendado metodo so para conhecimento mesmo, no caso seria pra modificar todos os elementos e não só um especifiico
// const allItems = getElementsByClassName("item")
// console.log(allItems): 
// metodo não recomendado mais so pra conhecimento
// 

// **************então o melhor metodo para manipular é o "querySelectorAll"*****************