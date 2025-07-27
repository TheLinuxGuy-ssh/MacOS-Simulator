import React, { useState, useRef, useEffect } from "react";
import "./style.css";

function CalculatorKey({ onPress, className, ...props }) {
  return (
    <button
      className={`calculator-key ${className}`}
      onClick={onPress}
      {...props}
    />
  );
}

const CalculatorOperations = {
  "/": (prevValue, nextValue) => prevValue / nextValue,
  "*": (prevValue, nextValue) => prevValue * nextValue,
  "+": (prevValue, nextValue) => prevValue + nextValue,
  "-": (prevValue, nextValue) => prevValue - nextValue,
  "=": (prevValue, nextValue) => nextValue,
};

export function Calculator() {
  const [value, setValue] = useState(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [operator, setOperator] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  // Dummy AutoScalingText: just renders children for simplicity
  function AutoScalingText({ children }) {
    return <div className="auto-scaling-text">{children}</div>;
  }

  function CalculatorDisplay({ value }) {
    return (
      <div className="calculator-display">
        <AutoScalingText>{value}</AutoScalingText>
      </div>
    );
  }

  function clearAll() {
    setValue(null);
    setDisplayValue("0");
    setOperator(null);
    setWaitingForOperand(false);
  }
  function clearDisplay() {
    setDisplayValue("0");
  }
  function clearLastChar() {
    setDisplayValue((prev) => prev.substring(0, prev.length - 1) || "0");
  }
  function toggleSign() {
    setDisplayValue((prev) => String(parseFloat(prev) * -1));
  }
  function inputPercent() {
    const currentValue = parseFloat(displayValue);
    if (currentValue === 0) return;
    setDisplayValue(String(currentValue / 100));
  }
  function inputDot() {
    if (!/\./.test(displayValue)) {
      setDisplayValue(displayValue + ".");
      setWaitingForOperand(false);
    }
  }
  function inputDigit(digit) {
    if (waitingForOperand) {
      setDisplayValue(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplayValue((prev) => (prev === "0" ? String(digit) : prev + digit));
    }
  }
  function performOperation(nextOperator) {
    const inputValue = parseFloat(displayValue);
    if (value == null) {
      setValue(inputValue);
    } else if (operator) {
      const currentValue = value || 0;
      const newValue = CalculatorOperations[operator](currentValue, inputValue);
      setValue(newValue);
      setDisplayValue(String(newValue));
    }
    setWaitingForOperand(true);
    setOperator(nextOperator);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      let { key } = event;
      if (key === "Enter") key = "=";
      if (/\d/.test(key)) {
        event.preventDefault();
        inputDigit(parseInt(key, 10));
      } else if (key in CalculatorOperations) {
        event.preventDefault();
        performOperation(key);
      } else if (key === ".") {
        event.preventDefault();
        inputDot();
      } else if (key === "%") {
        event.preventDefault();
        inputPercent();
      } else if (key === "Backspace") {
        event.preventDefault();
        clearLastChar();
      } else if (key === "Clear") {
        event.preventDefault();
        if (displayValue !== "0") clearDisplay();
        else clearAll();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // Only run once
    // eslint-disable-next-line
  }, [displayValue, waitingForOperand, value, operator]);

  const clearable = displayValue !== "0";
  const clearText = clearable ? "C" : "AC";

  return (
    <div className="calculator">
      <CalculatorDisplay value={displayValue} />
      <div className="calculator-keypad">
        <div className="input-keys">
          <div className="function-keys">
            <CalculatorKey
              className="calc-key key-clear"
              onPress={() => (clearable ? clearDisplay() : clearAll())}
            >
              {clearText}
            </CalculatorKey>
            <CalculatorKey className="calc-key key-sign" onPress={toggleSign}>
              ±
            </CalculatorKey>
            <CalculatorKey
              className="calc-key key-percent"
              onPress={inputPercent}
            >
              %
            </CalculatorKey>
          </div>
          <div className="digit-keys">
            <CalculatorKey
              className="calc-key key-0"
              onPress={() => inputDigit(0)}
            >
              0
            </CalculatorKey>
            <CalculatorKey className="calc-key key-dot" onPress={inputDot}>
              ●
            </CalculatorKey>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <CalculatorKey
                key={n}
                className={`calc-key key-${n}`}
                onPress={() => inputDigit(n)}
              >
                {n}
              </CalculatorKey>
            ))}
          </div>
        </div>
        <div className="operator-keys">
          <CalculatorKey
            className="calc-key key-divide"
            onPress={() => performOperation("/")}
          >
            ÷
          </CalculatorKey>
          <CalculatorKey
            className="calc-key key-multiply"
            onPress={() => performOperation("*")}
          >
            ×
          </CalculatorKey>
          <CalculatorKey
            className="calc-key key-subtract"
            onPress={() => performOperation("-")}
          >
            −
          </CalculatorKey>
          <CalculatorKey
            className="calc-key key-add"
            onPress={() => performOperation("+")}
          >
            +
          </CalculatorKey>
          <CalculatorKey
            className="calc-key key-equals"
            onPress={() => performOperation("=")}
          >
            =
          </CalculatorKey>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
