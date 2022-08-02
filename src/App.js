import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";

import AddIncomeForm from "./AddIncomeForm";
import Expanse from "./Expense";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [count, setCount] = useState(1);

  const [income, setIncome] = useState("");
  const [incomeSubmitted, setIncomeSubmitted] = useState(false);

  const [totalExpense, setTotalExpense] = useState(0);

  //  to store expense curent being edited
  const [expenseId, setExpenseId] = useState("");

  const [btnText, setBtnText] = useState("Add");

  function handleIncomeSubmit(event) {
    // debugger;
    event.preventDefault();

    if (income <= 0) {
      // console.log("income must be +ve");
      alert("Income must be +ve");
      return;
    }

    console.log("income");
    setIncomeSubmitted(true);
  }

  function handleExpenseSubmit(event) {
    event.preventDefault();

    // debugger;

    if (!amount || !category) {
      console.log("Both fields must be present");
      return;
    }

    if (expenseId) {
      // debugger;
      // edit the expense object

      const modifiedExpenses = expenses.filter((expense) => {
        if (expense.id == expenseId) {
          expense.amount = amount;
          expense.category = category;
          return expense;
        }
        return expense;
      });

      const _totalExpense = modifiedExpenses.reduce((total, current) => {
        return total + Number.parseFloat(current.amount);
      }, 0);

      setExpenses(modifiedExpenses);
      setTotalExpense(_totalExpense);
      setAmount("");
      setCategory("");
      setExpenseId("");
      setBtnText("Add");

      console.log("@@$$$$$$$$$@");
    } else {
      // add a new  expense object

      // calculate total expense
      let _totalExpense = expenses.reduce((total, current) => {
        return total + Number.parseFloat(current.amount);
      }, 0);

      _totalExpense += Number.parseFloat(amount);

      setExpenses([
        { id: count, amount: amount, category: category },
        ...expenses,
      ]);

      setCount((count) => count + 1);
      setAmount("");
      setCategory("");

      setTotalExpense(_totalExpense);
    }

    console.log(event);
  }

  function handleDeleteClick(event) {
    // debugger;
    event.preventDefault();
    // console.log(event.target);
    console.log(event.currentTarget.getAttribute("data-id"));

    const expenseId = event.currentTarget.getAttribute("data-id");

    const filteredExpenses = expenses.filter(
      (expense) => expense.id != expenseId
    );

    setTotalExpense(
      filteredExpenses.reduce((total, current) => {
        return total + Number.parseFloat(current.amount);
      }, 0)
    );

    setExpenses(filteredExpenses);
    // setTotalExpense();
  }

  function handleEditClick(event) {
    console.log("edit");

    const _expenseId = event.currentTarget.getAttribute("data-id");

    const expense = expenses.find((expense) => expense.id == _expenseId);
    console.log(expense);

    setAmount(expense.amount);
    setCategory(expense.category);
    setBtnText("Update");
    setExpenseId(_expenseId);
  }

  return (
    <div className="container">
      {!incomeSubmitted && (
        <AddIncomeForm
          income={income}
          setIncome={setIncome}
          handleIncomeSubmit={handleIncomeSubmit}
        />
      )}

      {incomeSubmitted && (
        <Expanse
          income={income}
          setIncome={setIncome}
          handleIncomeSubmit={handleIncomeSubmit}
          expenses={expenses}
          setExpenses={setExpenses}
          amount={amount}
          setAmount={setAmount}
          category={category}
          setCategory={setCategory}
          handleExpenseSubmit={handleExpenseSubmit}
          totalExpense={totalExpense}
          handleDeleteClick={handleDeleteClick}
          expenseId={expenseId}
          handleEditClick={handleEditClick}
          btnText={btnText}
          setBtnText={setBtnText}
        />
      )}
    </div>
  );
}

export default App;
