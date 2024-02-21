import createElement from "./utils/createElement.js";
import renderElement from "./utils/renderElement.js";

const list = createElement("li", "zzz");

const p = createElement("p", "hehehe");

renderElement("#root", "beforeend", list);
renderElement("#root", "beforeend", p);
