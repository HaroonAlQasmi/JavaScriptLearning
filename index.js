fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(
        data => {
            console.log("This is data: ".concat(JSON.stringify(data)))
        }
    )
    .catch(error => console.error(error));