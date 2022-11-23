import classes from "./Convert.module.css";
import FromInputContainer from "./FromInputContainer";
import ToInputContainer from "./ToInputContainer";

const Convert = () => {
  return (
    <div className={classes.container}>
      <h2>Convert Currency Online</h2>
      <div className={classes.inputContainer}>
        <FromInputContainer />
        <ToInputContainer />
      </div>
    </div>
  );
};

export default Convert;
