import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { useGetRateQuery } from "../../store/QuerySlice";
import ButtonGroup from "../UI/ButtonGroup";
import Input from "../UI/Input";

const ToInputContainer = () => {
  const { from, to, value } = useSelector((state) => state.apiData);

  const { data, isLoading, isFetching } = useGetRateQuery({ from, to });

  if (isLoading || isFetching) {
    return <CircularProgress color="secondary" />;
  }

  let convertedValue = value ? (data * value).toFixed(3) : 0;
  let rates = `1${to} = ${(1 / data).toFixed(3)} ${from}`;

  if (from === to) {
    convertedValue = "Dont Choose Same";
  }

  return (
    <div>
      <ButtonGroup variant="to" />
      <Input rates={rates} readOnly={true} value={convertedValue} />
    </div>
  );
};

export default ToInputContainer;
