function getUserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json()) // Parse the response as JSON
        .then(users => {
            const container = document.getElementById('container');
            container.innerHTML = ''; // Clear the container before adding new content

            users.forEach(user => {
                const postDiv = document.createElement('div');
                postDiv.innerHTML = `
                    <ul>
                    <li><h3>Name: ${user.name}</h3></li>
                    <p>Email: ${user.email}</p>
                    <p>Company: ${user.company.name}</p>
                    </ul>
                `;
                container.appendChild(postDiv); // Append the user data to the container
            });
        })
        .catch(error => console.error('Error fetching user data:', error));
}
