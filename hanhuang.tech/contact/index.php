<?php

$errors = '';
$recipient = 'han@hanhuang.tech';
if(empty($_POST['name'])  || 
   empty($_POST['email']) || 
   empty($_POST['message']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['name']; 
$email = $_POST['email']; 
$message = $_POST['message']; 

if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email))
{
    $errors .= "\n Error: Invalid email address";
}
if( empty($errors))

{

$to = $recipient;

$subject = "Contact form submission: $name";

$email_body = "You have received a new message. ".

" Here are the details:\n Name: $name \n ".

"Email: $email\n Message \n $message";

$headers = "From: $recipient\n";

$headers .= "Reply-To: $email";

mail($to,$subject,$email_body,$headers);

//redirect to the 'thank you' page

header('Location: thankyou.html');

}



?>