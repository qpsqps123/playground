/* ----------------------------------- 초깃값 ---------------------------------- */
let operandA = [];
let operandB = [];
let resultValue = [];
let operator = [];
let i = 0;
let flag = {
  // 나누기의 분모로 0을 입력하고 연산했을 때, NaN이 출력되는 에러 처리를 위해 사용한다.
  denominatorError: false,
  // operandA & operandB에 할당하는 중인지 판단한다.
  operandA: false,
  operandB: false,
  calculated: false,
};

/* --------------------------------- 이벤트 타겟을 변수에 할당--------------------------------- */
const targetNumber = document.querySelectorAll(".number");
const targetOperator = document.querySelectorAll(".operator");
const targetDisplay = document.querySelector(".display");

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
  // operandA부터 입력하는 상황이든(계산을 처음 시작하는)
  // operandB부터 입력하는 상황이든(연속 사칙연산 자동 연산하는)
  // calculate 함수를 연속으로 입력하는 상황 외에
  // calculate 함수가 호출되기 이전에는 반드시 assignNumber 함수가 호출되어야 하기 때문에
  // flag.calculated = false를 이곳에 넣어준다.
  flag.calculated = false;

  if (e.target.textContent === ".") {
    targetDisplay.textContent = "0.";
  } else if (
    // 맨 처음 숫자를 할당할 때의 조건.
    // 초기 targetDisplay.textContent 값 0은 문자열이다.
    targetDisplay.textContent === "0" ||
    // 나누기의 분모로 0을 입력하고 연산했을 때, 생기는 에러를 처리하고 뜨게 한 표시 문구.
    // 처음 숫자를 할당하는 상태로 돌아가기 위한 조건이다(순번이 clear되는 것은 아니다).
    targetDisplay.textContent === "Denominator can't be 0"
  ) {
    targetDisplay.textContent = e.target.textContent;
  } else if (!operator[i] && !flag.operandA) {
    // operator ==== false 조건을 걸지 않으면, 연속 사칙연산 자동 연산 시 opeandB 입력할 때
    // flag.operandA = false가 되어 있기 때문에 여기서 계속 걸린다.
    // 그리고 맥락상 operandA가 결정되어 있기 때문에
    // calculate 안에서 flag.operandA = false가 되기보다는
    // 아래 if문의 else에서 flag.operandA = false가 되도록 했다.
    targetDisplay.textContent = e.target.textContent;
  } else if (operator[i] && !flag.operandB) {
    targetDisplay.textContent = e.target.textContent;
  } else {
    targetDisplay.textContent += e.target.textContent;
  }

  let currentDisplayValue = +targetDisplay.textContent;

  if (!operator[i]) {
    // flag.operandA 값이 true가 되기 전 처음 한 번은 false다.
    // 그러므로 위의 else if 조건에 최초 한 번이 걸린다.
    flag.operandA = true;
    operandA[i] = currentDisplayValue;
  } else {
    flag.operandA = false;
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
    targetDisplay.textContent = "Denominator can't be 0";
    flag.denominatorError = false;
  } else {
    targetDisplay.textContent = resultValue[i];
    operandA[i + 1] = resultValue[i];
  }

  flag.operandB = false;
  flag.calculated = true;
  i++;
}

function add() {
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

function clear() {
  operandA = [];
  operandB = [];
  resultValue = [];
  operator = [];
  i = 0;
  flag = {
    denominatorError: false,
    operandA: false,
    operandB: false,
  };
  targetDisplay.textContent = "0";
}
