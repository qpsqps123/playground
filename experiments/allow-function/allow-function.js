// 화살표 함수(arrow function)는 function 키워드 대신 화살표(=>, fat arrow)를 사용하여 기존의 함수 정의 방식보다 간략하게 함수를 정의할 수 있다.
// 화살표 함수는 표현만 간략한 것이 아니라 내부 동작도 기존의 함수보다 간략하다. 
// 특히 화살표 함수는 콜백함수 내부에서 this가 전역 객체를 가리키는 문제를 해결하기 위한 수단으로 유용하다.

// 화살표 함수는 함수 선언문으로 정의할 수 없고 함수표현식으로 정의해야 한다. 호출 방식은 기존 함수와 동일하다.

// 매개변수가 여러 개인 경우, 소괄호 () 안에 매개변수를 선언한다.
const multiply = (x, y) => x * y;
console.log(multiply(2, 3));

// 매개변수가 한 개인 경우, 소괄호 ()를 생략할 수 있다.
const number = x => x;
console.log(number(2));

// 매개변수가 없는 경우 소괄호 ()를 생략할 수 없다.
const NUMBER_SIX = () => 2 * 3;
console.log(NUMBER_SIX());

