document.addEventListener("DOMContentLoaded", () => {
  const result = document.getElementById("result");
  const buttons = document.querySelectorAll(".btn");
  let inputValue = "";

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const buttonText = button.textContent;

      if (buttonText === "C") {
        inputValue = "";
      } else if (buttonText === "⌫") {
        inputValue = inputValue.slice(0, -1);
      } else if (buttonText === "=") {
        try {
          inputValue = eval(inputValue).toString();
        } catch (error) {
          inputValue = "Error";
        }
      } else {
        inputValue += buttonText;
      }

      result.value = inputValue;
    });
  });
});
