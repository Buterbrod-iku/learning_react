import React, {useState} from 'react';
import style from './Create.module.css';
import Post from "./Post/Post";

const CreatePost = () => {
    const [posts, setPost] = useState([
        {title: '12', text: '34'}
    ]);

    const [title,setTitle] = useState('');
    const [text,setText] = useState('');

    const Create = (e) => {
        e.preventDefault();
        const newPost = {title, text};
        setPost([...posts, newPost]);
    }

    return (
        <div className={style.listPost}>
            <form>
                <input type="text" placeholder='Title' onChange={event => setTitle(event.target.value)}/>
                <input type="text" placeholder='Text' onChange={event => setText(event.target.value)}/>
                <button onClick={Create}>create</button>
            </form>
            {posts.map((post, index) =>
                <Post head={post.title} body={post.text}/>
            )}
        </div>
    );
};

export default CreatePost;