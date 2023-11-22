document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("calc-display");
  const buttons = document.getElementsByClassName("btn");

  let currentValue = "";

  function calculate() {
    const convertedValue = currentValue
      .replace("÷", "/")
      .replace("×", "*")
      .replace("%", "/100")
      .replace("sin", "Math.sin")
      .replace("cos", "Math.cos")
      .replace("ln", "Math.log")
      .replace("π", "Math.PI")
      .replace("e", "Math.E")
      .replace("√", "Math.sqrt")
      .replace("log", "Math.log10")
      .replace("tan", "Math.tan")
      .replace("x!", "factorial")
      .replace("Inv", "1/")
      .replace("Ans", "currentValue")
      .replace("EXP", "Math.exp")
      .replace("x^y", "Math.pow")
      .replace("Rad", "Math.toRadians")
      .replace("Deg", "Math.toDegrees");

    const result = eval(convertedValue);
    currentValue = result.toString();
    display.value = currentValue;
  }

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", () => {
      const value = button.innerText;

      try {
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
      } catch (error) {
        currentValue = "Error";
        display.value = currentValue;
      }
    });
  }
});
