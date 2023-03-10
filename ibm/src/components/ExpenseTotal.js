import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import { useDataContext } from '../context/dataContext';

const ExpenseTotal = () => {

    const { contextData } = useDataContext();

    const {expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return (
        <div className='alert alert-primary'>
            <span>Spent so far: {contextData}{totalExpenses}</span>
        </div>

    );
};

export default ExpenseTotal;
