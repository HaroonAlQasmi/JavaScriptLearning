function getUserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) // Parse the response as JSON
        .then(users => {
            const container = document.getElementById('container');
            users.forEach(user => {
                const userDiv = document.createElement('div');
                userDiv.innerHTML = `
                    <ul>
                    <li><h3>Name: ${user.name}</h3></li>
                    <p>Email: ${user.email}</p>
                    <p>Company: ${user.company.name}</p>
                    </ul>
                `;
                container.appendChild(userDiv); // Append the user data to the container
            });
        })
        .catch(error => console.error('Error fetching user data:', error));
}
function getPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(posts => {
        const container = document.getElementById('container2');
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            `;
            container.appendChild(postDiv);
        });
    })
}
function postText() {
    let userTitle = document.getElementById("userTitle").value; // Use .value to get input value
    let userTextArea = document.getElementById("userTextArea").value; // Use .value to get textarea value

    // Create the data object to send
    const postData = {
        title: userTitle,
        body: userTextArea,
        userId: 1, // Example user ID
    };

    // Use fetch() to send a POST request
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // Specify the HTTP method
        headers: {
            'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(postData), // Convert the data object to a JSON string
    })
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            console.log('Post created:', data); // Log the response from the server
            alert(`Post submitted successfully!\n\nID: ${data.id}\nTitle: ${data.title}\nBody: ${data.body}`);
        })
        .catch(error => console.error('Error creating post:', error)); // Handle errors
}

