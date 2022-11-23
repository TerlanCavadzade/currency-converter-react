import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../store/apiDataSlice";
import { useGetRateQuery } from "../../store/QuerySlice";
import ButtonGroup from "../UI/ButtonGroup";
import Input from "../UI/Input";

const FromInputContainer = () => {
  const [inputValue, setInputValue] = useState(0);

  const dispatch = useDispatch();

  const { from, to } = useSelector((state) => state.apiData);

  const { data, isLoading } = useGetRateQuery({ from, to });

  const inputHandler = useCallback((data) => {
    setInputValue(data);
  }, []);

  useEffect(() => {
    dispatch(setValue(inputValue));
  }, [inputValue, dispatch]);

  let rates = "";

  if (!isLoading) rates = `1${from} = ${data.toFixed(3)} ${to}`;

  return (
    <div>
      <ButtonGroup variant="from" />
      <Input rates={rates} readOnly={false} changeHandler={inputHandler} />
    </div>
  );
};

export default FromInputContainer;
