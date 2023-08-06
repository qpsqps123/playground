import { gd } from "../data/globalData.js";

export function divide() {
  gd.flag.division = true;
  if (gd.operandA[gd.i] && gd.operandB[gd.i]) {
    calculate();
    const division = () => {
      if (gd.operandB[gd.i] === 0) {
        gd.flag.denominatorError = true;
      } else {
        gd.resultValue[gd.i] = gd.operandA[gd.i] / gd.operandB[gd.i];
      }
    };
    gd.operator[gd.i] = division;
  } else {
    const division = () => {
      if (gd.operandB[gd.i] === 0) {
        gd.flag.denominatorError = true;
      } else {
        gd.resultValue[gd.i] = gd.operandA[gd.i] / gd.operandB[gd.i];
      }
    };
    gd.operator[gd.i] = division;
  }
}
