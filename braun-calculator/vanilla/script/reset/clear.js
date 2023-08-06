import { targetDisplayValue } from "../main.js";
import { gd } from "../data/globalData.js";

export function clear() {
  gd.operandA = [0];
  gd.operandB = [0];
  gd.resultValue = [0];
  gd.operator = [];
  gd.i = 0;
  gd.flag = {
    invalidInputError: false,
    denominatorError: false,
    exponentialForm: false,
    operandA: false,
    operandB: false,
    addition: false,
    subtraction: false,
    multiplication: false,
    division: false,
    calculated: false,
  };
  targetDisplayValue.textContent = "0";
  targetDisplayValue.style.fontSize = "30px";
  targetDisplayValue.style.lineHeight = "1.1";
}
