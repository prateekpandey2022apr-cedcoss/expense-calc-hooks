import React from "react";

function AddIncomeForm(props) {
  return (
    <div className="row">
      <form
        className="add-income-form text-center"
        onSubmit={props.handleIncomeSubmit}
      >
        <div className="mt-3">
          <label htmlFor="income" className="form-label">
            Enter Income
          </label>
          <input
            type="number"
            className="form-control"
            id="income"
            placeholder="Enter Income"
            value={props.income}
            onChange={(event) => props.setIncome(event.target.value)}
            required
          />
        </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-secondary">
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddIncomeForm;
