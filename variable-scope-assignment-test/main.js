let A = `A in global`
let B = `B in global`

function scopeTestA() {
  let A = 'A in function';
  console.log(A);
}

function scopeTestB() {
  B = 'B in function';
  console.log(B);
}

scopeTestA(); // 전역 함수 스코프

console.log(A); // 전역 스코프

scopeTestB(); // 전역 함수 스코프

console.log(B); // 전역 스코프

/* 
결론:
1. 전역 스코프와 전역 함수 스코프에 같은 이름의 변수가 선언되면 전역 함수 스코프에서는 전역 함수 스코프의 변수가 우선 순위를 갖는다.
2. 1과 같은 상황에서 전역 함수 스코프에 변수 선언은 하지 않고 변수에 값만 할당하게 되면 상위 스코프인 전역 스코프에서 같은 이름의 변수를 찾는다.
*/