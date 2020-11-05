import React, {useState, useEffect} from 'react';
import '../App.css';
import GoBack from './GoBack';

function ShowPost({ match }){
    useEffect(() => {
        fetchPost();
    }, []);

    const [post, setPost] = useState([]);

    const fetchPost = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`);
        const post = await data.json();
        setPost(post);
    }

    if(post.length === 0){
        return <h2>Loading...</h2>
    }
    return(
        <div>
            <GoBack></GoBack>
            <div className='post-card'>
                <h1> Post {post.id} from User {post.userId} </h1>
                <p className='title'> {post.title}</p>
                <p className='body'>Content: {post.body}</p>
            </div>
        </div>

    );
}

export default ShowPost;