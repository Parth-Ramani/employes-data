import { useState } from "react";
import classes from "./InputFieldForm.module.css";

const InputFieldForm = (props) => {
  const [enteredFname, setFname] = useState("");
  const [enteredLname, setLname] = useState("");
  const [enteredAge, setAge] = useState("");

  const fNameChangeHandler = (event) => {
    setFname(event.target.value);
  };
  const lNameChangeHandler = (event) => {
    setLname(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      fName: enteredFname,
      lName: enteredLname,
      age: enteredAge,
    };
    console.log(formData);

    setFname("");
    setLname("");
    setAge("");
  };

  return (
    <div className={classes.background}>
      <div className={classes.form}>
        <form onSubmit={submitHandler}>
          <label className={classes.FirstName}>First Name</label> <br />
          <input
            className={classes.fname}
            required="required"
            type="name"
            value={enteredFname}
            placeholder="Enter First Name"
            onChange={fNameChangeHandler}
          />
          <br />
          <label className={classes.LastName}>Last Name</label>
          <br />
          <input
            type="name"
            value={enteredLname}
            required="required"
            placeholder="Enter Last Name"
            onChange={lNameChangeHandler}
          />
          <br />
          <label className={classes.age}>Age</label>
          <br />
          <input
            type="number"
            value={enteredAge}
            required="required"
            placeholder="Enter Age"
            onChange={ageChangeHandler}
          />
          <br />
          <button className={classes.button} type="submit">
            Add
          </button>
        </form>
        <div className={classes.cancel}>
          <button className={classes.button}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
export default InputFieldForm;
