<?php
// get data from
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$pokemon = $_POST['pokemon'];
$email= $_POST['email'];
$message= $_POST['message'];
 
$to = "han@hanhuang.tech";
$subject = "This is the subject line";
 
// name = user entered
// email = user entered
// message = user entered
$txt ="Name = ". $fname . $lname . $pokemon . "\r\n Email = " . $email . "\r\n Message =" . $message;
 
// $headers = "From: noreply@demosite.com" . "\r\n" .
//             "CC: somebodyelse@example.com";
if ($email != null) {
    mail($to, $subject, $txt);
}
 
// redirect once mail sent
header("Location:index.html");
?>