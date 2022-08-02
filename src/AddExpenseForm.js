import React from "react";

function AddExpenseForm(props) {
  return (
    <form
      className="row mt-4 gy-2 gx-3 align-items-center"
      onSubmit={props.handleExpenseSubmit}
    >
      <div className="col">
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Enter Amount"
          aria-label="Enter Amount"
          value={props.amount}
          onChange={(event) => props.setAmount(event.target.value)}
        />
      </div>
      <div className="col">
        <select
          className="form-select form-select-sm"
          aria-label="Default select example"
          value={props.category}
          onChange={(event) => props.setCategory(event.target.value)}
        >
          <option value="">Select Category</option>
          <option value="Grocery">Grocery</option>
          <option value="Veggies">Veggies</option>
          <option value="Travelling">Travelling</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <div className="col-auto">
        <button type="submit" className="add-btn text-white btn-sm">
          {props.btnText}
        </button>
      </div>
    </form>
  );
}

export default AddExpenseForm;
