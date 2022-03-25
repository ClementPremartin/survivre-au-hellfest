
/* Code js Clément */
/* Add element in checklist Start*/

const addSomething = document.getElementById("form-survie");
const toDoInput = document.getElementById("inputId");
const toDoList = document.querySelector(".stuff-survie");

const checkboxId = document.getElementById("checkboxId") 
const labelId = document.getElementById("labelId")

addSomething.onsubmit = function (event){
  event.preventDefault();

  
  const newToDo = document.createElement("li");
  
  const newCheckbox = document.createElement('input');
  newCheckbox.setAttribute("type", "checkbox");
  newToDo.appendChild(newCheckbox);

  const newLabel = document.createElement('label');
  newLabel.setAttribute("id", "labelId");
  newLabel.innerHTML = toDoInput.value;

  toDoList.appendChild(newLabel);
  toDoList.appendChild(newToDo);
  toDoList.classList.add('stuff');
  toDoInput.value = "";

};

/* Add element in checklist End*/



/* Code js Clément */ 
