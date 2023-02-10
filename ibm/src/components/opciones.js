import React, { useContext } from "react";
import '../style-sheets/opciones.css';
import { DataContext } from "../context/dataContext";


const Lista = () => {

    const { setContextData } = useContext(DataContext);

    return (
        <div className="options">
            <label>Currency: 
            <select className="custom-options" id="inputGroupSelect01" onChange={(event) => setContextData(event.target.value)}>
                <option value="$" name="dollar"> $ Dollar</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
            </select>
            </label>
        </div>
    )
}

export default Lista;

