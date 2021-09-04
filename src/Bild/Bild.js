import React ,{useState} from 'react';



class Bild extends React.Component{
    state={
        name:'',
        surname:'',
        age:''
    }
    constructor(props){
        super(props);
        this.supernameInput =React.createRef();
    }
    sendForm=(event) =>{
        event.preventDefault();
    }
    sendClick=(event)=>{
        console.log("React bott...");

    }
    sendChange=(event)=>{
        //const keyName= event.target.name;
        this.setState({ [event.target.name ] : event.target.value});
    }
    sendFocus=()=>{
        this.supernameInput.current.focus();
        this.supernameInput.current.value='Kowalski';
        this.supernameInput.current.style.border= '#f00 1px solid';
    }

    render() {
    
        return(
            <form onSubmit={ this.sendForm }>
                <div>
                    <input type="text" name="name" placeholder="Name" onChange={ this.sendChange } />
                </div>
                <div>
                    <input type="text" ref={this.supernameInput} name="surname" placeholder="Surname" onChange={ this.sendChange } />
                </div>
                <div>
                    <input type="text" name="age" placeholder="Age" onChange={ this.sendChange } />
                </div>
                <button type="submit" onClick={ this.sendClick }>Send</button>
                <button type="button" onClick={ this.sendFocus }>Focus</button>
            </form>
            );
    }
        
} 




/* function useInput(initialValue=''){
    const [value, setValue]=useState('');

    const sendChange=(event)=>{
        setValue(event.target.value);
    };

    return [value, sendChange];
}

function Bild(){

    const [name, setName]=useInput('');
    const [surname, setSurname]=useInput('');
    const [age, setAge]=useInput('');


    const sendClick=()=>console.log('React butt..');
    const sendForm=(event)=>{
        event.preventDefault();
    }

    return(
        <form onSubmit={ sendForm }>
                <div>
                    <input type="text" name="name" placeholder="Name" onChange={ setName } />
                </div>
                <div>
                    <input type="text" name="surname" placeholder="Surname" onChange={ setSurname } />
                </div>
                <div>
                    <input type="text" name="age" placeholder="Age" onChange={ setAge } />
                </div>
                <button type="submit" onClick={ sendClick }>Send</button>
        </form>
    );
} */



export default Bild; 