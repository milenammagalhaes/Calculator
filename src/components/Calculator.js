import './Calculator.css';
import { useState } from "react"

const Calculator = () => {
  const [Num1, setNum1] = useState("")
  const [Num2, setNum2] = useState("")
  const [operator, setOperator] = useState(null)
 

  const screenValue = (i) => {
    if (operator === null && Num1 === "") {
      setNum1(Num1 + i)
    } if (operator === null) {
        setNum1(Num1 + i)
    } else { 
      setNum2(Num2 + i)
    }    
  }    

  console.log('Num1 = ' + Num1 )
  console.log('Num2 = ' + Num2)
  console.log('Operator: ' + operator)
      
  const operador = (i) => {    
    if (operator === null) {
      setOperator(i) 
    } else {
      setOperator(i)
      result()
    }
  }
  
  const result = () => {

    if(operator === "+") {
      setNum1(parseInt(Num1) + parseInt(Num2) + "")
    } 
    if(operator === "-") {
      setNum1(parseInt(Num1) - parseInt(Num2) + "")
    }
    if(operator === "x") {
      setNum1(parseInt(Num1) * parseInt(Num2) + "")
    }
    if(operator === "/") {
      setNum1(parseInt(Num1) / parseInt(Num2) + "")      
    } 
    setNum2("")
    }

  const screenHandler = () => {
    if(Num2.length > 0) return Num2;
    if(Num1.length > 0) return Num1;
    return 0;
  }
  const clean = () =>{
    setNum1("")
    setNum2("")
    setOperator(null)
  }

  return (
    <div>
      <h1>{screenHandler()}</h1>
      <div className='buttons'>
      <button onClick={() => screenValue("1") }> 1 </button>
      <button onClick={() => screenValue("2")}> 2 </button>
      <button onClick={() => screenValue("3")}> 3 </button>
      <button onClick={() => screenValue("4")}> 4 </button>
      <button onClick={() => screenValue("5")}> 5 </button>
      <button onClick={() => screenValue("6")}> 6 </button>
      <button onClick={() => screenValue("7")}> 7 </button>
      <button onClick={() => screenValue("8")}> 8 </button>
      <button onClick={() => screenValue("9")}> 9 </button>
      <button onClick={() => screenValue("0")}> 0 </button>
      {/* <button onClick={() => screenValue(",")}> , </button> */}
      <button onClick={() => operador("+")}> + </button>
      <button onClick={() => operador("-")}> - </button>
      <button onClick={() => operador("x")}> x </button>
      <button onClick={() => operador("/")}> / </button>
      <button onClick={result}> = </button>
      <button onClick={clean}> C </button>
      </div>
    </div>
  )
}

export default Calculator