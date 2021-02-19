function initCarousel() {
  
  let width = 988;
  let count = 1;
  
  let slideList = document.querySelector(".carousel_inner");
  let slide = document.getElementsByClassName(".carousel_slide");
  slide.length 
  
  let position = 0;
  let rightClickButton = document.querySelector('.carousel__arrow_right');
  
  let leftClickButton = document.querySelector(".carousel__arrow_left");
  
  rightClickButton.onclick = function () {
    position += width * count;
    let slides = document.querySelector(".carousel__inner");
    slides.style.transform = "translateX(-" + position + "px)"; 
    
  };
  
  
  leftClickButton.onclick = function () {
    position -= width * count;
    let slides = document.querySelector(".carousel__inner");
    slides.style.transform = "translateX(-" + position + "px)"; 
    
  }
  
}
/*  
rightClickButton.classList.toggle("disabled", slideIndex === 0);
leftClickButton.classList.toggle("disabled", slideIndex === --slide.length);

for (let i = 0; i <= slide.length; i++) {
  if (i = 3) {
    rightClickButton.style.display = "none"
  } else {
    rightClickButton.style.display = " "
  }
  */