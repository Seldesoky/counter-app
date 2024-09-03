import React, { useState } from "react";
import Button from "./Button";
import './styles.css';

function Counter() {
  const [value, setValue] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleIncrement = () => {
    setValue(value + parseInt(inputValue, 10));
  };

  const handleDecrement = () => {
    setValue(value - parseInt(inputValue, 10));
  };

  const handleClear = () => {
    setValue(0);
    setInputValue(0);
  };

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleDoubleIncrement = () => {
    setValue(value + parseInt(inputValue, 10) * 2);
  };

  const handleDoubleDecrement = () => {
    setValue(value - parseInt(inputValue, 10) * 2);
  };

  const handleDivide = () => {
    if (inputValue !== 0) {
      setValue(value / parseInt(inputValue, 10));
    }
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <h1>Please Add or Subtract</h1>
      <div className="board">
        {isVisible && (
          <div id="value" style={{ color: value < 0 ? "red" : "black" }}>
            {value}
          </div>
        )}
        <div className="input-container">
          <input
            type="number"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="container">
          <div className="button-group">
            <Button action={handleIncrement} symbol="+" />
            <Button action={handleDecrement} symbol="-" />
            <Button action={handleDoubleIncrement} symbol="++" />
            <Button action={handleDoubleDecrement} symbol="--" />
            <Button action={handleDivide} symbol="/" />
            <Button action={handleClear} symbol="C" />
          </div>
          <Button action={handleToggleVisibility} symbol="Toggle Visibility" />
          <Button action={handleToggleDarkMode} symbol="Toggle Mode" />
        </div>
      </div>
    </div>
  );
}

export default Counter;
