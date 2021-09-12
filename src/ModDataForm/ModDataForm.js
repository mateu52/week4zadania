import { useForm } from "react-hook-form";
import React, {useState } from 'react';

function ModDataform(){

    const {register, handleSubmit} = useForm();
    const sendForm = (d) =>
        alert(JSON.stringify(d));

    const [radio1, setRadio1] =useState(false);
    const [radio2, setRadio2] =useState(false);

    const handleRadio1 =() =>{
        setRadio1(true);
        setRadio2(false);
    };
    const handleRadio2 =() =>{
        setRadio1(false);
        setRadio2(true);
    };

    return(
        <form onSubmit={handleSubmit(sendForm)}>
            <div>
                <input {...register("name")} >
                </input>
            </div><div>
                <input {...register("email")} >
                </input>
            </div><div>
                <textarea {...register("textarea")}>
                </textarea>
            </div>
            <div >
                <label>
                    <input {...register("female")}
                            type="radio"
                            onClick={handleRadio1}
                            checked={radio1}
                    />
                    kobieta
                </label>
                <label>
                    <input {...register("male")}
                            type="radio"
                            onClick={handleRadio2}
                            checked={radio2}
                    />
                    mezczyzna
                </label>
                <p ></p>
            </div>
            <div>
                <label><input {...register("reguls")}
                    type="checkbox"
                    />
                    regulamin</label>
                    <p></p>
            </div><div>
                <button type="submit"
                    value="submit"
                     >
                Wyślij
                </button>
            </div>
        </form>
    );
}

 export default ModDataform;