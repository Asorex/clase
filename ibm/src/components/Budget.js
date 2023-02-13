import React, { useState } from 'react';
import '../style-sheets/budget.css'
import { useDataContext } from '../context/dataContext';

const Budget = ()=> {
    const { contextData } = useDataContext();

    const [ setBudget ] = useState('0');

    


    return ( 
        <form className='alert alert-secondary'>Budget: {contextData} 
            <input
                className="tarea-input"
                id='cost'
                type='number'
                name='texto'
                min='0'
                max='20000'
                step='10'
                onChange={(e) => setBudget(e.target.value)}             
                />
        </form>     
    );
};

export default Budget;