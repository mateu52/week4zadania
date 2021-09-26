import React  ,{useState} from 'react';
import expenseData from './expensData.json';




function Licznik(prop){
  expenseData.map((det, index)=>
    console.log(prop)
  )
}

export default Licznik;

/* 
{incomeData.map((det, index)=>(
    <li key={index}>
        <span>{det.name}</span>: {det.amount}{" "}
        <button>-</button>
    </li>
))} */