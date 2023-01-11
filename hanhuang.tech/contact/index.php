<?php
// message to user
$postData = $statusMsg = $statusErr = '';
$status = 'error';
// body
$to = $_POST['email'];
$subject = $_POST['subject'];
$name = $_POST['name'];
$team = $_POST['team'];
$message = $_POST['message'];


if(isset($_POST['submit'])){
    $postData = $_POST;

    if(empty($name)){
         $statusErr .= 'Please enter your name.<br/>';
    }
    if(empty($email) || filter_var($email, FILTER_VALIDATE_EMAIL) === false){
        $statusErr .= 'Please enter a valid email.<br/>';
    }
    if(empty($subject)){
        $statusErr .= 'Please enter subject.<br/>';
    }
    if(empty($message)){
        $statusErr .= 'Please enter your message.<br/>';
    }
    if(empty($statusErr)){
        // Send email notification to the site admin
        $subject = 'New contact request submitted';
        $htmlContent = "
            <h2>Contact Request Details</h2>
            <p><b>Name: </b>".$name."</p>
            <p><b>Email: </b>".$email."</p>
            <p><b>Subject: </b>".$subject."</p>
            <p><b>Team: </b>".$team."</p>
            <p><b>Message: </b>".$message."</p>
        ";
        // Always set content-type when sending HTML email
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        // Header for sender info
        $headers .= 'From:' . $name . ' <' . $email . '>' . "\r\n";
        // Send email
        @mail($email, $subject, $htmlContent, $headers);
        $status = 'success';
        $statusMsg = 'Thank you! Your contact request has submitted successfully, we will get back to you soon.';
        $postData = '';
    }else{
        $statusMsg = '<p>Please fill all the mandatory fields:</p>' . trim($statusErr, '<br/>');
    }
}

?>
