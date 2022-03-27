import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
    const ongetDataHandler = (EnteredExpenselist) => {
        const newExpenselist = {
            ...EnteredExpenselist,
            id: Math.random().toString()
        };
        // console.log(newExpenselist)
        props.onNewExpense(newExpenselist)
    };
    return (
        <div className='new-expense'>
            <ExpenseForm onsaveData={ongetDataHandler} />
        </div>
    );
};
export default NewExpense;