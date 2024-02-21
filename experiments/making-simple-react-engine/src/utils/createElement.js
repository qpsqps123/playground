import { REACT_ELEMENT_TYPE } from "../data/symbols";

// function ReactElement(type, props) {
//   let element
//   element = {
//     $$typeof: REACT_ELEMENT_TYPE,
//     type,
//     props
//   }
//   return element
// }

export default function createElement(type, props) {
  /* 
  실제 React 코드에서는 위 ReactElement 함수처럼 분리되어 있고
  createELement 함수 내에서는 유효성 검사를 거친 뒤 ReactElement(type, props)를 통해
  Fiber에 사용할 element 객체를 만들어 반환한다. 
  */
  let element;
  element = {
    $$typeof: REACT_ELEMENT_TYPE,
    type,
    props,
  };

  return element;
}
