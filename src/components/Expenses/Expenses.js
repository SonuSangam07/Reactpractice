
import React, { useState } from 'react';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpensesList';
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);}
    const filterExpenses=props.items.filter(expense=>{
return expense.date.getFullYear().toString()===filteredYear;
    });
   
  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      
      <ExpenseList items={filterExpenses}/>
      
      

      
      
    </div>
  );
}

export default Expenses;