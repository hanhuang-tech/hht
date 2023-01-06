<?php
$response = [];
// body
$to = $_POST['email'];
$subject = $_POST['subject'];
$name = $_POST['name'];
$team = $_POST['team'];
$message = $_POST['message']
$message ="From: $name \r\n Team: $team \r\n Message: $message \r\n";

// headers
$recipient = "noreply@hanhuang.tech";
$headers = "Recipient: $recipient \r\n From: $to \r\n";

// send email
if(mail($to, $subject, $message, $headers)){
    echo "successfully  mailed";
}
else{
    echo "Failure";
}

?>