import { uniqueId } from "lodash";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateNumbers,
  addNumber,
  deleteAll,
  selectNumbers,
} from "../../storage/rpnSlice";
import { Operators } from "../../types";

export interface Props {}

const Component: React.FunctionComponent<Props> = () => {
  const memorisedNumbers = useSelector(selectNumbers);
  const dispatch = useDispatch();
  const [currentNumber, setCurrentNumber] = useState<
    (number | "NEGATE" | ".")[]
  >([]);

  const handleNumberClick = (number: number) => {
    setCurrentNumber([...currentNumber, number]);
  };

  const handleAddNumber = () => {
    if (currentNumber[0] === "NEGATE") {
      currentNumber.shift();
      dispatch(addNumber(Number(-currentNumber.join(""))));
    } else if (currentNumber.length > 0) {
      dispatch(addNumber(Number(currentNumber.join(""))));
    }
    setCurrentNumber([]);
  };

  const handleDeleteLastNumber = () => {
    currentNumber.pop();
    setCurrentNumber([...currentNumber]);
  };

  const handleDeleteAll = () => {
    dispatch(deleteAll());
    setCurrentNumber([]);
  };

  const handleCalculate = (operator: Operators) => {
    if (currentNumber.length > 0 && memorisedNumbers.length >= 1)
      handleAddNumber();
    dispatch(calculateNumbers(operator));
  };

  const handleNegativeNumber = () => {
    if (currentNumber[0] === "NEGATE") {
      currentNumber.shift();
      setCurrentNumber([...currentNumber]);
    } else {
      currentNumber.unshift("NEGATE");
      setCurrentNumber([...currentNumber]);
    }
  };

  const displayedNumber = () => {
    const number = [...currentNumber];
    if (number[0] === "NEGATE") {
      number.shift();
      return `${number.join("")} NEGATE`;
    } else return number.join("");
  };

  return (
    <div style={{ width: 500, padding: 20 }}>
      <div
        className="box content"
        style={{
          height: 300,
          overflow: "scroll",
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          justifyContent: "flex-end",
        }}
      >
        {memorisedNumbers.map((number) => (
          <p key={uniqueId()}>{number >= 0 ? number : `${-number} NEGATE`}</p>
        ))}
        <div className="block">
          <h1>{displayedNumber()}</h1>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <button
            className="button is-fullwidth"
            onClick={handleDeleteLastNumber}
          >
            AC
          </button>
        </div>
        <div className="column">
          <button className="button is-fullwidth" onClick={handleDeleteAll}>
            Delete All
          </button>
        </div>
        <div className="column">
          <button
            className="button is-fullwidth is-warning"
            onClick={handleAddNumber}
          >
            Enter
          </button>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <button
            className="button is-fullwidth is-primary"
            onClick={() => handleNumberClick(1)}
          >
            1
          </button>
        </div>
        <div className="column">
          <button
            className="button is-fullwidth is-primary"
            onClick={() => handleNumberClick(2)}
          >
            2
          </button>
        </div>
        <div className="column">
          <button
            className="button is-fullwidth is-primary"
            onClick={() => handleNumberClick(3)}
          >
            3
          </button>
        </div>
        <div className="column">
          <button
            className="button is-fullwidth"
            onClick={() => handleCalculate("+")}
          >
            +
          </button>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <button
            className="button is-fullwidth is-primary"
            onClick={() => handleNumberClick(4)}
          >
            4
          </button>
        </div>
        <div className="column">
          <button
            className="button is-fullwidth is-primary"
            onClick={() => handleNumberClick(5)}
          >
            5
          </button>
        </div>
        <div className="column">
          <button
            className="button is-fullwidth is-primary"
            onClick={() => handleNumberClick(6)}
          >
            6
          </button>
        </div>
        <div className="column">
          <button
            className="button is-fullwidth"
            onClick={() => handleCalculate("-")}
          >
            -
          </button>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <button
            className="button is-fullwidth is-primary"
            onClick={() => handleNumberClick(7)}
          >
            7
          </button>
        </div>
        <div className="column">
          <button
            className="button is-fullwidth is-primary"
            onClick={() => handleNumberClick(8)}
          >
            8
          </button>
        </div>
        <div className="column">
          <button
            className="button is-fullwidth is-primary"
            onClick={() => handleNumberClick(9)}
          >
            9
          </button>
        </div>
        <div className="column">
          <button
            className="button is-fullwidth"
            onClick={() => handleCalculate("*")}
          >
            x
          </button>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <button
            className="button is-fullwidth is-primary"
            onClick={() => {
              if (!currentNumber.find((number) => number === "."))
                setCurrentNumber([...currentNumber, "."]);
            }}
          >
            .
          </button>
        </div>
        <div className="column">
          <button
            className="button is-fullwidth is-primary"
            onClick={() => handleNumberClick(0)}
          >
            0
          </button>
        </div>
        <div className="column">
          <button
            className="button is-fullwidth is-primary"
            onClick={handleNegativeNumber}
          >
            NEGATIVE
          </button>
        </div>
        <div className="column">
          <button
            className="button is-fullwidth"
            onClick={() => handleCalculate("/")}
          >
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default Component;
