// validando o formulário, confirmando se os campos foram preenchidos, se foram preenchidos com o formato certo. entre outras validações
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitButton = document.querySelector("#submit-button");
const errorMenssage = document.querySelector('.msg');
const items = document.querySelector(".items");

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    // verificando se formulário foi preenchido e se nao exibindo mensagem de erro
    if(nameValue ==="" || emailValue === "") {
        errorMenssage.textContent = "Please ill out the fields!";
        errorMenssage.classList = "error";
        // tirando a mensagem após alguns minutos de executado
        setTimeout(() => {
            errorMenssage.textContent = "";
            errorMenssage.classList = "";
    }, 3000);
        return;
    }
// adicionando  items 
// criando li cria uma variavel usando um metodo create.Element

const li = document.createElement("li");
li.classList = "item";
li.innerHTML = `Nome: ${nameValue}<br />Email: ${emailValue}`;
items.appendChild(li);

// limpar campos após subimit caso eseja tuo certo

nameInput.value = "";
emailInput.value = "";



});