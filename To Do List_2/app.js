//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)
// Functions
function addTodo (event) {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-div');

    const newTodo = document.createElement('li');
    newTodo.innerText =todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"> </i>';
    completedBtn.classList.add('complete-btn');
    todoDiv.appendChild(completedBtn);

    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"> </i>';
    trashBtn.classList.add('trash-btn');
    todoDiv.appendChild(trashBtn);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    //Clear Todo INPUT VALUE
    todoInput.value = "";

    // trashBtn.addEventListener('click', () => {
    //     todoList.removeChild(li);
    // })
}

function deleteCheck(e) {
    const item = e.target;
    //DELET TODO
    if(item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', ()=>{
            todo.remove();
        })
    }

    //CHECK MARK
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case"all":
            todo.style.display = "flex";
            break;
            case"completed":
            if(todo.classList.contains('completed')){
                todo.style.display = "flex";
            }else{
                todo.style.display = "none";
            }
        }
    })
}