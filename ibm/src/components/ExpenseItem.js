import React, { useContext } from 'react';
import { TiDelete }  from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { useDataContext } from '../context/dataContext';

const ExpenseItem = (props) => {

    const { contextData } = useDataContext();

    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ELIMINATE_EXPENSE',
            payload: expense
        });
    }


    return (
        <tr>
        <td>{props.name}</td>
        <td>{contextData}{props.cost}</td>
        <td><FaPlusCircle size='1.5em' color='green' onClick={() => increaseAllocation(props.name)}>+</FaPlusCircle></td>
        <td><FaMinusCircle size='1.5em' color='red' onClick={() => decreaseAllocation(props.name)}>-</FaMinusCircle></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;