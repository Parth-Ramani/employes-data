import { useState } from "react";
import classes from "./Header.module.css";
import InputFieldForm from "./InputField/InputFieldForm";

const Header = () => {
  const [openForm, setForm] = useState(false);
  return (
    <div>
      <header className={classes.header}>
        <input className={classes.search} type="text" placeholder="Search..." />
        <button className={classes.button}>Search</button>
        <button
          className={classes.button}
          onClick={() => {
            setForm(true);
          }}
        >
          Add Employee
        </button>
      </header>
      {openForm && <InputFieldForm cancel={setForm} />}
    </div>
  );
};
export default Header;
