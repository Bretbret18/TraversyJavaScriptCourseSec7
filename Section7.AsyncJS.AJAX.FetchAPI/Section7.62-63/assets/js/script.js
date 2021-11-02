// CALLBACK FUNCTIONS // ***
// Callback function- simply a function
// that is passed in as a parameter inside
// of another function then its ran inside
// of the function body

const posts = [
    {title: 'Post One',body: 'This is post one'},
    {title: 'Post Two',body: 'This is post two'}
];

// function createPost() {
//     setTimeout(function(post) {
//         posts.push(post);
//     }, 2000);
// };


// function getPosts() {
//     setTimeout(function() {
//         let output = '';
//         posts.forEach(function(post) {
//             output += `<li>${post.title}</li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// };

// createPost({title: 'Post Three', body: 'this is post three'});

// getPosts();

function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
};


function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post) {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

createPost({
    title: 'Post Three', body: 'this is post three'
}, getPosts);




















// CALLBACK FUNCTIONS END // ***