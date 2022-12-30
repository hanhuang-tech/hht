<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$team = $_POST['team'];
$formcontent ="From: $name \n Team: $team \n Message: $message";
$recipient = "han@hanhuang.tech";
$subject = "Message from contact form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>