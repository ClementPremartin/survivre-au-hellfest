
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
  newToDo.classList.add('stuff');
  
  const newCheckbox = document.createElement('input');
  newCheckbox.setAttribute("type", "checkbox");
  newCheckbox.setAttribute("id", "checkboxId");
  newToDo.appendChild(newCheckbox);

  const newLabel = document.createElement('label');
  newLabel.setAttribute("id", "labelId");
  newLabel.innerHTML = toDoInput.value;
  newLabel.style.padding = "13px";
  newToDo.appendChild(newLabel);
  
  toDoList.appendChild(newToDo);
  
  toDoInput.value = "";

};

/* Add element in checklist End*/



/* Code js Clément */ 
