import React, {useState, useEffect} from 'react';
import PostDetails from './PostDetails';
import GoBack from './GoBack';
import Filter from './Filter';

function Posts(){
    let postMap;

    useEffect(() => {
        fetchPosts();
    }, []);

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await data.json();
        setPosts(posts);
    }

    const [filterValue, setFilter] = useState('');
    const handleFilter = (value) =>{
        setFilter(value);
        console.log(filterValue);
    }

    if(filterValue === ''){
        postMap = posts.map(post => (
            <PostDetails key={post.id} post={post}></PostDetails>
        ));
    }else{
        postMap = posts.filter(post => post.title.toLowerCase().includes(filterValue.toLowerCase())).
            map(post => (
            <PostDetails key={post.id} post={post}></PostDetails>
        ));
    }

    return(
        <div>
            <GoBack></GoBack>
            <h1> Posts </h1>
            <Filter handleFilter={handleFilter} placeholder='Search with Author Name or Title'></Filter>
            {postMap}
        </div>

    );
}

export default Posts;