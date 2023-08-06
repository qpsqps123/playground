import { gd } from "../data/globalData.js";

export function multiply() {
  gd.flag.multiplication = true;
  if (gd.operandA[gd.i] && gd.operandB[gd.i]) {
    calculate();
    const multiplication = () => {
      gd.resultValue[gd.i] = gd.operandA[gd.i] * gd.operandB[gd.i];
    };
    gd.operator[gd.i] = multiplication;
  } else {
    const multiplication = () => {
      gd.resultValue[gd.i] = gd.operandA[gd.i] * gd.operandB[gd.i];
    };
    gd.operator[gd.i] = multiplication;
  }
}
