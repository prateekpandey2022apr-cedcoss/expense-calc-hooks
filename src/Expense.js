import React from "react";
import ExpanseList from "./ExpenseList";
import AddExpenseForm from "./AddExpenseForm";
// import findExpensesByCategory from "./Utils";
import CategoryWiseExpenses from "./CategoryWiseExpenses";

function Expense(props) {
  // debugger;
  // console.log(props.totalExpense > props.total);

  return (
    <>
      <div className="row mt-4">
        <div className="col">
          <div className="income">
            <p className="income income-pill text-light">
              <i className="bi bi-arrow-down-circle-fill"></i> &nbsp; Income{" "}
              <br />
              &#8377;{props.income}
            </p>
          </div>
        </div>

        <div className="col">
          <div className="expanse">
            <p className="expanse balance-pill text-light">
              <i className="bi bi-arrow-up-circle-fill"></i> &nbsp; Balance
              <br />
              &#8377;{props.income - props.totalExpense}
            </p>
          </div>
        </div>

        <div className="col">
          <div className="expanse">
            <p className="expanse expanse-pill text-light">
              <i className="bi bi-arrow-up-circle-fill"></i> &nbsp; Expense{" "}
              <br />
              &#8377;{props.totalExpense}
            </p>
          </div>
        </div>
      </div>

      {props.income >= props.totalExpense ? (
        <>
          <AddExpenseForm
            amount={props.amount}
            setAmount={props.setAmount}
            category={props.category}
            setCategory={props.setCategory}
            handleExpenseSubmit={props.handleExpenseSubmit}
            btnText={props.btnText}
          />

          <ExpanseList
            expenses={props.expenses}
            handleDeleteClick={props.handleDeleteClick}
            handleEditClick={props.handleEditClick}
          />

          <CategoryWiseExpenses expenses={props.expenses} />
        </>
      ) : (
        <>
          <p>
            <h5>Your expense is greater than income.</h5>
            {/* <img
              src="https://i.kym-cdn.com/entries/icons/mobile/000/030/359/cover4.jpg"
              className="img-fluid"
            /> */}
          </p>
        </>
      )}
    </>
  );
}

export default Expense;
