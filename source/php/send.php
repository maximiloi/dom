<?php
// Файлы phpmailer
require 'class.phpmailer.php';
require 'class.smtp.php';

$name = $_POST['name'];
$number = $_POST['number'];
$email = $_POST['email'];

// Настройки
$mail = new PHPMailer;

$mail->isSMTP(); 
$mail->Host = 'ssl://mail.nic.ru';  
$mail->SMTPAuth = true;                      
$mail->Username = 'robot@top-dom.pro'; // Ваш логин в Яндексе. Именно логин, без @yandex.ru
$mail->Password = '3f9OqwWEZz'; // Ваш пароль
//$mail->SMTPSecure = 'ssl';                            
$mail->Port = 465;
$mail->setFrom('robot@top-dom.pro'); // Ваш Email
$mail->addAddress('maximiloi@gmail.com'); // Email получателя
//$mail->addAddress('example@gmail.com'); // Еще один email, если нужно.

// Прикрепление файлов
    for ($ct = 0; $ct < count($_FILES['userfile']['tmp_name']); $ct++) {
        $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['userfile']['name'][$ct]));
        $filename = $_FILES['userfile']['name'][$ct];
        if (move_uploaded_file($_FILES['userfile']['tmp_name'][$ct], $uploadfile)) {
            $mail->addAttachment($uploadfile, $filename);
        } else {
            $msg .= 'Failed to move file to ' . $uploadfile;
        }
    }

// Письмо
$mail->isHTML(true); 
$mail->Subject = "Заголовок"; // Заголовок письма
$mail->Body    = "Имя $name . Телефон $number . Почта $email"; // Текст письма

// Результат
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
    echo 'ok';
}
?>