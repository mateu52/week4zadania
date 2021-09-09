import React, {useState, useRef} from 'react';

function useCheck(initialValue){
    const [value, setValue]=useState(initialValue);

    const sendChange=(event)=>{
        setValue(event.target.value);
    };

    return [value, sendChange];
}


function Dataform(){

    const offName= useRef();
    const offEmail= useRef();
    const offBio = useRef();
    const offGender = useRef();
    const offCheck = useRef();

    const [name, setName] =useState('');
    const [email, setEmail] =useState('-');
    const [bio, setBio] =useState('-');
    const [gender, setGender] =useCheck('');
    const [reguls, setReguls] =useState(false);
    const [submit, setSubmit] =useState('-');
    const [radio1, setRadio1] =useState(false);
    const [radio2, setRadio2] =useState(false);


    const sendForm=(event)=>{
        event.preventDefault();
    }

    const handleRadio1 =() =>{
        setRadio1(true);
        setRadio2(false);
    };
    const handleRadio2 =() =>{
        setRadio1(false);
        setRadio2(true);
    };

    const sendSubmit=(event)=>{
        if(offName.current.value===''){
            offName.current.focus();
            offName.current.style.border='#f00 1px solid';
            offName.current.value='Pole wymagane';
        }else{
            offName.current.style.color='black';
        }
        if(offEmail.current.value===''){
            offEmail.current.focus();
            offEmail.current.style.border='#f00 1px solid';
            offEmail.current.value='Pole wymagane';
        }else{
            offEmail.current.style.color='black';
        }
        if(offBio.current.value===''){
            offBio.current.focus();
            offBio.current.style.border='#f00 1px solid';
            offBio.current.value='Pole wymagane';
        }else{
            offBio.current.style.color='black';
        }
        if(gender ===""){
            offGender.current.style.border = "2px solid red";
        }
        else{
            offGender.current.style.border='none';
        }
        if (reguls === false){
            offCheck.current.style.border = "2px solid red";
        }
        else{
            offCheck.current.style.border='none';
        }
    }

    return(
        <form onSubmit={sendForm}>
            <div>
                <input name="name" placeholder="imie"  ref={offName} onClick={setName}  ></input>
            </div><div>
                <input name="email" placeholder="email" ref={offEmail} onClick={setEmail} ></input>
            </div><div>
                <textarea name="bio" onClick={setBio} ref={offBio} ></textarea>
            </div>
            <div ref={offGender}>
                <label>
                    <input 
                            type="radio" 
                            value="female"
                            checked={radio1}
                            onClick={handleRadio1} 
                            onChange={setGender}
                    />
                    kobieta
                </label>
                <label>
                    <input 
                            type="radio" 
                            value="male"
                            checked={radio2}
                            onClick={handleRadio2} 
                            onChange={setGender}
                    />
                    mezczyzna
                </label>
            </div>
            <div>
                <label ref={offCheck}><input 
                    type="checkbox" 
                    Checked={reguls}
                    onChange={setReguls}
                    />
                    regulamin</label>
            </div><div>
                <button type="button" 
                    name="submit" 
                    onClick={sendSubmit} >
                Wyślij
                </button>
            </div>
        </form>
    );
}

 export default Dataform;