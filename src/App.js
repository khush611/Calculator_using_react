import React from "react";
import "./styles.css";
import { evaluate } from "mathjs";
export default function App() {
  const handleClick = function (value) {
    const newExpression = expression.toString() + value;
    setExpression(newExpression);
    console.log("Clicked");
  };

  const calculate = function () {
    let result;
    try {
      result = evaluate(expression);
      setExpression(result);
    } catch (ex) {
      setExpression("");
    }
    console.log("Calculate");
  };

  const clear = function () {
    setExpression("");
  };

  const [expression, setExpression] = React.useState("");
  return (
    <>
      <div className="screen">{expression}</div>
      {[1, 2, 3, 5, 6, 7, 8, 9, 0, "+", "-", "/", "*"].map((el) => (
        <button key={el} onClick={() => handleClick(el)}>
          {el}
        </button>
      ))}

      <button id="btn1" onClick={calculate}>
        =
      </button>

      <button id="btn2" onClick={clear}>
        Clear
      </button>
    </>
  );
}
