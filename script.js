var slider = document.querySelector(".theme");
var body = document.querySelector(".body");
slider.addEventListener(
  "input",
  function () {
    if (slider.value == 1) {
      body.classList.remove("theme2");
      body.classList.remove("theme3");
    } else if (slider.value == 2) {
      body.classList.add("theme2");
      body.classList.remove("theme3");
    } else {
      body.classList.add("theme3");
      body.classList.remove("theme2");
    }
  },
  false
);
