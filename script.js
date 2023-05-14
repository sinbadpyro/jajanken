let myChoice = document.querySelector("#yourimage");
const image = ["dragon.jpg", "night.jpg", "targ.png"];
let computerimage = document.querySelector("#computerimage");
let yourScore = document.querySelector("#yourscore");

let computerscore = document.querySelector("#computerscore");
let counter = 0;
let match = document.querySelector("#match");

//to get random image from the array
function getRandomImage() {
  let randomIndex = Math.floor(Math.random() * image.length);
  computerimage.src = image[randomIndex];
}
///////

function ShowYourImageTarg() {
  myChoice.src = "targ.png";
  if (myChoice.src == computerimage.src) {
    match.style.display = "block";
    //yourScore.textContent = counter++;
  }
  getRandomImage();
}

function ShowYourImageNight() {
  myChoice.src = "night.jpg";
  getRandomImage();
  if (myChoice.src == computerimage.src) {
    //yourScore.textContent = counter++;
    match.innerHTML = "DRAW!!";
    match.style.display = "block";
  } else {
    if (computerimage.src == image[0]) {
      match.style.display = "none";
      computerscore.textContent = counter++;
    }
  }
}

function ShowYourImageDragon() {
  myChoice.src = "dragon.jpg";
  if (myChoice.src == computerimage.src) {
    // yourScore.textContent = counter++;
    match.style.display = "block";
  }
  getRandomImage();
}
