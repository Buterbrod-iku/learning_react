import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    const Check = (text) =>{
        if(text !== ''){
            return true
        } else {
            return false
        }
    }

    return (
        <div className={style.blockPost}>
            <h2>{Check(props.head) ? props.head : 'WTF'}</h2>
            <p>{Check(props.body) ? props.body : 'WTF'}</p>
        </div>
    );
};

export default Post;