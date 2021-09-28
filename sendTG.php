<?php
	$msg_box = "<span style='color: green;'>Сообщение успешно отправлено!</span>";
	$channel = "Алфабит";
	$phone = $_POST['user_phone'];
	$token = "1754681774:AAFov4FdZXxBkeLHp13i9V9X4Y7PGVzY1Oo";
    $chat_id = "347283263";
    $arr = array(
    	'Источник: ' => $channel,
    	'Телефон: '  => $phone
    );

    foreach ($arr as $key => $value) {
    	$txt .= "<b>".$key."</b>".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

	/*if ($sendToTelegram) {
	  $msg_box = "<span style='color: green;'>Сообщение успешно отправлено!</span>";
	} else {
	  $msg_box = "<span style='color: red;'>$one_error</span><br/>";
	}*/

	// echo json_encode(array(
 //        'result' => $msg_box
 //    ))
	/*if ($sendToTelegram) {
	  echo json_encode(array(
        'result' => $msg_box
    ));
	} else {
	  echo "Error";
	}*/
?>