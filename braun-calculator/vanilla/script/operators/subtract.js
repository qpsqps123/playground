import { gd } from "../data/globalData.js";

export function subtract() {
  gd.flag.subtraction = true;
  if (gd.operandA[gd.i] && gd.operandB[gd.i]) {
    calculate();
    const subtraction = () => {
      gd.resultValue[gd.i] = gd.operandA[gd.i] - gd.operandB[gd.i];
    };
    gd.operator[gd.i] = subtraction;
  } else {
    const subtraction = () => {
      gd.resultValue[gd.i] = gd.operandA[gd.i] - gd.operandB[gd.i];
    };
    gd.operator[gd.i] = subtraction;
  }
}
