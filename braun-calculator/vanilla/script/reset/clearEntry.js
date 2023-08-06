import { targetDisplayValue } from "../main.js";
import { gd } from "../data/globalData.js";

export function clearEntry() {
  if (gd.operator[gd.i] && !gd.operandB[gd.i]) {
    // 연산자를 누르면 할당한 숫자가 지워지지 않게 한다.
    return;
  } else if (
    targetDisplayValue.textContent === "Denominator can't be 0" ||
    targetDisplayValue.textContent === "Invalid Input"
  ) {
    targetDisplayValue.textContent = "0";
  } else if (targetDisplayValue.textContent.length < 2) {
    targetDisplayValue.textContent = "0";
  } else {
    targetDisplayValue.textContent = targetDisplayValue.textContent.slice(
      0,
      -1
    );
  }

  const currentDisplayValue = +targetDisplayValue.textContent;

  if (!gd.operator[gd.i]) {
    gd.flag.operandA = true;
    gd.operandA[gd.i] = currentDisplayValue;
  } else {
    gd.flag.operandB = true;
    gd.operandB[gd.i] = currentDisplayValue;
  }
}
