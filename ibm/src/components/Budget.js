import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";
import '../style-sheets/budget.css'

const Budget = () => {
    const {Budget} = useContext(AppContext);

    return (
        <form className='alert alert-secondary'>Budget: $
            <input
                className="tarea-input"
                type='number'
                placeholder='Hola'
                name='texto'
                min='0'
                max='20000'/>
        </form>
    );
};

export default Budget;