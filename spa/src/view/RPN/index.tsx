import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  addNumber,
  deleteAll,
  divide,
  minus,
  multiply,
  selectNumbers,
} from "../../storage/rpnSlice";
import NumberButtons from "./NumberButtons";

export interface Props {}

const Component: React.FunctionComponent<Props> = () => {
  const count = useSelector(selectNumbers);
  const dispatch = useDispatch();
  const [calculatorLastNumber, setCalculatorLastNumber] = useState<number[]>(
    []
  );

  console.log(count);

  const handleNumberClick = (number: number) => {
    setCalculatorLastNumber([...calculatorLastNumber, number]);
  };

  const handleEnterClick = () => {
    if (calculatorLastNumber[0] === -0) {
      calculatorLastNumber.shift();
      dispatch(addNumber(Number(-calculatorLastNumber.join(""))));
    } else dispatch(addNumber(Number(calculatorLastNumber.join(""))));
    setCalculatorLastNumber([]);
  };

  const handleDeleteLastNumber = () => {
    const newNumber = calculatorLastNumber;
    newNumber.pop();
    setCalculatorLastNumber(newNumber);
  };

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };

  const handleCalculate = (operator: string) => {
    if (operator === "+") dispatch(add());
    if (operator === "-") dispatch(minus());
    if (operator === "/") dispatch(divide());
    if (operator === "x") dispatch(multiply());
  };

  const handleNegativeNumber = () => {
    const newNumber = calculatorLastNumber;
    if (calculatorLastNumber[0] === -0) {
      newNumber.shift();
      setCalculatorLastNumber(newNumber);
    } else {
      newNumber.unshift(-0);
      setCalculatorLastNumber(newNumber);
    }
  };

  console.log(calculatorLastNumber);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div>
      <h1 className="rpn-text">Reversed Polish Notation</h1>
      {numbers.map((number) => (
        <NumberButtons
          key={number}
          number={number}
          onClick={handleNumberClick}
        />
      ))}
      <button onClick={handleNegativeNumber}>negatif</button>
      <button onClick={handleEnterClick}>enter</button>
      <button onClick={handleDeleteLastNumber}>AC</button>
      <button onClick={handleDeleteAll}>delete everything</button>
      <button onClick={() => handleCalculate("+")}>+</button>
      <button onClick={() => handleCalculate("-")}>-</button>
      <button onClick={() => handleCalculate("/")}>/</button>
      <button onClick={() => handleCalculate("x")}>x</button>
    </div>
  );
};

export default Component;
