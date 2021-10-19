// XHR Object Methods and Working with text

document.querySelector('#button').addEventListener('click', 
loadData);

function loadData() {
   

    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN
    // Specify type of request, and url or file name we want  
    // to make it to
    xhr.open('GET', 'data.txt', true);

    // console.log('READYSTATE', xhr.readyState);

    // Optional - Used for spinners/ loaders
    xhr.onprogress = function() {
        console.log('READYSTATE', xhr.readyState);
    }

// // 1st METHOD WE USED // /// // // ///
    xhr.onload = function() {
        console.log('READYSTATE', xhr.readyState);
        if(this.status === 200) {
            // console.log(this.responseText);
            document.querySelector('#output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // OLDER METHOD
// // 2nd METHOD WE UED // // / /// //
    // xhr.onreadystatechange = function() {
    //     console.log('READYSTATE', xhr.readyState);
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.onerror = function() {
        console.log('Request error...');
    }

    xhr.send();

    // readyState Values
    // 0: request not initialized
    // 1: server connection established
    // 2: request recieved
    // 3: processing request
    // 4: request finished and response is ready

    // HTTP Statuses
    // 200: 'OK'
    // 403: 'Forbidden'
    // 404: 'Not Found'


}