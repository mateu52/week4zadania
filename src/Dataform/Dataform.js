import React, {useState, useRef} from 'react';

function useCheck(initialValue){
    const [value, setValue]=useState(initialValue);

    const reset = () => {
        setValue(initialValue);
    }

    const sendChange=(event)=>{
        setValue(event.target.value);
    };

    return [value, sendChange, reset];
}


function Dataform(){

    const offName= useRef();
    const offEmail= useRef();
    const offBio = useRef();
    const offGender = useRef();
    const offCheck = useRef();
    const checkboxMessage = useRef();
    const genderMessage =useRef();

    const [name, setName, resetName] =useCheck("");
    const [email, setEmail, resetEmail] =useCheck("");
    const [bio, setBio, resetBio] =useCheck('');
    const [gender, setGender, resetGender] =useCheck('');
    const [reguls, setReguls] =useState(false);
    //const [submit, setSubmit] =useState('');
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
    const onReguls=()=>{
        setReguls(true);
    }

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
            genderMessage.current.textContent="Podaj płeć";
        }
        else{
            offGender.current.style.border='none';
        }
        if (reguls === false){
            offCheck.current.style.border = "2px solid red";
            checkboxMessage.current.textContent =
            "Potwierdź zapoznanie się z regulaminem!!";
        }
        else{
            offCheck.current.style.border='none';
        }
        if(
            name !== '' &&
            email !== '' &&
            bio !== '' &&
            (radio1 || radio2) ===true &&
            reguls === true 
        ){
            alert("Dziekujemy za wysłanie");
            resetName('');
            resetEmail('');
            resetBio('');
            resetGender("");
            setRadio1(false);
            setRadio2(false);
            setReguls(false);
        }
    };

    return(
        <form onSubmit={sendForm}>
            <div>
                <input
                        placeholder="imie"  
                        type="text"
                        value={name}
                        ref={offName} 
                        onChange={setName}  >
                        </input>
            </div><div>
                <input
                        placeholder="email" 
                        type="text"
                        value={email}
                        ref={offEmail} 
                        onChange={setEmail} >
                        </input>
            </div><div>
                <textarea 
                        onChange={setBio} 
                        ref={offBio} 
                        value={bio}
                        type="text"
                        placeholder="BIO"
                        >
                </textarea>
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
                <p ref={genderMessage}></p>
            </div>
            <div>
                <label ref={offCheck}><input 
                    type="checkbox" 
                    checked={reguls}
                    onChange={onReguls}
                    />
                    regulamin</label>
                    <p ref={checkboxMessage} ></p>
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