import React from "react";

const EditExpensePage = (props) => {
  console.log(props);
  return <div>Edit the Expense with id of {props.match.params.id}</div>;
};

export default EditExpensePage;
