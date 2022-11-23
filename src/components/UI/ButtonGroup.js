import { memo, useEffect, useId, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFrom, setTo } from "../../store/apiDataSlice";
import classes from "./ButtonGroup.module.css";

const ButtonGroup = ({ variant }) => {
  const name = useId();
  const dispatch = useDispatch();

  const { from, to } = useSelector((state) => state.apiData);
  const [currency, setCurrency] = useState(variant === "from" ? from : to);

  const buttonChangeHandler = (e) => {
    setCurrency(e.target.value.toUpperCase());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(variant === "from" ? setFrom(currency) : setTo(currency));
    }, 500);
    return () => clearTimeout(timer);
  }, [dispatch, variant, currency]);

  return (
    <div className={classes.buttonGroupContainer}>
      <p>{variant === "from" ? "I Have" : "Want To Convert"}</p>
      <div className={classes.buttonGroup}>
        <input
          type="radio"
          name={name}
          data-currency="Rub"
          value="Rub"
          onChange={buttonChangeHandler}
          checked={currency === "RUB"}
        />
        <input
          type="radio"
          name={name}
          data-currency="Usd"
          value="Usd"
          onChange={buttonChangeHandler}
          checked={currency === "USD"}
        />
        <input
          type="radio"
          name={name}
          onChange={buttonChangeHandler}
          data-currency="Eur"
          checked={currency === "EUR"}
          value="Eur"
        />
        <input
          type="radio"
          name={name}
          onChange={buttonChangeHandler}
          data-currency="GBP"
          checked={currency === "GBP"}
          value="GBP"
        />
      </div>
    </div>
  );
};

export default memo(ButtonGroup);
