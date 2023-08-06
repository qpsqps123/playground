import { gd } from "../data/globalData.js";

export function add() {
  gd.flag.addition = true;
  // 현재 순번 i에서 opearndA와 operandB가 모두 할당 되어있을 때,
  // operator 핸들러 함수가 호출 되면,
  // calculate 함수가 실행된다.
  if (gd.operandA[gd.i] && gd.operandB[gd.i]) {
    calculate();
    const addition = () => {
      gd.resultValue[gd.i] = gd.operandA[gd.i] + gd.operandB[gd.i];
    };
    gd.operator[gd.i] = addition;
  } else {
    const addition = () => {
      gd.resultValue[gd.i] = gd.operandA[gd.i] + gd.operandB[gd.i];
    };
    gd.operator[gd.i] = addition;
  }
}
