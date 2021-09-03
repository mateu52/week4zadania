import React ,{useState} from 'react';

class Bild extends React.Component{
    state={
        name:'',
        surname:'',
        age:''
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
    render() {
    
        return(
            <form onSubmit={ this.sendForm }>
                <div>
                    <input type="text" name="name" placeholder="Name" onChange={ this.sendChange } />
                </div>
                <div>
                    <input type="text" name="surname" placeholder="Surname" onChange={ this.sendChange } />
                </div>
                <div>
                    <input type="text" name="age" placeholder="Age" onChange={ this.sendChange } />
                </div>
                <button type="submit" onClick={ this.sendClick }>Send</button>
            </form>
            );
    }
        
}




/* function useInput(initialValue= ''){
    const [value, setValue] = useState('ss');

    const optionChange = (event) => {
        setValue(event.target.value);
    };

    return [value, optionChange];
}

function Bild(){
    const [netto, setNetto] = useInput('');
    const [procent, setProcent] = useInput('a');

    function sendForm(event){
            event.preventDefault();
            <p>{netto}</p>
       
    };

    return(
        <form onSubmit={ sendForm}>
            <input type="number" onChange={ setNetto } name="netto" placeholder="netto..." />
            <select  >
                <option >wielkość napiwku(%)</option>
                <option value="5"   onChange={useInput}>5%</option>
                <option value="10"  onChange={setProcent}>10%</option>
                <option value="15"  onChange={setProcent}>15%</option>
                <option value="20"  onChange={setProcent}>20%</option>
            </select>
            <button type="submit">Przelicz</button>
        </form>
       
    );
}
*/


export default Bild; 