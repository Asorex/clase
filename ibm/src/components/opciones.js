import { useState } from "react";

const Lista = (props) => {

    const [currency, setCurrency] = useState('');

    return (
        <div>
            <label>Currency:
            <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setCurrency(event.target.value)}>
                <option value="Dollar" name="dollar"> $ Dollar</option>
                <option value="Pound" name="pound">£ Pound</option>
                <option value="Euro" name="euro">€ Euro</option>
                <option value="Ruppee" name="ruppee">₹ Ruppee</option>
            </select>
            </label>
        </div>
    )
}

export default Lista;

