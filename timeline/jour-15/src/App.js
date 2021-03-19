import React, { useState, useEffect } from 'react';

import { getPosts } from './utils/DB';

import Post from './components/Post';
import PostForm from './components/PostForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        refreshPosts();
    }, []);

    const refreshPosts = () => {
        getPosts((posts) => {
            if (posts) setPosts(posts.reverse());
        });
    }

    return (
        <div className="container mb-5">
            <PostForm onPost={refreshPosts} />
            <hr />
            <div className="card-columns">
                {
                    posts.map((post) => (<Post key={post._id} data={post} />))
                }
            </div>
        </div>
    )
}

export default App;