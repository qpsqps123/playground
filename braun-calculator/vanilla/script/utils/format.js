export function formatValue(value) {
  if (value.toString().length > 10) {
    const exponentialForm = value.toExponential(4);
    return exponentialForm;
  } else {
    console.log("걸렸다 요놈");
    return value;
  }
}
