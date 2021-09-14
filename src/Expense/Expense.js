import React, {useState, useRef } from 'react';



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
    const offNameMess=useRef();

    const [radio1, setRadio1] = useState(false);
    const [radio2, setRadio2] = useState(false);
    const [name, setName, resetName] =useInitCheck('')
    const [number, setNumber, resetNumber]= useInitCheck('');

    const handleRadio1=()=>{
        setRadio1(true);
        setRadio2(false);
    }
    const handleRadio2=()=>{
        setRadio1(false);
        setRadio2(true);
    }

    const Expens=[{
        id:"1",
        name:"radio",
        amount:"60",
        category:"audio"
        },
        {
        id:"2",
        name:"glowniki",
        amount:"150",
        category:"audio"
        },
        {
        id:"3",
        name:"kable",
        amount:"10",
        category:"audio"
        }];
    
    const Income=[{
        id:"1",
        name:"wyplata",
        amount:"2000",
        category:"etat"
    }];

    const sendAdd=(event)=>{
        return name;
    }

    const sendCalc=(event)=>{
        
        if(offName.current.value === ''){
            offName.current.value="Podaj imie";
        }
        else{
            //offName.current.value="ok";
        }
        if(name !==''){
            resetName('');
        }
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
                        <option value="warszat">warszat</option>
                        <option value="zoologiczny">zoologiczny</option>
                        <option value="paliwo">paliwo</option>
                    </select>
                </div>
                <div>
                    <button 
                    type="submit"
                    onClick={sendCalc}
                    >Przelicz{sendAdd}</button>
                </div>
                <div>
                    <p>
                        {Expens.map(( e)=>{ return  [e.name, e.amount, e.category].join(", ")+" + " })}
                    </p>
                    <p>
                        {Income.map((e)=>{ return [e.name, e.amount, e.category].join(", ") })}
                    </p>
                    <p>
                       {Expens.view()}
                    </p>
                </div>

            </>
        
    );
}

export default Expense;