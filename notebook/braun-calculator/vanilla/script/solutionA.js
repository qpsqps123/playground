/* ----------------------------------- 초깃값 ---------------------------------- */
let operand;
let recalculateOperand;
let accumulatedValue;
let operator;
let operatingFlag = {
  isProgress: false,
  isFirstOperation: false,
  isZeroDenominatorError: false,
  isCalculated: false,
};
let operatorFlag = {
  isAdd: false,
  isSubtract: false,
  isMultiply: false,
  isDivide: false,
};

/* --------------------------------- 이벤트 타겟을 변수에 할당--------------------------------- */
const targetNumber = document.querySelectorAll(".number");
const targetOperator = document.querySelectorAll(".operator");

/* -------------------------------- 이벤트 거는 구간 ------------------------------- */
for (let i = 0; i < targetNumber.length; i++) {
  targetNumber[i].addEventListener("click", assignNumber);
}

for (let i = 0; i < targetOperator.length; i++) {
  switch (targetOperator[i].textContent) {
    case "+":
      targetOperator[i].addEventListener("click", add);
      break;

    case "-":
      targetOperator[i].addEventListener("click", subtract);
      break;

    case "*":
      targetOperator[i].addEventListener("click", multiply);
      break;

    case "/":
      targetOperator[i].addEventListener("click", divide);
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

/* ----------------------------- 숫자 버튼을 눌렀을 때 구동 ---------------------------- */
function assignNumber(e) {
  document.querySelector(".display").textContent === "0" ||
  document.querySelector(".display").textContent === "Denominator can't be 0"
    ? (document.querySelector(".display").textContent = "")
    : operatingFlag.isCalculated === true
    ? (clear(), (operatingFlag.isProgress = true))
    : "";

  if (operatingFlag.isProgress) {
    operatingFlag.isProgress = false;
    document.querySelector(".display").textContent = "";
    document.querySelector(".display").textContent += e.target.textContent;
  } else {
    document.querySelector(".display").textContent += e.target.textContent;
  }
}

/* ---------------------------- 연산자 함수 ---------------------------- */
// function calculate() {
//   operatingFlag.isCalculated = true;
//   operand = +document.querySelector(".display").textContent;
//   operator();
//   operatingFlag.isZeroDenominatorError
//     /? (operatingFlag.isZeroDenominatorError = false)
//     : (document.querySelector(".display").textContent = accumulatedValue);
// }
function calculate() {
  operatingFlag.isCalculated = true;
  operand = +document.querySelector(".display").textContent;
  operator();
  operatingFlag.isZeroDenominatorError
    ? (operatingFlag.isZeroDenominatorError = false)
    : (document.querySelector(".display").textContent = accumulatedValue);

  operatingFlag.isProgress = true;
  operatingFlag.isFirstOperation = false;
}

function add() {
  operatingFlag.isProgress = true;
  operatorFlag = {
    isAdd: true,
    isSubtract: false,
    isMultiply: false,
    isDivide: false,
  };

  // 처음 연산의 경우 accumulatedValue가 없기 때문에 조건을 만들었다.
  if (operatingFlag.isFirstOperation === false) {
    operatingFlag.isFirstOperation = true;
    accumulatedValue = +document.querySelector(".display").textContent;
    operator = () => {
      accumulatedValue += operand;
    };
  } else {
    // 처음 연산이 아닌 경우다.
    calculate();
    // operand = +document.querySelector(".display").textContent;
    // operator();
    // operatingFlag.isZeroDenominatorError
    // /? (operatingFlag.isZeroDenominatorError = false)
    //   : ((document.querySelector(".display").textContent = accumulatedValue),
    //     (operator = () => {
    //       accumulatedValue += operand;
    //     }));
  }
}

function subtract() {
  operatingFlag.isProgress = true;
  if (operatingFlag.isFirstOperation === false) {
    operatingFlag.isFirstOperation = true;
    accumulatedValue = +document.querySelector(".display").textContent;
    operator = () => {
      accumulatedValue -= operand;
    };
  } else {
    operand = +document.querySelector(".display").textContent;
    operator();
    operatingFlag.isZeroDenominatorError
      ? (operatingFlag.isZeroDenominatorError = false)
      : ((document.querySelector(".display").textContent = accumulatedValue),
        (operator = () => {
          accumulatedValue -= operand;
        }));
  }
}

function multiply() {
  operatingFlag.isProgress = true;
  if (operatingFlag.isFirstOperation === false) {
    operatingFlag.isFirstOperation = true;
    accumulatedValue = +document.querySelector(".display").textContent;
    operator = () => {
      accumulatedValue *= operand;
    };
  } else {
    operand = +document.querySelector(".display").textContent;
    operator();
    operatingFlag.isZeroDenominatorError
      ? (operatingFlag.isZeroDenominatorError = false)
      : ((document.querySelector(".display").textContent = accumulatedValue),
        (operator = () => {
          accumulatedValue *= operand;
        }));
  }
}

function divide() {
  operatingFlag.isProgress = true;
  if (operatingFlag.isFirstOperation === false) {
    operatingFlag.isFirstOperation = true;
    accumulatedValue = +document.querySelector(".display").textContent;

    operator = () => {
      if (operand === 0) {
        clear();
        document.querySelector(".display").textContent =
          "Denominator can't be 0";
        // operatingFlag.isFirstOperation = true;
        // operatingFlag.isCalculated = true;
        operatingFlag.isZeroDenominatorError = true;
      } else {
        accumulatedValue /= operand;
      }
    };
  } else {
    operand = +document.querySelector(".display").textContent;
    operator();
    operatingFlag.isZeroDenominatorError
      ? (operatingFlag.isZeroDenominatorError = false)
      : ((document.querySelector(".display").textContent = accumulatedValue),
        (operator = () => {
          if (operand === 0) {
            clear();
            document.querySelector(".display").textContent =
              "Denominator can't be 0";
            // operatingFlag.isFirstOperation = true;
            // operatingFlag.isCalculated = true;
            operatingFlag.isZeroDenominatorError = true;
          } else {
            accumulatedValue /= operand;
          }
        }));
  }
}

function clear() {
  operand = undefined;
  accumulatedValue = undefined;
  operator = undefined;
  operatingFlag = {
    isFirstOperation: false,
    isProgress: false,
    isZeroDenominatorError: false,
    isCalculated: false,
  };
  document.querySelector(".display").textContent = "0";
}
