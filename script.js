const plane = document.getElementById('plane');
const carpool = document.getElementById('carpool');
const bus = document.getElementById('bus');
const train = document.getElementById('train');

const select = document.getElementById('orderby');

select.addEventListener('change', (event) => {
    const value = event.target.value;
    if (value == "price") {
        plane.style.order = 4;
        train.style.order = 2;
        carpool.style.order = 1;
        bus.style.order = 3;
    } else if (value == "quickness") {
        plane.style.order = 1;
        train.style.order = 2;
        carpool.style.order = 3;
        bus.style.order = 4;
    } else {
        plane.style.order = 2;
        train.style.order = 1;
        carpool.style.order = 4;
        bus.style.order = 3;
    }
});


/* Code js Clément */

const addSomething = document.querySelector("#add-element");
const toDoInput = document.querySelector("#element");
const toDoList = document.querySelector("#submit");

addSomething.onsubmit = function (event) { event.preventDefault();

const newToDo = document.createElement("li");
newToDo.innerHTML = toDoInput.value;
toDoList.appendChild("newToDo");
toDoInput.value = "";
};

/* Code js Clément */ 
