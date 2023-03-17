console.log("Hello from the console!");

const appid = "bcb83c4b54aee8418983c2aff3073b3b";
const city = "London,UK";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response);
        }
    })
    .then(data => {
        console.log("Success!");
        console.log(data)
    })
    .catch(errorResponse => {
        console.log("Failure")
        console.error(response);
    });


console.log("The AJAX request has been dispatched.")

// Your code here