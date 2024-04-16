<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Define database connection parameters
    $servername = "localhost"; // Change this if your MySQL server is hosted elsewhere
    $username = "root"; // Your MySQL username
    $password = "xmrb2341"; // Your MySQL password
    $dbname = "contactdb"; // Your MySQL database name

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Prepare and bind SQL statement
    $stmt = $conn->prepare("INSERT INTO contact-info (name, email, number, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssis", $name, $email, $number, $message);

    // Set parameters and execute
    $name = $_POST["name"];
    $email = $_POST["email"];
    $number = $_POST["number"];
    $message = $_POST["message"];

    if ($stmt->execute()) {
        echo "Form submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close(); 
}

?>
