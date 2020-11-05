import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

function PostDetails({post}){
    return(
        <div className='post-card'>
            <Link to={`/posts/${post.id}`} className='link-style'>
                <h1> {post.id}</h1>
                <p className='title'> {post.title}</p>
                <p className='body'>Content: {post.body}</p>
            </Link>
        </div>

    );
}

export default PostDetails;