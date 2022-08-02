function findExpensesByCategory(expenses, category) {
  return expenses
    .filter((expanse) => expanse.category === category)
    .reduce((total, current) => {
      return total + Number.parseInt(current.amount, 10);
    }, 0)
    .toFixed(2);
}

export { findExpensesByCategory };
