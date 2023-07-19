import React from 'react'
import './Expense.css';

function ExpenseItem({valkey}) {
  return (
    <>
    <div>
      <h1>{valkey}</h1>
      {/* <h1>{valKey2}</h1> */}
    </div>
    </>
  )
}

export default ExpenseItem

// props = props.data[0];

// const day = props.date.getDay();
// const month = props.date.getMonth();
// const year = props.date.getFullYear();
// Hi

    {/* <div className='Date'>{`${day}-${month}-${year}`}</div> */}

        {/* <h4 className='expenseItem'>{props.name}</h4>
        <p className='price'>{props.price}</p>
        <div className='removeButton'><button >Remove</button></div> */}
  