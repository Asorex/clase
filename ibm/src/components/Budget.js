import React, { useContext, useState } from 'react';
import { AppContext } from "../context/AppContext";
import '../style-sheets/budget.css'
import { useDataContext } from '../context/dataContext';

const Budget = ()=> {
    const { contextData } = useDataContext();

    const [ setBudget] = useState('');
    
    if (setBudget < 960) {
        console.log('ola')
        return;
    }

    return ( 
        <form className='alert alert-secondary'>Budget: {contextData} 
            <input
                className="tarea-input"
                type='number'
                name='texto'
                min='0'
                max='20000'
                step='10'
                onSubmit={(e) => setBudget(e.target.value)}
                />
        </form>     
    );
};

export default Budget;