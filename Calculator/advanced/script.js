const previousOperationText = document.querySelector("#previousOperation");
const currentOperationText = document.querySelector("#currentOperation");
const buttons = document.querySelectorAll("#keys div button");

class Calculator
{
  constructor(previousOperationText, currentOperationText)
  {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = 0;
  }

  // Insert Digit in the screen
  addDigit(digit)
  {
    console.log(digit);

    if(this.currentOperation != 0 && this.previousOperationText.innerText.includes('=')!=true)
    {
      this.currentOperation = digit;
      this.currentOperationText.innerText += this.currentOperation;
    } else if (this.previousOperationText.innerText.includes('='))
    {
      this.previousOperationText.innerText = '';
      this.currentOperation = digit;
      this.currentOperationText.innerText = digit;
    } else
    {
      this.currentOperation = digit;
      this.currentOperationText.innerText = digit;
    }
  }

  newOperation(op)
  {
    console.log(op);
    console.log(this.currentOperation)

    let operationValue;
    let current = this.currentOperationText.innerText;
    let previous = this.previousOperationText.innerText;

    switch(op)
    {
      case "Backspace":
        
        if (current.length-1 != '')
        { this.currentOperation = current.slice(0, current.length-1) }
        else
        { this.currentOperation = 0 }
        break;

      case "C":
        this.previousOperationText.innerText = '';
        this.currentOperation = 0;
        break

      case "CE":
        this.currentOperation = 0;
        break

      case "+":
        this.previousOperationText.innerText = current + "+"
        this.currentOperation = "0"
        break

      case "*":
        this.previousOperationText.innerText = current + "*"
        this.currentOperation = "0"
        break

      case "-":
        this.previousOperationText.innerText = current + "-"
        this.currentOperation = "0"
        break

      case "/":
        this.previousOperationText.innerText = current + "/"
        this.currentOperation = "0"
        break
      
      case "=":
        operationValue = eval(previous + current)
        this.previousOperationText.innerText = previous + current + "="
        this.currentOperation = operationValue
        break

      case "⅟ₓ":
        this.previousOperationText.innerText = `1/(${current})`
        this.currentOperation = (1/(current))
        break

      case "²":
        this.previousOperationText.innerText = `(${current})²`
        this.currentOperation = ((current)**2)
        break

      case "±":
        this.currentOperation = -current
        break

      case ",":
        if (currentOperationText.innerText.includes(".")==false)
        {
          this.currentOperation = currentOperationText.innerText + '.';
          this.currentOperationText.innerText += '.';
        }
        break
      
      default:
        console.log(`Sorry, it's not possible.`);
    }
    this.currentOperationText.innerText = this.currentOperation;
  }
}

const calc = new Calculator(previousOperationText, currentOperationText)

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.value;

    if (+value >= 0)
    {
        calc.addDigit(value);
    }
    else
    {
      calc.newOperation(value);
    }

  })
});