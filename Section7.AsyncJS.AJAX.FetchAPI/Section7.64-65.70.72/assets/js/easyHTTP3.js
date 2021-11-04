// EasyHTTP2 Library
// Library for making HTTP requests

/*
@version 2.0.0

*/

// Async and Await *************************
class EasyHTTP {

    // Make an HTTP GET request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json()
        return resData
    };


    // Make HTTP POST request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const resData = await response.json()
        return resData;
    };


    // Make an HTTP PUT Request
   async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await response.json()
        return resData;
    };


    // Make an HTTP DELETE Request
    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const resData = await 'resource deleted'
        return resData;
    };
};
