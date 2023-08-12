<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../vendor/autoload.php';

function sendEmail($email, $name)
{
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'blackhorselove1996@gmail.com';                     //SMTP username
        $mail->Password   = 'ohatvwhwgygewtgu';                               //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;            //Enable implicit TLS encryption
        $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('blackhorselove1996@gmail.com', 'Baby Clinic System');
        $mail->addAddress($email, $name);
        // $mail->addReplyTo('example@gmail.com', 'Information');

        // HTML email template
        $template = '
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Welcome to Baby Clinic</title>
            <style>
                /* Add your custom styles here */
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    padding: 20px;
                    background-color: #ffffff;
                    border-radius: 5px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
                .header {
                    background-color: #4caf50;
                    color: #ffffff;
                    text-align: center;
                    padding: 10px;
                    border-radius: 5px 5px 0 0;
                }
                .content {
                    padding: 20px;
                }
                .footer {
                    text-align: center;
                    padding: 10px;
                    background-color: #f4f4f4;
                    border-radius: 0 0 5px 5px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Welcome to Baby Clinic</h1>
                </div>
                <div class="content">
                    <p>Hello ' . $name . ',</p>
                    <p>We are delighted to welcome you to the Baby Clinic family!</p>
                    <p>Our mission is to provide the best care for you and your baby. We offer a range of services and resources to ensure a healthy and joyful parenting journey.</p>
                    <p>If you have any questions or need assistance, feel free to reach out to us.</p>
                    <p>Best regards,<br>
                    The Baby Clinic Team</p>
                </div>
                <div class="footer">
                    <p>This is an automated email. Please do not reply.</p>
                </div>
            </div>
        </body>
        </html>
    ';

        //Content
        $mail->isHTML(true);
        $mail->Subject = 'Successfully registered';
        $mail->Body    = $template;

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
