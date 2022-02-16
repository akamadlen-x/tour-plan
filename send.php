<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = "";
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
$title = "Новое обращение BTP";
if (empty($name)) {
$body = "
<h2>Подписка на новости</h2>
<b>email:</b> $email
";    
} 
else {
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message
";} 

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
//    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'aka7771@gmail.com'; // Логин на почте
    $mail->Password   = 'Alles1861'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('aka7771@gmail.com', 'Lena Uvarova'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('akamadlen@gmail.com');
    

    // Прикрипление файлов к письму
    //сторонний код для отправки минуя ошибку
$mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false, //Проверка используемого SSL-сертификата
            'verify_peer_name' => false, //Проверка имени узла
            'allow_self_signed' => true //Разрешение на самоподписанные сертификаты
        )
    );
// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
//echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
// view rawsend.php hosted with ❤ by GitHub
header('Location: thankyou.html');
