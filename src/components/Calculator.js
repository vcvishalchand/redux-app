import React, { useState } from "react";
import "./calculator.css";

export default function Calculator() {

  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);
  const [count, setCount] = useState([]);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setInput(preState => ({ ...preState, [name]: value }));
  }

  const resetHandler = () => {
    setResult(0);
    setCount([]);
  }

  const clickHandler = (event) => {
    event.preventDefault()
    const eventName = event.target.getAttribute("data-testid");
    if (!count.includes(eventName)) {
      setCount(preState => ([...preState, eventName]))
    }
    calculator(eventName, input.input1, input.input2);
  }

  const calculator = (eventName, a = 0, b = 0) => {
    let num1 = Number(a);
    let num2 = Number(b);
    switch (eventName) {
      case "addButton":
        return setResult(num1 + num2);
        break;
      case "subtractButton":
        return setResult(num1 - num2);
        break;
      case "multiplyButton":
        return setResult(num1 * num2);
        break;
      case "divideButton":
        return setResult(num1 / num2);
    }
  }

  return (
    <div className="layout-column align-items-center">
      <div data-testid="total-operations" className="pt-50 total-operations"> {count.length} </div>
      <div className="card">
        <form>
          <section className="card-text">

            <div className="layout-row justify-content-around align-items-center mt-40">
              <input type="number" className="ml-3 mr-3" data-testid="app-input1" autoComplete="off" placeholder="Eg: 1"
                onChange={changeHandler} name="input1" />
              <label className="ml-2 mr-2 symbol text-center" data-testid="selected-operator"></label>
              <input type="number" data-testid="app-input2" autoComplete="off" className="ml-3 mr-3"
                onChange={changeHandler} placeholder="Eg: 2" name="input2" />
            </div>

            <div className="layout-row justify-content-around mt-30">
              <button className="operationFont" type="submit" data-testid="addButton" onClick={clickHandler}>+</button>
              <button className="operationFont" type="submit" data-testid="subtractButton" onClick={clickHandler}>-</button>
              <button className="operationFont" type="submit" data-testid="multiplyButton" onClick={clickHandler}>*</button>
              <button className="operationFont" type="submit" data-testid="divideButton" onClick={clickHandler}>/</button>
            </div>

            <div className="layout-row justify-content-between align-items-center mt-30">
              <button type="reset" data-testid="resetButton" className="outline danger" onClick={resetHandler}>Reset</button>
              <div className="layout-row justify-content-center align-items-center result-container">
                <div data-testid="result" className="result-value ma-0 slide-up-fade-in"> {result} </div>
              </div>
            </div>

          </section>
        </form>
      </div>
    </div>
  );
}