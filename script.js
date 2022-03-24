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

function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
    /*create magnifier glass:*/
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /*set the position of the magnifier glass:*/
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }


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
