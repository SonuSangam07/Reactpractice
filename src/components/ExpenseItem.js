import ExpenseDate from './ExpenseDate';
import React,{useState} from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title,setTitle]= useState(props.title);

  const clickhandler=()=>{
    setTitle('updated!');
    console.log(title)
  }
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickhandler}> Change title</button>
      <button > Delete</button>
    </div>
  );
}

export default ExpenseItem;