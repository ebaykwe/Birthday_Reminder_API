document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        dateOfBirth: document.getElementById('dateOfBirth').value,
    };

    try {
        const response = await fetch('http://localhost:5000/api/users/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert('User added successfully!');
        } else {
            alert('Error adding user');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while adding the user.');
    }
});
