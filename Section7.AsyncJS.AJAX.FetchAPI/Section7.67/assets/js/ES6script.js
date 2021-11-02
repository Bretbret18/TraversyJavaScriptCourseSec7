
// ES6 Fetch API 

document.querySelector('#button1')
.addEventListener('click', getText);

document.querySelector('#button2')
.addEventListener('click', getJson);

document.querySelector('#button3')
.addEventListener('click', getExternal);

// Get local text file
function getText() {
    fetch('sample.txt')
    .then(res => res.text())
    .then(data => {
        console.log(data);
        document.querySelector('#output').innerHTML = data;
    })
  .catch(err => console.log(err))
};

// Get local JSON data
function getJson() {
    fetch('posts.json')
    .then(res => res.json()) 
    .then(function(data) {
        console.log(data);
        let output = '';
        data.forEach(function(post) {
            console.log(post.title);
            output += `<li>${post.title}</li>`;
        });
        document.querySelector('#output').innerHTML = output;
    })
    .catch(err => console.log(err));
    
};

// Get from external API
function getExternal() {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let output = '';
        data.forEach(function(user) {
            console.log(user.login);
            output += `<li>${user.login}</li>`;
        });
        document.querySelector('#output').innerHTML = output;
    })
    .catch(err => console.log(err));
};


