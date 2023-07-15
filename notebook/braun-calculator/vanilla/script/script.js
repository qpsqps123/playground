/* ----------------------------------- 초깃값 ---------------------------------- */
let operandA = [];
let operandB = [];
let resultValue = [];
let operator = [];
let i = 0;
let flag = {
  invalidInputError: false,
  // 나누기의 분모로 0을 입력하고 연산했을 때, NaN이 출력되는 에러 처리를 위해 사용한다.
  denominatorError: false,
  // operandA & operandB에 할당하는 중인지 판단한다.
  operandA: false,
  operandB: false,
  addition: false,
  subtraction: false,
  multiplication: false,
  division: false,
  calculated: false,
};

/* --------------------------------- 이벤트 타겟을 변수에 할당--------------------------------- */
const targetNumber = document.querySelectorAll(".number");
const targetOperator = document.querySelectorAll(".operator");
const targetDisplayValue = document.querySelector(".displayValue");

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

/* ----------------------------- 숫자 버튼을 눌렀을 때 구동 ---------------------------- */
function assignNumber(e) {
  // operandA부터 입력하는 상황이든(계산을 처음 시작하는)
  // operandB부터 입력하는 상황이든(연속 사칙연산 자동 연산하는)
  // calculate 함수를 연속으로 입력하는 상황 외에
  // calculate 함수가 호출되기 이전에는 반드시 assignNumber 함수가 호출되어야 하기 때문에
  // flag.calculated = false를 이곳에 넣어준다.
  targetDisplayValue.style.fontSize = "30px";
  flag.calculated = false;

  if (e.target.textContent === ".") {
    targetDisplayValue.textContent = "0.";
  } else if (
    // 맨 처음 숫자를 할당할 때의 조건.
    // 초기 targetDisplayValue.textContent 값 0은 문자열이다.
    targetDisplayValue.textContent === "0" ||
    // 나누기의 분모로 0을 입력하고 연산했을 때, 생기는 에러를 처리하고 뜨게 한 표시 문구.
    // 처음 숫자를 할당하는 상태로 돌아가기 위한 조건이다(순번이 clear되는 것은 아니다).
    targetDisplayValue.textContent === "Denominator can't be 0" ||
    targetDisplayValue.textContent === "Invalid Input"
  ) {
    targetDisplayValue.textContent = e.target.textContent;
  } else if (!operator[i] && !flag.operandA) {
    // operator ==== false 조건을 걸지 않으면, 연속 사칙연산 자동 연산 시 opeandB 입력할 때
    // flag.operandA = false가 되어 있기 때문에 여기서 계속 걸린다.
    // 그리고 맥락상 operandA가 결정되어 있기 때문에
    // calculate 안에서 flag.operandA = false가 되기보다는
    // 아래 if문의 else에서 flag.operandA = false가 되도록 했다.
    targetDisplayValue.textContent = e.target.textContent;
  } else if (operator[i] && !flag.operandB) {
    targetDisplayValue.textContent = e.target.textContent;
  } else {
    targetDisplayValue.textContent += e.target.textContent;
  }

  let currentDisplayValue = +targetDisplayValue.textContent;

  if (!operator[i]) {
    // flag.operandA 값이 true가 되기 전 처음 한 번은 false다.
    // 그러므로 위의 else if 조건에 최초 한 번이 걸린다.
    flag.operandA = true;
    operandA[i] = currentDisplayValue;
  } else {
    // flag.operandA = false;
    flag.operandB = true;
    operandB[i] = currentDisplayValue;
  }
}

/* ---------------------------- 연산자 함수 ---------------------------- */
function calculate() {
  if (flag.calculated) {
    operandB[i] = operandB[i - 1];
    operator[i] = operator[i - 1];
    operator[i]();
  } else {
    operator[i]();
  }

  if (flag.denominatorError) {
    targetDisplayValue.textContent = "Denominator can't be 0";
    targetDisplayValue.style.fontSize = "16px";
    flag.denominatorError = false;
  } else if (flag.invalidInputError) {
    targetDisplayValue.textContent = "Invalid Input";
    flag.invalidInputError = false;
  } else {
    targetDisplayValue.textContent = formatNumber(resultValue[i], 10);
    operandA[i + 1] = resultValue[i];
  }

  flag.operandA = false;
  flag.operandB = false;
  flag.calculated = true;
  i++;
}

