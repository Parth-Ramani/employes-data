import reactDom from "react-dom";
import classes from "./TableItem.module.css";

const TableItem = (props) => {
  return (
    <div className={classes.container}>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <td>{props.fName}</td>
          <td>{props.lName}</td>
          <td>{props.age}</td>
        </tbody>
      </table>
    </div>
  );
};

export default TableItem;
