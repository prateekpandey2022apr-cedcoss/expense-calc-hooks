import React from "react";
import { findExpensesByCategory } from "./Utils";

function CategoryWiseExpenses(props) {
  return (
    <div>
      {props.expenses.length > 0 && (
        <>
          <h6 className="mt-3">Category-wise expenses</h6>
          <div className="row mt-4">
            <div className="col">
              <table className="table">
                <tbody>
                  <tr>
                    <td>Grocery</td>
                    <td>
                      &#8377;{findExpensesByCategory(props.expenses, "Grocery")}
                    </td>
                  </tr>
                  <tr>
                    <td>Veggies</td>
                    <td>
                      &#8377;{findExpensesByCategory(props.expenses, "Veggies")}
                    </td>
                  </tr>
                  <tr>
                    <td>Travelling</td>
                    <td>
                      &#8377;
                      {findExpensesByCategory(props.expenses, "Travelling")}
                    </td>
                  </tr>
                  <tr>
                    <td>Miscellaneous</td>
                    <td>
                      &#8377;
                      {findExpensesByCategory(props.expenses, "Miscellaneous")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CategoryWiseExpenses;
