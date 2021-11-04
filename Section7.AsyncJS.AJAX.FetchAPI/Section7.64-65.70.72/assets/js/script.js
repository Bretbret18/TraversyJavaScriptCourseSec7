// CUSTOM HTTP LIBRARY (AJAX WITH CALLBACKS) Part 1 // ***

const http = new easyHTTP;

// GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts',
// function(err, posts) {
//     if(err) {
//         console.log(err);
//     } else {
//     console.log(posts);
//     };
// });

// GET Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1',
// function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//     console.log(post);
//     };
// });

// Create Data
const data = {
    userId: 42,
    title: 'Custom Post',
    body: 'This is a custom Post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts',
//     data, function (err, post) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(post);
//         };
//     });

// PUT
// Update Post
// 'updated userId: 42'
// http.put('https://jsonplaceholder.typicode.com/posts/42',
// data, function(err, post) {
//     if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(post);
//                 };
// });

// DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/42',
function(err, response) {
    if(err) {
        console.log(err);
    } else {
    console.log(response);
    };
});























// CUSTOM HTTP LIBRARY (AJAX WITH CALLBACKS) Part 1 END // ***