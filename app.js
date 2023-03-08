//Selectors
const todoInput = document.querySelector('.to-do-input');
const todoButton = document.querySelector('.to-do-btn');
const todoList = document.querySelector('.to-do-list');
const filterOption = document.querySelector('.filter')


//Event Lsitener
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
// filterOption.addEventListener('click', filterToDo);

window.onload = function() {
  localStorage.clear();
}

//Functions
function addToDo(event){
  // Prevent form from submitting
  event.preventDefault();
  // To DO div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // create LI
  const newToDo = document.createElement('li');
  newToDo.innerText = todoInput.value;
  newToDo.classList.add('todo-item');
  // add LI to DIV
  todoDiv.appendChild(newToDo);
  //ADD to local localStorage
  saveLocalToDos(todoInput.value);
  //Check todoButton
  const completeButton = document.createElement('button');
  completeButton.innerHTML = "<i class='fas fa-check'></i>";
  completeButton.classList.add("complete-button");
  todoDiv.appendChild(completeButton);

  //Check trash Button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = "<i class='fas fa-trash'></i>";
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);

  //Append to List
  todoList.appendChild(todoDiv);

  //clear value
  todoInput.value = "";
}

function deleteCheck(event){
  const item = event.target;
  const cactus = document.getElementById('cactus');
  const aloe = document.getElementById('aloe');
  const lents = document.getElementById('succulents');
  const tallCactus = document.getElementById('tall-cactus');
  const cactusFlower = document.getElementById('Flower-Copy');
  
  let num = document.querySelectorAll('.completed').length;
  let num2 = document.getElementsByClassName('completed').length;

  //deleteCheck
  if(item.classList[0] === 'trash-button'){
    const todo = item.parentElement;
  //Animation
    todo.classList.add("fall");
    removeLocalToDos(todo);
    todo.addEventListener('transitionend', function(){
      todo.remove();
      num = document.querySelectorAll(".completed").length;
    });
  }
 
  // Checkmark
  if(item.classList[0] === "complete-button"){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
    num = document.querySelectorAll(".completed").length;
  }

  if(num === 0){
    cactus.style.transform = 'translate(11%, 35%) scale(0)';
    aloe.style.transform = 'translate(57%, 57%) scale(0)';
    lents.style.transform = 'translate(20%, 29%) scale(0)';
    tallCactus.style.transform = 'translate(-5%, 25%) scale(0)';
    cactusFlower.style.transform = "scale(0)";

  }
  if(num === 1){
    cactus.style.transform = 'translate(6%, 35%) scale(0.1)';
    cactus.style.opacity = 1;
    aloe.style.transform = 'translate(50%, 55%) scale(0.1)';
    aloe.style.opacity = 1;
    lents.style.transform = 'translate(20%, 32%) scale(0.1)';
    lents.style.opacity = 1;
    tallCactus.style.transform = 'translate(-5%, 25%) scale(0.3)';
    tallCactus.style.opacity = 1;
  }
  if(num === 2){
    cactus.style.transform = 'translate(6%, 35%) scale(0.2)';
    aloe.style.transform = 'translate(55%, 60%) scale(0.3)';
    lents.style.transform = 'translate(20%, 32%) scale(0.2)';
    tallCactus.style.transform = 'translate(3%, 18%) scale(0.6)';

 
  }
  if(num === 3){
    cactus.style.transform = 'translate(6%, 35%) scale(0.3)';
    aloe.style.transform = 'translate(60%, 61%) scale(0.4)';
    lents.style.transform = 'translate(20%, 32%) scale(0.3)';
    tallCactus.style.transform = 'translate(10%, 13%) scale(0.9)';

  }
  if(num === 4){
    cactus.style.transform = 'translate(6%, 35%) scale(0.4)';
    aloe.style.transform = 'translate(60%, 61%) scale(0.5)';
    lents.style.transform = 'translate(20%, 29%) scale(0.4)';
    cactusFlower.style.transform = "translate(39.5%,17%) scale(0.5) ";
    // cactusFlower.style.opacity = 1;
  }
  if(num === 5){
    cactus.style.transform = 'translate(6%, 35%) scale(0.5)';
    aloe.style.transform = 'translate(60%, 61%) scale(0.6)';
    lents.style.transform = 'translate(20%, 29%) scale(0.5)';
    cactusFlower.style.transform = "translate(38%,17%) scale(1)";
  
  }


}


//Save to local storage
function saveLocalToDos(todo){
    let todos;
    if(localStorage.getItem('todos') === null){
      todos = [];
    }else{
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

//get from localStorage
function getToDOs(){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.forEach(function(todo){
    // To DO div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create LI
    const newToDo = document.createElement('li');
    newToDo.innerText = todo;
    newToDo.classList.add('todo-item');
    // add LI to DIV
    todoDiv.appendChild(newToDo);
    //Check todoButton
    const completeButton = document.createElement('button');
    completeButton.innerHTML = "<i class='fas fa-check'></i>";
    completeButton.classList.add("complete-button");
    todoDiv.appendChild(completeButton);

    //Check trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = "<i class='fas fa-trash'></i>";
    trashButton.classList.add("trash-button");
    todoDiv.appendChild(trashButton);

    //Append to List
    todoList.appendChild(todoDiv);
  })
}

//delete from localStorage
function removeLocalToDos(todo){
  let todos;
  if(localStorage.getItem('todos') === null){
    todos = [];
  }else{
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 0);
  localStorage.setItem("todos", JSON.stringify(todos));
}


//SVG functions
document.addEventListener('DOMContentLoaded', getToDOs);
const plants = document.querySelectorAll('svg');

const cactus = document.getElementById('cactus');
const grow = document.getElementById('container');




