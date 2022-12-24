<?php
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$team = $_POST['team'];
$to = "han@hanhuang.tech";

$txt ="Name = ". $name . "\r\n Message =" . $email . $message . $team . "\r\n Email = " . ;
 
// $headers = "From: noreply@demosite.com" . "\r\n" .
//             "CC: somebodyelse@example.com";
if ($email != null) {
    mail($to, $txt);
}
 
// redirect once mail sent
header("Location:index.html");
?>