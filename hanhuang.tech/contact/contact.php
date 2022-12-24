<?php
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$team = $_POST['team'];
$txt ="Name = ". $name . "\r\n Message =" . $email . $message . $team . "\r\n Email = " . ;

$to = "han@hanhuang.tech"; 

if ($email != null) {
    mail($to, $txt);
}
 
// redirect once mail sent
header("Location:index.html");
?>