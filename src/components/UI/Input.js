import { memo, useEffect, useState } from "react";
import classes from "./Input.module.css";

const Input = ({ rates, readOnly, value, changeHandler }) => {
  const [inputValue, setInputValue] = useState(0);

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (changeHandler) {
        changeHandler(inputValue);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [inputValue, changeHandler]);

  return (
    <div className={classes.inputContainer}>
      <input
        type={readOnly ? "text" : "number"}
        min="0"
        onChange={inputChangeHandler}
        value={value ? value : inputValue}
        readOnly={readOnly}
      />
      <p className={classes.rating}>{rates}</p>
    </div>
  );
};

export default memo(Input);
