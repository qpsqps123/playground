import { targetDisplayValue } from "../main.js";
import { gd } from "../data/globalData.js";
import { clear } from "../reset/clear.js";

export function percentage() {
  // operandB를 할당하는 동안에 true로 되어있다. 즉, operandA까지만 할당되어 있는 구간이다.
  // 여기 if 조건 operandB 체크 필요
  if (gd.operandB === true) {
    clear();
  } else if (gd.flag.addition || gd.flag.subtraction) {
    gd.flag.addition = false;
    gd.flag.subtraction = false;
    gd.operandB[gd.i] = gd.operandA[gd.i] * (gd.operandB[gd.i] / 100);
    targetDisplayValue.textContent = gd.operandB[gd.i];
  } else if (gd.flag.multiplication || gd.flag.division) {
    gd.flag.multiplication = false;
    gd.flag.division = false;
    gd.operandB[gd.i] = gd.operandB[gd.i] / 100;
    targetDisplayValue.textContent = gd.operandB[gd.i];
  }
}
