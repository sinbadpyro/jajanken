let myChoice = document.querySelector("#yourimage");
const image = ["dragon.jpg", "night.jpg", "targ.png"];
let computerimage = document.querySelector("#computerimage");
let yourScore = document.querySelector("#yourscore");
let counter = 0;
//to get random image from the array
function getRandomImage() {
  let randomIndex = Math.floor(Math.random() * image.length);
  computerimage.src = image[randomIndex];
}
///////

function ShowYourImageTarg() {
  myChoice.src = "targ.png";
 
  if (myChoice.src == computerimage.src) {
    
    yourScore.textContent = counter++ ;
  }
  getRandomImage();
}
function ShowYourImageDragon() {
  myChoice.src = "dragon.jpg";
  if (myChoice.src == computerimage.src) {
    
    yourScore.textContent = counter++ ;
  }
  getRandomImage();
}
function ShowYourImageNight() {
  myChoice.src = "night.jpg";
  if (myChoice.src == computerimage.src) {
    
    yourScore.textContent = counter++ ;
  }
  getRandomImage();
}
