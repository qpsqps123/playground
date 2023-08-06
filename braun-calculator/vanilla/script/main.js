import { initNumber } from "./init/initNumber.js";
import {
  add,
  subtract,
  multiply,
  divide,
  percentage,
  radical,
  toggleSign,
  calculate,
} from "./operators/index.js";
import { clearEntry, clear } from "./reset/index.js";

/* --------------------------------- 이벤트 타겟을 변수에 할당--------------------------------- */
const targetNumber = document.querySelectorAll(".number");
const targetOperator = document.querySelectorAll(".operator");
export const targetDisplayValue = document.querySelector(".displayValue");

/* -------------------------------- 이벤트 거는 구간 ------------------------------- */
for (let i = 0; i < targetNumber.length; i++) {
  targetNumber[i].addEventListener("click", initNumber);
}

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyUp", handleKeyUp);

for (let i = 0; i < targetOperator.length; i++) {
  switch (targetOperator[i].textContent) {
    case "+":
      targetOperator[i].addEventListener("click", add);
      break;

    case "-":
      targetOperator[i].addEventListener("click", subtract);
      break;

    case "×":
      targetOperator[i].addEventListener("click", multiply);
      break;

    case "÷":
      targetOperator[i].addEventListener("click", divide);
      break;

    case "%":
      targetOperator[i].addEventListener("click", percentage);
      break;

    case "√":
      targetOperator[i].addEventListener("click", radical);
      break;

    case "+/-":
      targetOperator[i].addEventListener("click", toggleSign);
      break;

    case "=":
      targetOperator[i].addEventListener("click", calculate);
      break;

    case "C":
      targetOperator[i].addEventListener("click", clear);
      break;

    default:
      break;
  }
}

function handleKeyDown(event) {
  switch (event.key) {
    case "7":
      targetNumber[0].click();
      break;

    case "8":
      targetNumber[1].click();
      break;

    case "9":
      targetNumber[2].click();
      break;

    case "4":
      targetNumber[3].click();
      break;

    case "5":
      targetNumber[4].click();
      break;

    case "6":
      targetNumber[5].click();
      break;

    case "1":
      targetNumber[6].click();
      break;

    case "2":
      targetNumber[7].click();
      break;

    case "3":
      targetNumber[8].click();
      break;

    case "0":
      targetNumber[9].click();
      break;

    case ".":
      targetNumber[10].click();
      break;

    case "Escape":
      targetOperator[0].click();
      break;

    case "%":
      targetOperator[1].click();
      break;

    case "@":
      targetOperator[2].click();
      break;

    case "F9":
      targetOperator[3].click();
      break;

    case "/":
      targetOperator[4].click();
      break;

    case "*":
      targetOperator[5].click();
      break;

    case "-":
      targetOperator[6].click();
      break;

    case "=":
    case "Enter":
      targetOperator[7].click();
      break;

    case "+":
      targetOperator[8].click();
      break;

    case "Backspace":
      clearEntry();
      break;

    default:
      break;
  }
}

function handleKeyUp() {}

// function formatValue(value, decimalPlaces) {

//   const parsedValue = parseFloat(value);
//   const exponentialForm = value.toExponential();
//   const [coefficient, exponent] = exponentialForm.split("e");
//   const roundedCoefficient = parseFloat(coefficient).toFixed(decimalPlaces);
//   // console.log(typeof exponentialForm);
//   // console.log(exponentialForm.includes("e"));
//   if (value.toString().length > 9 && gd.flag.exponentialForm === false) {
//     gd.flag.exponentialForm = true;
//     return roundedCoefficient + "e" + exponent;
//   } else if (gd.flag.exponentialForm) {
//     gd.flag.exponentialForm = false;
//     return parsedValue;
//   } /* else if (gd.flag.exponentialForm) {
//     gd.flag.exponentialForm = false;
//   }  */ else {
//     return value;
//   }
// }
