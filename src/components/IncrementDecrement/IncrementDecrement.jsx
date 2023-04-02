import React, {useState} from 'react';
import style from './main.module.css';

const IncrementDecrement = () => {
    const [count, setCount] = useState(0);

    const Increment = (e) => {
        e.preventDefault();
        setCount(count + 1);
    }

    const Decrement = (e) => {
        e.preventDefault();
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Increment}>increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
    );
};

export default IncrementDecrement;