function add() {
  flag.addition = true;
  // 현재 순번 i에서 opearndA와 operandB가 모두 할당 되어있을 때,
  // operator 핸들러 함수가 호출 되면,
  // calculate 함수가 실행된다.
  if (operandA[i] && operandB[i]) {
    calculate();
    let addition = () => {
      resultValue[i] = operandA[i] + operandB[i];
    };
    operator[i] = addition;
  } else {
    let addition = () => {
      resultValue[i] = operandA[i] + operandB[i];
    };
    operator[i] = addition;
  }
}

function subtract() {
  flag.subtraction = true;
  if (operandA[i] && operandB[i]) {
    calculate();
    let subtraction = () => {
      resultValue[i] = operandA[i] - operandB[i];
    };
    operator[i] = subtraction;
  } else {
    let subtraction = () => {
      resultValue[i] = operandA[i] - operandB[i];
    };
    operator[i] = subtraction;
  }
}

function multiply() {
  flag.multiplication = true;
  if (operandA[i] && operandB[i]) {
    calculate();
    let multiplication = () => {
      resultValue[i] = operandA[i] * operandB[i];
    };
    operator[i] = multiplication;
  } else {
    let multiplication = () => {
      resultValue[i] = operandA[i] * operandB[i];
    };
    operator[i] = multiplication;
  }
}

function divide() {
  flag.division = true;
  if (operandA[i] && operandB[i]) {
    calculate();
    let division = () => {
      if (operandB[i] === 0) {
        flag.denominatorError = true;
      } else {
        resultValue[i] = operandA[i] / operandB[i];
      }
    };
    operator[i] = division;
  } else {
    let division = () => {
      if (operandB[i] === 0) {
        flag.denominatorError = true;
      } else {
        resultValue[i] = operandA[i] / operandB[i];
      }
    };
    operator[i] = division;
  }
}

function percentage() {
  // operandB를 할당하는 동안에 true로 되어있다. 즉, operandA까지만 할당되어 있는 구간이다.
  if (operandB === true) {
    clear();
  } else if (flag.addition || flag.subtraction) {
    flag.addition = false;
    flag.subtraction = false;
    operandB[i] = operandA[i] * (operandB[i] / 100);
    targetDisplayValue.textContent = operandB[i];
  } else if (flag.multiplication || flag.division) {
    flag.multiplication = false;
    flag.division = false;
    operandB[i] = operandB[i] / 100;
    targetDisplayValue.textContent = operandB[i];
  }
}

function radical() {
  if (flag.calculated) {
    let squareRoot = () => {
      if (operandA[i] < 0) {
        flag.invalidInputError = true;
      } else {
        resultValue[i] = Math.sqrt(operandA[i]);
      }
    };
    operator[i - 1] = squareRoot;
    calculate();
  } else {
    let squareRoot = () => {
      if (operandA[i] < 0) {
        flag.invalidInputError = true;
      } else {
        resultValue[i] = Math.sqrt(operandA[i]);
      }
    };
    operator[i] = squareRoot;
    calculate();
  }
}

function toggleSign() {
  console.log("in");
  if (!operator[i] && flag.operandA) {
    operandA[i] = operandA[i] * -1;
    targetDisplayValue.textContent = operandA[i];
  } else if (operator[i] && flag.operandB) {
    operandB[i] = operandB[i] * -1;
    targetDisplayValue.textContent = operandB[i];
  }
}

function clear() {
  operandA = [];
  operandB = [];
  resultValue = [];
  operator = [];
  i = 0;
  flag = {
    invalidInputError: false,
    denominatorError: false,
    operandA: false,
    operandB: false,
  };
  targetDisplayValue.textContent = "0";
  targetDisplayValue.style.fontSize = "30px";
}

function formatNumber(number, decimals) {
  const formatted = number.toFixed(decimals).toString();
  return +formatted.replace(/\.?0+$/, "");
}
