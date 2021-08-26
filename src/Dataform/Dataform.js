import React from 'react';

const function Dataform(){

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

default export Dataform;