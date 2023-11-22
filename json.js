// transitar dados entre front end e back end entao usamos api e retorna como json toda vez que estivermos manadando um json pra um servidor sempre vamos usar o variavel variavelSON = JSON.stringify(+a variavel) pq nao conseguimos mandar um arquivo javascrpit pra um servidor. e para receber um json usamos o variavel+List = JSON.parse(variavel+JSON)
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
// enviando dados para o servidor
const todosJSON = JSON.stringify(todos);
// recebendo dados do servidor
const todos.List = JSON.parse(todosJSON);

