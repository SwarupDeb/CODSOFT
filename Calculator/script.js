document.addEventListener('DOMContentLoaded', function() {
  // Get the display element by its ID
  var display = document.getElementById('display');
  // Get all button elements
  var buttons = document.getElementsByTagName('button');

  // Add a click event listener to each button
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      // Get the inner text (value) of the clicked button
      var buttonValue = this.innerHTML;

      // Check which button was clicked and perform corresponding actions
      if (buttonValue === '=') {
        try {
          // Evaluate the expression in the display (with parentheses support)
          display.value = evalWithParentheses(display.value);
        } catch (error) {
          // Handle errors by displaying 'Error'
          display.value = 'Error';
        }
      } else if (buttonValue === 'AC') {
        // Clear the display when 'AC' (All Clear) is clicked
        display.value = '';
      } else if (buttonValue === 'DEL') {
        // Delete the last character when 'DEL' is clicked
        display.value = display.value.slice(0, -1);
      } else if (buttonValue === '√') {
        // Calculate the square root of the expression in the display
        display.value = Math.sqrt(eval(display.value));
      } else if (buttonValue === 'π') {
        // Append the value of π to the display
        display.value += Math.PI;
      } else if (buttonValue === '^') {
        // Append '**' to the display for exponentiation
        display.value += '**';
      } else if (buttonValue === '!') {
        // Calculate factorial of the expression in the display
        var factorialValue = 1;
        for (var j = 1; j <= eval(display.value); j++) {
          factorialValue *= j;
        }
        display.value = factorialValue;
      } else if (buttonValue === '1/x') {
        // Calculate the reciprocal (1/x) of the expression in the display
        display.value = 1 / eval(display.value);
      } else {
        // Append the clicked button's value to the display
        display.value += buttonValue;
      }
    });
  }
  
  // Function to evaluate an expression with balanced parentheses
  function evalWithParentheses(expression) {
    // Count the opening and closing parentheses
    var openingBracketsCount = (expression.match(/\(/g) || []).length;
    var closingBracketsCount = (expression.match(/\)/g) || []).length;

    // Check if parentheses are balanced
    if (openingBracketsCount !== closingBracketsCount) {
      return 'Error: Unbalanced parentheses';
    }

    // Evaluate the expression
    return eval(expression);
  }
});
