function toggleText() {
  let elem = document.querySelector(".toggle-text-button");
  var el = document.getElementById("text");
  
  function show() {
    
    if (el.hidden == true) {
      return el.hidden = false;
    } else {
      return el.hidden = true;
    }
  };
  elem.addEventListener("click", show);
}



