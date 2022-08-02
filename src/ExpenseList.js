import React from "react";

function ExpenseList(props) {
  return (
    <div className="row mt-4">
      <div className="col">
        {props.expenses.length > 0 ? (
          <table className="table table-striped">
            <tbody>
              {props.expenses.map((expense, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>
                      &#8377;{Number.parseFloat(expense.amount).toFixed(2)}
                    </td>
                    <td>{expense.category}</td>
                    <td>
                      <button
                        type="submit"
                        className="edit text-white btn-sm"
                        data-id={expense.id}
                        onClick={props.handleEditClick}
                      >
                        <i className="bi bi-pencil"></i>
                      </button>
                      <button
                        type="submit"
                        className="delete btn-danger text-white btn-sm"
                        data-id={expense.id}
                        onClick={props.handleDeleteClick}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No Expenses &#128077;</p>
        )}
      </div>
    </div>
  );
}

export default ExpenseList;
