let posts = [
    { title: 'Post One', body: 'This is Post One', createdAt: new Date().getSeconds() },
    { title: 'Post Two', body: 'This is Post Two', createdAt: new Date().getSeconds() }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}--------${post.body} 
            --------created ${new Date().getSeconds()-post.createdAt} seconds ago</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push({...post, createdAt:new Date().getSeconds()});
        callback();
    }, 2000);
}
createPost({ title: 'Post Three', body: 'This is Post Three' }, getPosts);

function create4thPost(post, callback) {
    setTimeout(() => {
        posts.push({...post, createdAt:new Date().getSeconds()});
        callback();
    }, 3000);
}

create4thPost({ title: 'Post Four', body: 'This is Post Four' }, getPosts);
