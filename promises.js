let posts = [
    { title: 'Post One', body: 'This is Post One', createdAt: new Date().getSeconds() },
    { title: 'Post Two', body: 'This is Post Two', createdAt: new Date().getSeconds() }
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            let error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error: Someting went wrong');
            }
        }, 2000);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(posts.length > 0) {
                resolve(posts.pop());
            } else {
                reject('There is no array inside catch');
            }
        }, 3000);
    });
}

createPost({ title: 'Post Three', body: 'This is Post Three' }).then(() => {
    getPosts();deletePost().then(() => {
        getPosts();deletePost().then(() => {
            getPosts();deletePost().then(() => {
                getPosts();deletePost().then(() => {}).catch(err => {console.log(err)})
            })
        })
    })
});

createPost({title:'Post Three',body:'This is Post Three'}).then(()=>{
    setTimeout(()=> {
        // getposts();
        deletePost() 
    },4000)
});

let users = [
    {user: 'Biswa', lastactivity: new Date().getSeconds()}
];

function createUser() {
    return new Promise((resolve,reject)=>{
    users.forEach( user=>{
       users.push(user)
     } )    
       if(users.push()){
           resolve(console.log("lastsctivity" + new Date().getTime()))
       }
       else{
           reject("failed");
       }
    })
}

function lastactivity() {
    return new Promise((resolve,reject)=>{
        users.lastactivity=new Date().getTime()
        let a = true;
        if(a){
        resolve(console.log("last activity updated to " + new Date().getTime()))
        }
        else {
            reject("good bye");
        }
    })
}

createUser({user:'Amar',lastactivity:new Date().getTime()})
Promise.all([createUser,lastactivity]).then((values)=>{
    console.log(values);
}).catch((message) =>{console.log(message)})

function deleteLast(){
    return new Promise((resolve, reject)=>{
     setTimeout(()=>{
       posts.pop();
       resolve("Deleted");

     },5000)

    }).then((msg)=> {
       console.log(msg);
       getposts();
   })

}