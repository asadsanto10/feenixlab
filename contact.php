<?php

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (!empty($_POST['contactname']) && !empty($_POST['contactemail']) && !empty($_POST['contactmessage'])) {
        $to = 'connect@feenixlab.com'; // Your e-mail address here.
        $body = "\nName: {$_POST['contactname']}\nEmail: {$_POST['contactemail']}\nPhone: {$_POST['contactphone']}\n\n{$_POST['contactmessage']}\n\n";
        mail($to, "Message from Feennix Lab", $body, "From: {$_POST['contactemail']}"); // E-Mail subject here.
    }
}
?>