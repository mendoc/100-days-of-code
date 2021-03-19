
const url = 'https://cross-origin.herokuapp.com/https://post-public.netlify.app/.netlify/functions/post';

const getPosts = (callback) => {
    fetch(url).then(res => {
        if (res.status === 200) return res.json();
    })
        .then(data => {
            callback(data);
        }).catch(err => {
            callback(false);
            console.log(err);
        });
}

const addPost = (content, callback) => {
    fetch(url,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: content })
        }
    ).then(res => res.json())
        .then(res => {
            console.log(res);
            callback(res);
        }).catch(err => {
            callback(false);
            console.log(err);
        });
}


exports.getPosts = getPosts;

exports.addPost = addPost;