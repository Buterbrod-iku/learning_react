import React from 'react';
import {useState} from "react";

const vas = (text) =>{
    if(Number(text) > 100){
        // edit color RED
        return true
    } else{
        // edit color GREEN
        return false
    }
}

const VariableColor = () => {
    const [setItem, setText] = useState('');

    return (
        <div>
            <h1>Test use-input</h1>
            <input type="text" value={setItem} onChange={event => setText(event.target.value)}/>
            <h3 style={{
                color: vas(setItem) ? 'red' : 'green',
            }}>{setItem}</h3>
        </div>
    );
};

export default VariableColor;