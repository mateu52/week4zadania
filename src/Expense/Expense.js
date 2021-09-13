import React, {useState, useRef } from 'react';

const Expens=[{
    name:"",
    amount:"",
    category:""
}];
const Income=[{
    name:"",
    amount:"",
    category:""
}];

function useInitCheck(initialVal){
    const [value, setValue]= useState(initialVal);

    const sendChange=(event)=>{
        setValue(event.target.value);
    }
    const reset=()=>{
        setValue(initialVal);
    }

    return [value, sendChange, reset]
}

function Expense(){

    const offPoint= useRef();
    const offName= useRef();
    const offAmount=useRef();
    const offCategory=useRef();

    const [radio1, setRadio1] = useState(false);
    const [radio2, setRadio2] = useState(false);
    const [name, setName] =useInitCheck('')
    const [number, setNumber]= useInitCheck('');

    const handleRadio1=()=>{
        setRadio1(true);
        setRadio2(false);
    }
    const handleRadio2=()=>{
        setRadio1(false);
        setRadio2(true);
    }

    const sendCalc=(event)=>{

    }

    return(
            <>
                <div>
                    <label>
                        <input
                            type="radio"
                            value="Expense"
                            checked={radio1}
                            onClick={handleRadio1}
                        />wydatek
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="Income"
                            checked={radio2}
                            onClick={handleRadio2}
                        />przychów
                    </label>
                </div>
                <div>
                    <input
                        ref={offName}
                        type="text"
                        value={name}
                        onChange={setName}
                    />
                </div>
                <div>
                    <input
                        ref={offAmount}
                        type="number"
                        value={number}
                        onChange={setNumber}
                    />
                </div>
                <div>
                    <select name="category">
                        <option value="zakupy">zakupy</option>
                        <option value="zakupy">warszat</option>
                        <option value="zakupy">zoologiczny</option>
                        <option value="zakupy">paliwo</option>
                    </select>
                </div>
                <div>
                    <button 
                    type="submit"
                    onClick={sendCalc}
                    >Przelicz</button>
                </div>

            </>
        
    );
}

export default Expense;