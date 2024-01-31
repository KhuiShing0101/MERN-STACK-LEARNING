/*
    fetch

    In JavaScript, the fetch function is used to make network requests 
    and is commonly used to interact with APIs. 
    It returns a Promise that resolves to the Response to that request.
*/

fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data=>console.log(data))
    .catch(error=>console.error('Error:',error))

/*

    In this example:

    We use the fetch function to make a GET request to 'https://api.example.com/data'.
    We use the first .then() to handle the response and 
        call response.json() to parse the JSON content of the response.
    The second .then() is used to handle the actual data received, and in this case, 
        we log the data to the console.
    The .catch() is used to handle any errors that may occur during the fetch operation.

    Note: The fetch API is widely supported in modern browsers and 
        is the preferred way to make HTTP requests in many JavaScript applications.
*/

    async function fetchedData() {
        try {
            const response = await fetch('https://api.example.com/data');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

/*
    CASCADE in SQL used to simultaneously delete or update an entry from 
    both the child and parent table
*/