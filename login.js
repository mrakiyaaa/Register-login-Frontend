document.getElementById('loginButton').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        const loginData = {
            email: email,
            password: password
        };

        fetch('http://localhost:8090/api/v1/employee/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
        .then(response => response.json())
        .then(data => {
            if (data.statues) {
                alert('Login successful!');
                window.location.href = "dashboard.html";  
            } else {
                alert('Login failed: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error during login:', error);
            alert('An error occurred. Please try again later.');
        });
    } else {
        alert('Please fill in both email and password.');
    }
});
