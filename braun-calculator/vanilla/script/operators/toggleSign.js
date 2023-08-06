import { targetDisplayValue } from "../main.js";
import { gd } from "../data/globalData.js";

export function toggleSign() {
  if (!gd.operator[gd.i] && gd.flag.operandA) {
    gd.operandA[gd.i] = gd.operandA[gd.i] * -1;
    targetDisplayValue.textContent = gd.operandA[gd.i];
  } else if (gd.operator[gd.i] && gd.flag.operandB) {
    gd.operandB[gd.i] = gd.operandB[gd.i] * -1;
    targetDisplayValue.textContent = gd.operandB[gd.i];
  }
}
