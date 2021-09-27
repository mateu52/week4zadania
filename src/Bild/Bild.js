import React, { useState } from 'react';


function FormInit(event){
    const [val, setVal]=useState(0);

    const handleVal=(event)=>{
        setVal(event.target.value);
    }
    return [val, handleVal];

}

function Bild(){
    const [form, sendForm] = FormInit('');
    const [netto, setNetto] = useState(0);
    const [input, setInput] = useState(0);
    const [result, setResult] = useState(0);
    const sendBrutto=(e)=>{
        e.preventDefault();
        if(netto!==''){
            setResult((netto*input).toFixed(2));
            console.log(result);
        }
    }
    const sendNetto=(e)=>{
        setNetto(e.target.value)
    }
    const sendInput=(e)=>{
        setInput(e.target.value)
    }
    return(
        <div>
            <form onSubmit={sendForm}>
                <div><h5>Podaj Kwote:</h5>
                    <input type="number"
                    name="netto"
                    placeholder="netto"
                    onChange={sendNetto}
                    value={netto}
                    ></input>
                </div>
                <div><h6>napiwek:
                    <select  onChange={sendInput} value={input}>
                        <option value='0.05' type="number" name="gratuity">5%</option>
                        <option value='0.10' type="number" name="gratuity">10%</option>
                        <option value='0.15' type="number" name="gratuity">15%</option>
                        <option value='0.20' type="number" name="gratuity">20%</option>
                    </select>
                </h6></div>
                <div>
                    <button type="button" 
                    onClick={sendBrutto}
                     name="brutto"
                     >Przelicz</button>
                </div>
            </form>
            <h5>{result}</h5>
        </div>
    )
}
/* 
 class Bild extends React.Component {
    state={
        netto:0,
        gratuity:0,
        brutto:0
    }
    sendNetto=(event)=>{
        this.setState({netto:event.target.value});
    }
    sendINput=(event)=>{
        this.setState({gratuity:event.target.value});
    }
    sendForm=(event) =>{
        event.preventDefault();
        alert(JSON.stringify(event));
    }
    sendBrutto=()=>{
        this.setState({brutto:(this.state.netto*this.state.gratuity).toFixed(2)})
    }
    render(){
        return(
            <div>
                <form onSubmit={this.sendForm}>
                    <div><h5>Podaj Kwote:</h5>
                        <input type="number" name="netto" placeholder="netto" onClick={this.sendNetto}></input>
                    </div>
                    <div><h6>napiwek:
                        <select  onClick={this.sendINput}>
                            <option value='0.05' type="number" name="gratuity">5%</option>
                            <option value='0.10' type="number" name="gratuity">10%</option>
                            <option value='0.15' type="number" name="gratuity">15%</option>
                            <option value='0.20' type="number" name="gratuity">20%</option>
                        </select>
                    </h6></div>
                    <div>
                        <button type="button" onClick={this.sendBrutto} name="brutto">Przelicz</button>
                    </div>
                </form>
                <h1>{this.state.brutto}</h1>
            </div>
        )
    }
}
  */
export default Bild;
