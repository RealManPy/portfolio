<?php

$correct_password_hash = 'e11518fe4282c7feabf0b7e76a1aba14d5dde35683cd4a86aa807154b6f317ad';

if (isset($_POST['password'])) {
    $entered_password = $_POST['password'];
    if (hash("sha256",$entered_password) === $correct_password_hash) {
        include("3QY@72JvT^&QJE8fJCMAIN.html");
        exit();
    } else {
        echo "Incorrect password. Please try again.";
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>LOGIN</title>
	<style>
		body {
			text-align:center;
			font-family: Courier New;
			font-size:50px;
			background-color: black;
			color: #00FF00;
		}
		input {
			height: 60px;
			width: 800px;
			font-size:50px;
			background-color: black;
			color: white;
			border: 3px solid #ccc;
		}
	</style>
</head>
<body>
    <h1>Log In To Access The Page</h1>
    <form method="POST">
        <input type="password" name="password">
    </form>
</body>
</html>