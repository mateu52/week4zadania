import React, {useState, useRef } from 'react';
import Select from 'react-select';
import dataList from "./data.json" 
import { useForm } from "react-hook-form";


function Expense(){

    const {register, handleSubmit} = useForm();
    const sendForm = (d) =>
        alert(JSON.stringify(d));

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


    const handleRadio1=()=>{
        setRadio1(true);
        setRadio2(false);
    }
    const handleRadio2=()=>{
        setRadio1(false);
        setRadio2(true);
    }

    const options = [
        { value:"zakupy", label:"zakupy"},
        { value:"warszat", label:"warszat"},
        { value:"zoologiczny", label:"zoologiczny"},
        { value:"paliwo", label:"paliwo"}
    ]

     const sendAdd=(event)=>{
        if(offName.current.value !=""){
            console.log("aha");
        }
    }


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
                        {...register("name")}
                    />
                </div>
                <div>
                    <input
                        {...register("amound")}
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
                    type="submit"
                    onClick={sendAdd}
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
                       {/* {name},{number}zł,{type},{categ} */}
                       {/* {dataList.map((detail, index) => {
                           return <div>
                                    <p>_________</p>
                                    <p>{detail.type}</p>
                                    <p>{detail.category}</p>
                                    <p>{detail.name}</p>
                                    <p>{detail.amount}</p>
                                    <p>................</p>
                               </div>
                       })} */}
                    </p>
                    <p>
                        <h3>wydatki</h3>
                        {expens.map((det, index)=>(
                            <li key={index}>
                                <span>{det.name}</span>: {det.amount}{" "}
                            </li>
                        ))}
                        <h3>przychody</h3>
                        {income.map((det, index)=>(
                            <li key={index}>
                                <span>{det.name}</span>: {det.amount}{" "}
                            </li>
                        ))}
                        {offType}
                    </p>
                </div>

            </form>
        
    );
}

export default Expense;