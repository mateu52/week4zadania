import React, {useState} from 'react';
import dataList from "./data.json" 
import { useForm } from "react-hook-form";
import { v4 as uuid4 } from "uuid";

function Expense(){

    
    const Expens=[{
        id:"1",
        name:"radio",
        amount:"80",
        category:"audio"
        },
        {
        id:"2",
        name:"glosniki",
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

    const [expens, setExpense] =useState(Expens);

    const {register, handleSubmit} = useForm();
    const sendForm = (d) =>{
        if(radio1==="wydatek"){
            const expenseInit={
                id: uuid4(),
                //type:radio1
                name:d.name,
                amount:d.amount,
                category:d.category
            };
            dataList.push(expenseInit);
            console.log(dataList);
            setRadio1(false);
            setRadio2(false);
        }
    }
        

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
                    >Przelicz</button>
                </div>
                <div>
                    <p>
                        {Expens.map(( e)=>{ return  [e.name, e.amount, e.category].join(", ")+" + " })}
                    </p>
                    <p>
                        {Income.map((e)=>{ return [e.name, e.amount, e.category].join(", ") })}
                    </p>
                    <p>
                        {dataList.map((e)=>{ return [e.name, e.amount, e.category].join(", ") })}
                    </p>
                    <p>
                        <h3>wydatki</h3>
                        {Expens.map((det, index)=>(
                            <li key={index}>
                                <span>{det.name}</span>: {det.amount}{" "}
                            </li>
                        ))}
                        <h3>przychody</h3>
                        {Income.map((det, index)=>(
                            <li key={index}>
                                <span>{det.name}</span>: {det.amount}{" "}
                            </li>
                        ))}
                    </p>
                    <p>
                    <h3>przychody</h3>
                        {dataList.map((det, index)=>(
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