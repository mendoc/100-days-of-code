
const url = 'https://post-public.netlify.app/.netlify/functions/post';

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

const deletePost = (id, callback) => {
    fetch(url,
        {
            method: 'POST',
            body: JSON.stringify({ id: id, mode: "delete" })
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
exports.deletePost = deletePost;