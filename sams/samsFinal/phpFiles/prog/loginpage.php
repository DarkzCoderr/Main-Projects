<?php
session_start();

$servername = "localhost";
$username = "root";
$password = "";
$database = "studentManagement";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $inputUsername = $conn->real_escape_string($_POST['username']);
    $inputPassword = $conn->real_escape_string($_POST['password']);

    $sql = "SELECT * FROM logintable WHERE username = '$inputUsername';";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();
        $hashedPassword = $row['password'];

        if (password_verify($inputPassword, $hashedPassword)) {
            $_SESSION['username'] = $inputUsername;
            header("Location: dirname('/samsFinal/htmlFiles/postLog')");
            exit();
        }
    }

    echo "<script>
            alert('Invalid credentials. Please try again.');
            window.location.href = '/samsFinal/htmlFiles/prog/loginpage.html';
          </script>";
    exit();
}

$conn->close();
?>