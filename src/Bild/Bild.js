import React, { useState } from 'react';

/* function Bild(){
    const [form, sendForm] = useState('');
    const [netto, sendNetto] = useState('');
    const [input, sendInput] = useState('');
    const [brutto, sendBrutto] = useState('');

    return(
        <div>
            <form onSubmit={sendForm}>
                <div><h5>Podaj Kwote:</h5>
                    <input type="number" name="netto" placeholder="netto" onClick={sendNetto}></input>
                </div>
                <div><h6>napiwek:
                    <select  onClick={sendInput}>
                        <option value='0.05' type="number" name="gratuity">5%</option>
                        <option value='0.10' type="number" name="gratuity">10%</option>
                        <option value='0.15' type="number" name="gratuity">15%</option>
                        <option value='0.20' type="number" name="gratuity">20%</option>
                    </select>
                </h6></div>
                <div>
                    <button type="button" onClick={sendBrutto} name="brutto">Przelicz</button>
                </div>
            </form>
        </div>
    )
} */

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
    }
    sendBrutto=(event)=>{
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
            </div>
        )
    }
}
 
export default Bild;
