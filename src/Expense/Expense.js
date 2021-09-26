import React, {useState} from 'react';
import expensData from "./expensData.json";
import incomeData from "./incomeData.json";
import { useForm } from "react-hook-form";
import { v4 as uuid4 } from "uuid";
import Licznik from "./Licznik";
import style from "./style.css"

const styles= {
    color:'red'
}
const styles1= {
    color:'green'
}



const cssLicz=(initCount)=>{
    if (initCount>0){
        return(
            
            <div style={styles1}>
                {initCount}
            </div>
        )}
    if (initCount<0){
        return(
            <div style={styles}>
                {initCount}
            </div>
        )
    }
}


const useInput = (initialValue)=>{
    const [value, setValue]=useState(initialValue);

    const reset=()=>{
        setValue(initialValue);
    };
    const handleClick =(e)=>{
        setValue(e.target.value);
    };

    return [value, handleClick, reset];
}

const sumFun=(initVal)=>{
    expensData.map((det, index)=>(
        <li key={index}>
            {det.amount}
        </li>
    ))
}


function Expense(){
    //var data =JSON.parse(expensData);
    //const [expens, setExpense] =useState(expensData);
    //const [income, setIncome] =useState(incomeData);
    const [expens, setExpense] =useState([]);
    const [income, setIncome] =useState([]);
    
    //const [expensIn, setExpenseIn] =useState([]);
    const [cost, handleSetCost, resetCost]=useInput("");
    const [licz, setLicz]=useState(0);
    //const [];

    const {register, handleSubmit} = useForm();
    

    const sendForm = (d) =>{
        
        if(radio1==="wydatek"){
            const expenseInit={
                id: uuid4(),
                type:radio1,
                name:d.name,
                amount:parseInt(-d.amount,10),
                category:d.category
            };
           // sumFun(d.amount);
            //setExpenseIn([...expensIn+ d.amount]);
            expensData.push(expenseInit);
            setLicz(licz+expenseInit.amount);
            //setExpense([expens, expenseInit]);
            console.log(expensData);
            setRadio1(false);
            setRadio2(false);
        }else{
            const incomeInit={
                id: uuid4(),
                type:radio2,
                name:d.name,
                amount:parseInt(d.amount,10),
                category:d.category
            };
            //incomeData.push(incomeInit);
            incomeData.push(incomeInit);
            setLicz(licz+incomeInit.amount);
            console.log(incomeData);
            setRadio1(false);
            setRadio2(false);
        }
        };

    const [radio1, setRadio1] =useState(false);
    const [radio2, setRadio2] =useState(false);

    const handleRadio1=()=>{
        setRadio1("wydatek");
        setRadio2(false);
    }
    const handleRadio2=()=>{
        setRadio1(false);
        setRadio2("przychód");
    }

    const options = [
        { value:"zakupy", label:"zakupy"},
        { value:"warszat", label:"warszat"},
        { value:"zoologiczny", label:"zoologiczny"},
        { value:"paliwo", label:"paliwo"}
    ]

    return(
            <form onSubmit={handleSubmit(sendForm)}>
                <div>
                    <label>
                        <input
                            {...register("wydatek")}
                            type="radio"
                            checked={radio1}
                            onClick={handleRadio1}
                        />wydatek
                    </label>
                    <label>
                        <input
                            {...register("przychód")}
                            type="radio"
                            checked={radio2}
                            onClick={handleRadio2}
                        />przychów
                    </label>
                </div>
                <div>
                    <input
                        {...register("name",{
                            //required:true
                        })}
                    />
                </div>
                <div>
                    <input
                        {...register("amount",{
                            //required:true,
                        })}
                        value={cost}
                        onChange={handleSetCost}
                        type="number"
                        
                    />
                </div>
                <div>
                    <select{...register("category")}
                    >
                        <option value="zakupy" >zakupy</option>
                        <option value="warszat" >warszat</option>
                        <option value="zoologiczny" >zoologiczny</option>
                        <option value="paliwo" >paliwo</option>
                    </select>
                </div>
                <div>
                    <button
                    type="submit" value="submit"
                    >dodaj</button>
                </div>
                <div>
                    <p>
                        
                        {/* <Licznik /> */}
                         <h5>suma wydatków: {cssLicz(licz)}  </h5>
                        
                        <h3>wydatki</h3>
                        {expensData.map((det, index)=>(
                            <li key={index} >
                                <span>{det.name}</span>: {det.amount}{" "}
                            </li>
                        ))}
                        <h3>przychody</h3>
                        {incomeData.map((det, index)=>(
                            <li key={index}>
                                <span>{det.name}</span>: {det.amount}{" "}
                            </li>
                        ))}
                    </p>
                </div>

            </form>
        
    );
}

export default Expense;