import React, {useRef} from 'react';


function Button(){
    const offFocus=useRef();

    const styles={
        backgroundColor:"blue",
        textAlign:"center",
    }
    const leave={
        backgroundColor:"white",
        color:"red"
    }
    
    const over={
        backgroundColor:"red",
        color:"white"
    }
    const leaveB=()=> {
        offFocus.current.style.background=leave.backgroundColor;
        offFocus.current.style.color=leave.color;
    }
    const overB=()=> {
        offFocus.current.style.background=over.backgroundColor;
        offFocus.current.style.color=over.color;
    }


    return(
        <div style={styles} >
            <button 
                    ref={offFocus}
                    onMouseLeave={leaveB}
                    onMouseOver={overB}
            >App</button>
        </div>
    )
}

export default Button;
