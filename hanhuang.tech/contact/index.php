<?php
$response = [];
// body
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$team = $_POST['team'];
$body ="From: $name \n Team: $team \n Message: $message";

// header
$recipient = "noreply@hanhuang.tech";
$header = "Recipient: $recipient \r\n From: $email \r\n";

// conditions
if (isset($email, $name, $message)) {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $response[] = 'Please enter a valid email address';
    }
    if (empty($name) || empty($email) || empty($message)) {
		$response[] = 'Please complete all fields';
	} 
    if (mail($header, $body)) {
        $response[] = 'Message sent!';		
    } else {
        $response[] = 'Message could not be sent! Something seems to be wrong :-(';
    }
}
?>