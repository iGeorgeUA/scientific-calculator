document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("calc-display");
  const buttons = document.getElementsByClassName("btn");

  let currentValue = "";

  function calculate() {
    const convertedValue = currentValue.replace("÷", "/").replace("×", "*").replace("%", "/100");
    const result = eval(convertedValue);
    currentValue = result.toString();
    display.value = currentValue;
  }

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", () => {
      const value = button.innerText;

      if (value === "AC") {
        currentValue = "";
        display.value = currentValue;
        return;
      } else if (value === "=") {
        calculate();
      } else {
        currentValue += value;
        display.value = currentValue;
      }
    });
  }
});
