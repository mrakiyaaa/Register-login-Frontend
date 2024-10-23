document.getElementById('registerButton').addEventListener('click', () => {
    const employeeName = document.getElementById('employeeName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (employeeName && email && password) {
        const registerData = {
            employeeName: employeeName,
            email: email,
            password: password
        };

        fetch('http://localhost:8090/api/v1/employee/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registerData),
        })
        .then(response => response.text())
        .then(data => {
            alert('Registration successful! Employee Name: ' + data);
        })
        .catch(error => {
            console.error('Error during registration:', error);
            alert('An error occurred. Please try again later.');
        });
    } else {
        alert('Please fill in all fields.');
    }
});
