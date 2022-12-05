import React,{useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    const [entertitled,setEnteredTitle]=useState('');
    const [enterAmount,setEnteredAmount]=useState('');
    const [enterDate,setEnteredDate]=useState('');

    const titleChangeHandler=(event)=>{
setEnteredTitle(event.target.value);
    }
    const AmountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
            }
            const DateChangeHandler=(event)=>{
                setEnteredDate(event.target.value);
                    }
                    const submitHandler=(event)=>{
                        event.preventDefault();
                        const expenseData={
                        title: entertitled,
                        amount: enterAmount,
                        date: new Date(enterDate)
                        }
                        props.onSaveExpenseData(expenseData);
                        setEnteredTitle('');
                        setEnteredAmount('');
                        setEnteredDate('');
                    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
           <div className='new-expense__controls'>
            <label>Title</label>
            <input type='text' value={entertitled} onChange={titleChangeHandler}/>
           </div>
           <div className='new-expense__controls'>
            <label>Amount</label>
            <input type='number' min="0.01" step="0.01" value={enterAmount} onChange={AmountChangeHandler} />
           </div>
           <div className='new-expense__controls'>
            <label>Date</label>
            <input type='date' min="2019-01-01" max="2022-12-31" value={enterDate} onChange={DateChangeHandler}/>
           </div>
            </div>
            <div className='new-expense__actions'>
                <button type="button" onClick={props.onClick}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;