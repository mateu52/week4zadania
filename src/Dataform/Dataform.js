import React from 'react';

function Dataform(){

    return(
        <form>
            <input name="name"></input>
            <input name="email"></input>
            <textarea name="bio"></textarea>
            <button value="radio" name="gender"></button>
            <button value="checkbox" name="regulations"></button>
            <button value="submit"></button>
        </form>
    );
}

 export default Dataform;