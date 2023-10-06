function calculate(input1, input2)
{
  input1 = parseFloat(document.querySelector("#input1").value)
  input2 = parseFloat(document.querySelector("#input2").value)

  selector = document.querySelector("#selector").value

  console.log(`${typeof input1}, ${typeof input2}`)
    switch(selector){
      case '+':
        calc = (input1 + input2)
        break
      case '-':
        calc = (input1 - input2)
        break
      case '*':
        calc = (input1 * input2)
        break
      case '/':
        calc = (input1 / input2)
        break
    }

  if(!isNaN(calc))
  {
    document.querySelector("#result").innerHTML = `The result: ${calc}`
  }
}