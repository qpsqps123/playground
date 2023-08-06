import { gd } from "../data/globalData.js";

export function radical() {
  if (gd.flag.calculated) {
    const squareRoot = () => {
      if (gd.operandA[gd.i] < 0) {
        gd.flag.invalidInputError = true;
      } else {
        gd.resultValue[gd.i] = Math.sqrt(gd.operandA[gd.i]);
      }
    };
    gd.operator[gd.i - 1] = squareRoot;
    calculate();
  } else {
    const squareRoot = () => {
      if (gd.operandA[gd.i] < 0) {
        gd.flag.invalidInputError = true;
      } else {
        gd.resultValue[gd.i] = Math.sqrt(gd.operandA[gd.i]);
      }
    };
    gd.operator[gd.i] = squareRoot;
    calculate();
  }
}
