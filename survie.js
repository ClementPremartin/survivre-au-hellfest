
/* Code js Clément */

const addSomething = document.getElementById("form-survie");
const toDoInput = document.getElementById("inputId");
const toDoList = document.querySelector(".stuff-survie");

const checkboxId = document.getElementById("checkboxId") 
const labelId = document.getElementById("labelId")

addSomething.onsubmit = function (event){
  event.preventDefault();

  
  const newToDo = document.createElement("li");
  
  
  newToDo.innerHTML = toDoInput.value;
  newToDo.classList.add("stuff");
  
  const newCheckbox = document.createElement('input');
  newCheckbox.setAttribute("type", "checkbox");
  newToDo.appendChild(newCheckbox);

  toDoList.appendChild(newToDo);

  toDoInput.value = "";

};



/* Code js Clément */ 
