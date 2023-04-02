import React from 'react';
import style from './main.module.css';

const Design = (props) => {
    return (
        <div className={style.border}>
            {props.content}
        </div>
    );
};

export default Design;