<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validate inputs
    if (!empty($username) && !empty($email) && !empty($password)) {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Further password validation can be added here if needed

            // If everything is valid, you might redirect to a success page or perform database insertion
            // Example: Perform SQL INSERT operation into the users table
            // $query = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";
            // Execute the query using your database connection
            
            echo "Registration successful for $username with email $email";
        } else {
            echo "Invalid email format!";
        }
    } else {
        echo "Please fill in all the fields!";
    }
}
?>
