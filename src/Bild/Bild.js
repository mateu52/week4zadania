import React ,{useState} from 'react';

function Bild(){
    const [val, setVal] = useState("-");
    const sum=val; 
    const setValue=()=><div>
        <h1>hello</h1>
    </div>

    return(
        <div>
            <input type="number" name="netto" placeholder="netto..."></input>
            <select>
                <option value="5">5%</option>
                <option value="10">10%</option>
                <option value="15">15%</option>
                <option value="20">20%</option>
            </select>
            <button onClick={ setValue }>Przelicz</button>
            <h1>{setValue}</h1>
        </div>
    );
}



export default Bild;