
const array = [];
const input = document.querySelector("input");
const lista = document.querySelector("ul");
const btn   = document.querySelector("button");

btn.addEventListener("click", () => add())

function add(){
    if (input.value.length){
        array.push(input.value);
        renderList();
    }else{
        alert("Input está vazio FDM");
    }
    input.value = "";
    console.log(array)
}

function renderList(){
    lista.innerHTML = "";
    for(task of array){
        createTask(task);
    }
}
function createTask(task){
    const taskElement = document.createElement("li");
    const taskCheck   = document.createElement("input");
    taskCheck.setAttribute("type", "checkbox");
    const taskParagraph = document.createElement("p");
    const text = document.createTextNode(task);
    taskElement.appendChild(taskCheck);
    taskParagraph.appendChild(text)
    taskElement.appendChild(taskParagraph);
    lista.appendChild(taskElement);
}
