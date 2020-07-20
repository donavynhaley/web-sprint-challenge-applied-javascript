/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carousel = document.querySelector(".carousel-container");
carousel.appendChild(createCarousel());
function createCarousel(){
  // Creating elements
  const ce = document.createElement.bind(document);
  const carousel = ce('div');
  const leftButton = ce('div');
  const imgMount = ce('img');
  const imgComp = ce('img');
  const imgTrees = ce('img');
  const imgTurn = ce('img');
  const rightButton = ce('div');

  // Adding Classes
  carousel.classList.add("carousel");
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  // Adding content
  imgMount.src = "./assets/carousel/mountains.jpeg";
  imgComp.src = "./assets/carousel/computer.jpeg";
  imgTrees.src = "./assets/carousel/trees.jpeg"
  imgTurn.src = "./assets/carousel/turntable.jpeg"

  //appending elements
  carousel.appendChild(leftButton);
  carousel.appendChild(imgMount);
  carousel.appendChild(imgComp);
  carousel.appendChild(imgTrees);
  carousel.appendChild(imgTurn);
  carousel.appendChild(rightButton);

  return carousel;

}

