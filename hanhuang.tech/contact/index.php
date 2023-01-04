<?php
$response = [];
// body
$to = $_POST['email'];
$subject = $_POST['subject'];
$message ="From: $_POST['name'] \n Team: $_POST['team'] \n Message: $_POST['message']";

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