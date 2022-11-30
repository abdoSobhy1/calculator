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

let outPut = document.getElementById("screen");
let buttons = document.querySelectorAll(".buttons > div");
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let operators = ["+", "-", "×", "/"];
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (numbers.includes(Number(button.innerHTML))) {
      inputIncrease(button);
    } else if (operators.includes(button.innerHTML)) {
      operation(button);
    } else if (button.innerHTML == "=") {
      calculate();
    } else if (button.innerHTML == "del") {
      del(button.innerHTML);
    } else if (button.innerHTML == "Reset") {
      del(button.innerHTML);
    } else if (button.innerHTML == ".") {
      decimal();
    } else {
      specialfn(button.innerHTML);
    }
  });
});
function inputIncrease(button) {
  if (outPut.value.includes("NAN") || outPut.value.includes("by")) {
    outPut.value = "";
  }
  outPut.value += button.innerHTML;
}
let theOperation = "";
let firstNumber = "";
let secondNumber = "";
function operation(operator) {
  if (spcfn) {
    return;
  }
  if (operator.innerHTML == "+") {
    theOperation = "sum";
    firstNumber = Number(outPut.value);
    outPut.value = "";
  } else if (operator.innerHTML == "-") {
    if (outPut.value == "") {
      outPut.value += "-";
    } else if (outPut.value == "-") {
      return;
    } else {
      firstNumber = Number(outPut.value);
      theOperation = "sub";
      outPut.value = "";
    }
  } else if (operator.innerHTML == "×") {
    theOperation = "multiply";
    firstNumber = Number(outPut.value);
    outPut.value = "";
  } else {
    theOperation = "division";
    firstNumber = Number(outPut.value);
    outPut.value = "";
  }
}
let spcfn = false;
function specialfn(special) {
  spcfn = true;
  if (outPut.value == "") {
    if (special == "cos(x)") {
      outPut.value = "cos(";
      theOperation = "cos";
    } else if (special == "sin(x)") {
      outPut.value = "sin(";
      theOperation = "sin";
    } else if (special == "√") {
      theOperation = "sqrt";
      outPut.value = "√(";
    }
  } else {
    if (special == "x²") {
      if (outPut.value.includes("²")) {
        return;
      } else {
        theOperation = "sqr";
        outPut.value += "²";
      }
    }
  }
}
let answer = "";
function calculate() {
  if (
    firstNumber == "" &&
    !["cos", "sin", "sqrt", "sqr"].includes(theOperation)
  ) {
    return;
  }
  if (theOperation == "sum") {
    secondNumber = Number(outPut.value);
    answer = firstNumber + secondNumber;
  } else if (theOperation == "sub") {
    secondNumber = Number(outPut.value);
    answer = firstNumber - secondNumber;
  } else if (theOperation == "multiply") {
    secondNumber = Number(outPut.value);
    answer = firstNumber * secondNumber;
  } else if (theOperation == "division") {
    secondNumber = Number(outPut.value);
    if (secondNumber == 0) {
      answer = "Can't devide by zero";
    } else {
      answer = firstNumber / secondNumber;
    }
  } else if (theOperation == "cos") {
    firstNumber = outPut.value.replace("cos(", "");
    answer = Math.cos(firstNumber * (Math.PI / 180)).toFixed(2);
  } else if (theOperation == "sin") {
    firstNumber = outPut.value.replace("sin(", "");
    answer = Math.sin(firstNumber * (Math.PI / 180)).toFixed(2);
  } else if (theOperation == "sqrt") {
    firstNumber = outPut.value.replace("√(", "");
    answer = Math.sqrt(firstNumber);
  } else if (theOperation == "sqr") {
    firstNumber = outPut.value.replace("²", "");
    answer = firstNumber ** 2;
  }
  outPut.value = answer;
  firstNumber = "";
  secondNumber = "";
  theOperation = "";
  spcfn = false;
}

function del(type) {
  if (type == "del") {
    let x = outPut.value;
    outPut.value = x.slice(0, -1);
  } else {
    outPut.value = "";
    firstNumber = "";
    secondNumber = "";
    theOperation = "";
  }
}
function decimal() {
  let theNumber = outPut.value;
  if (theNumber.includes(".")) {
    console.log("انت هتهههه معايا؟");
  } else outPut.value += ".";
}
