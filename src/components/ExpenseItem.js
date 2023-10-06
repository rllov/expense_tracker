import React, { useContext } from "react";
import Badge from "react-bootstrap/Badge";
import { AppContext } from "../context/AppContext";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <Badge pill bg="primary">
          ${props.cost}
        </Badge>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
