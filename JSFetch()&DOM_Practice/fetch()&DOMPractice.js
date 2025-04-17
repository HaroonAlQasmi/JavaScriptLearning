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
