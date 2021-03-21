import React, { useState, useEffect } from 'react';

import { getPosts, deletePost } from './utils/DB';

import Post from './components/Post';
import PostForm from './components/PostForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

    const [posts, setPosts] = useState([]);
    const [modeDelete, setModeDelete] = useState(false);

    useEffect(() => {
        refreshPosts();
    }, []);

    const refreshPosts = (content) => {
        if (content && content === "!delete") {
            setModeDelete(!modeDelete);
            return;
        }

        getPosts((posts) => {
            if (posts) setPosts(posts.reverse());
        });
    }

    const handleDeletePost = (id) => {
        if (!modeDelete) return;
        deletePost(id, () => { refreshPosts() });
    }

    return (
        <div className="container mb-5">
            <PostForm onPost={refreshPosts} />
            <hr />
            <div className={`card-columns ${modeDelete && 'delete'}`}>
                {
                    posts.map((post) => (<Post key={post._id} data={post} onDelete={handleDeletePost} />))
                }
            </div>
        </div>
    )
}

export default App;