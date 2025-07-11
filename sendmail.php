<?php
error_reporting(E_ALL);
ini_set('display_startup_errors', 1);
ini_set('display_errors', '1');
header("Access-Control-Allow-Origin: *");

$start = microtime(true);


$referer = $_SERVER['HTTP_REFERER'];

// Разбираем URL и извлекаем только схему, хост и путь
$referer_url_parts = parse_url($referer);
$urlsite = $referer_url_parts['scheme'] . '://' . $referer_url_parts['host'] . $referer_url_parts['path'];


// $urlsite = strtok($_SERVER['HTTP_REFERER'], '?'); // Получаем URL без параметров GET

// $urlsite = $domain . $uri;
// $urlsite = parse_url($_SERVER['HTTP_REFERER']);
// $urlsite = $urlsite['scheme'] . '://' . $urlsite['host'];
define('TIME', '-1 day');
//ссылка bitrix портала
define('B24_API_URL', 'https://metal.bitrix24.kz/');
//токен, получаемый при создании webhook
define('B24_API_KEY', 'wrq55a2ynzo4dzlx');//1/xp0oirwwrb2aaoa0
// id пользователя с админ правами (в моем случае id, который создавал webhook)
define('B24_API_ADMIN', '1');
define('B24_URL', B24_API_URL."rest/".B24_API_ADMIN."/".B24_API_KEY);

function json_response($code = 200, $message = null)
{
    // clear the old headers
    header_remove();
    // set the actual code	
    http_response_code($code);
    // set the header to make sure cache is forced
    header("Cache-Control: no-transform,public,max-age=300,s-maxage=900");
    // treat this as json
    header('Content-Type: application/json');
    $status = array(
        200 => '200 OK',
        400 => '400 Bad Request',
        422 => 'Unprocessable Entity',
        500 => '500 Internal Server Error'
        );
    // ok, validation error, or failure
    header('Status: '.$status[$code]);
    // return the encoded json
	
    return json_encode(array(
        'status' => $code < 300, // success or not?
        'message' => $message
        ));
}

//функция отправки\получение запроса
function sendQuery($queryUrl, $queryData){
	$curl = curl_init();
	 
	curl_setopt_array($curl, 
		array(
			 CURLOPT_SSL_VERIFYPEER => 0,
			 CURLOPT_POST => 1,
			 CURLOPT_HEADER => 0,
			 CURLOPT_RETURNTRANSFER => 1,
			 CURLOPT_URL => $queryUrl,
			 CURLOPT_POSTFIELDS => $queryData,
		)
	);
	 
	$result = curl_exec($curl);
	curl_close($curl);
	$result = json_decode($result, 1);
	// var_dump($result);
	return $result;
}

function getLead($strPhone){
	$date = new DateTime();
	$date->modify(TIME);
	$dateFrom = $date->format('Y-m-d');

	$queryUrl = B24_URL."/crm.lead.list/";
	$queryData = http_build_query(
		array(
			'filter' => array(
				 ">DATE_CREATE" => $dateFrom,
				 "PHONE" => $strPhone
			),
			'select' => array( "ID",
								"TITLE", 
								"NAME", 
								"COMMENTS", 
								"STATUS_ID", 
								"LAST_NAME"
								),
		)
	);

	$result = sendQuery($queryUrl, $queryData);
	if($result["total"]>0) return $result;
	return false;
}

function addLead($arData){
	$SOURCE_ID = "UC_U94Y3C";
	$domain = $_SERVER['SERVER_NAME'];
	// $SOURCE_ID = ($domain == "atlantsnabcity.kz") ? 'Yes' : 'No';
	switch ($domain){
		case "atlantsnabcity.kz":
			$SOURCE_ID = "WEB";
			break;
		case "atlantsnab.kz":
			$SOURCE_ID = "WEB";
			break;
		case "stroy-partner.kz":
			$SOURCE_ID = "stroy-partner.kz";
			break;
		case "other":
			$SOURCE_ID = "other";
			break;
	}
	// die("OK".$_SERVER['HTTP_REFERER']);
	$queryUrl = B24_URL."/crm.lead.add/";
	$queryData = http_build_query(array(
		'fields' => array(
			'TITLE' => $arData['TITLE'], 
			'NAME' => $arData['NAME'],
			'STATUS_DESCRIPTION' => $_SERVER['HTTP_REFERER'],
			'SOURCE_ID' => $SOURCE_ID,
			'UF_CRM_1591182486903' => 458,
			'UF_CRM_1666168897698' => 48,
			// 'STATUS_ID' => "STATUS_ID",
			'ASSIGNED_BY_ID' => $arData['ASSIGNED_BY_ID'],//1324,1255,1442
			'UTM_CAMPAIGN' => "UTM_CAMPAIGN",//UTM
			'UTM_CONTENT' => "UTM_CONTENT",//UTM
			'UTM_MEDIUM' => "UTM_MEDIUM",//UTM
			'UTM_SOURCE' => "UTM_SOURCE",//UTM
			// 'UTM_SITE' => $TILDAREFERRER,//UTM
			'UTM_TERM' => "UTM_TERM",//UTM
			'COMMENTS' => $arData['COMMENTS'],//UTM
			'OPENED' => "Y",//UTM
			'PHONE' => array(
				array(
					"VALUE" => $arData['PHONE'], 
					"VALUE_TYPE" => "WORK"//PHONE_WORK,PHONE_MOBILE
				)
			)
		),
		'params' => array("REGISTER_SONET_EVENT" => "Y")
	));

	$result = sendQuery($queryUrl, $queryData);
	// var_dump($result);
	if($result["result"]==true) return $result;
	return false;
	
}

function updateLead($arData){
	$SOURCE_ID = "UC_U94Y3C";
	$domain = $_SERVER['SERVER_NAME'];
	// $SOURCE_ID = ($domain == "atlantsnabcity.kz") ? 'Yes' : 'No';
	switch ($domain){
		case "atlantsnabcity.kz":
			$SOURCE_ID = "WEB";
			break;
		case "atlantsnab.kz":
			$SOURCE_ID = "WEB";
			break;
		case "stroy-partner.kz":
			$SOURCE_ID = "stroy-partner.kz";
			break;
		case "other":
			$SOURCE_ID = "other";
			break;
	}
	
	// die("OK ".$_SERVER['SERVER_NAME']."  ".$SOURCE_ID);
	// die("OK".$arData['COMMENTS']);
	$queryUrl = B24_URL."/crm.lead.update/";
	$queryData = http_build_query(
		array(
			'id' => $arData['leadId'],
			'fields' => array(
				'TITLE' => $arData['TITLE'],
				'COMMENTS' => $arData['COMMENTS'],
				'UF_CRM_1591182486903' => 458,
				'UF_CRM_1666168897698' => 48,
				'SOURCE_ID' => $SOURCE_ID,
				// 'NAME' => $arData['NAME'],
				// 'UF_CRM_GA_CID' => $arData['clientId'],
				// 'UTM_SOURCE' => $arData['utmSource'],
				// 'UTM_MEDIUM' => $arData['utmMedium'],
				// 'UTM_CAMPAIGN' => $arData['utmCampaign'],
			),
			'params' => array(
				"REGISTER_SONET_EVENT" => "Y"
			)
		)
	);

	$result = sendQuery($queryUrl, $queryData);
	// var_dump($result);
	if($result["result"]==true) return $result;
	return false;
	
}

function addComentLead($arData){
		$comment_timeline = "
		<b>Правила обработки заявки</b>
		<ol>
			<li>Позвонить, помочь зарегистрировать клиента</li>
			<li>Перенести лид на 2 недели</li>
			<li>Через 2 недели узнать как клиенту сервис</li>
			<li>Связаться с клиентом за неделю до окончания ТД</li>
			<li>ПРОДАТЬ МЕБЕЛЬ</li>
		</ol>
		<b>P.S. номер тех.поддержки: 8 (707) 333 11 63</b>
	   ";
		$comment_timeline = $arData["COMMENT"];
		$queryUrl = B24_URL."/crm.timeline.comment.add";
		$queryData = http_build_query(array(
		'fields' => Array(
			"ENTITY_ID" => $arData["ENTITY_ID"], //"20453",
			"AUTHOR_ID" => $arData["ENTITY_ID"], //"1324",
			"ENTITY_TYPE" => $arData["ENTITY_TYPE"], //"lead",
			"COMMENT" => $comment_timeline //Автоматический комментарий 2
		),
	));

	$result = sendQuery($queryUrl, $queryData);
	// var_dump($result);
	if($result["result"]==true) return $result;
	return false;
	
}

function phone_format($phone) 
{
	$phone = trim($phone);
 
	$res = preg_replace(
		array(
			'/[\+]?([7|8])[-|\s]?\([-|\s]?(\d{3})[-|\s]?\)[-|\s]?(\d{3})[-|\s]?(\d{2})[-|\s]?(\d{2})/',
			'/[\+]?([7|8])[-|\s]?(\d{3})[-|\s]?(\d{3})[-|\s]?(\d{2})[-|\s]?(\d{2})/',
			'/[\+]?([7|8])[-|\s]?\([-|\s]?(\d{4})[-|\s]?\)[-|\s]?(\d{2})[-|\s]?(\d{2})[-|\s]?(\d{2})/',
			'/[\+]?([7|8])[-|\s]?(\d{4})[-|\s]?(\d{2})[-|\s]?(\d{2})[-|\s]?(\d{2})/',	
			'/[\+]?([7|8])[-|\s]?\([-|\s]?(\d{4})[-|\s]?\)[-|\s]?(\d{3})[-|\s]?(\d{3})/',
			'/[\+]?([7|8])[-|\s]?(\d{4})[-|\s]?(\d{3})[-|\s]?(\d{3})/',					
		), 
		array(
			'+7$2$3-$4-$5', 
			'+7$2$3-$4-$5', 
			'+7$2$3-$4-$5', 
			'+7$2$3-$4-$5', 	
			'+7$2$3-$4', 
			'+7$2$3-$4', 
		), 
		$phone
	);
 
	return $res;
}

function formatPhoneNumber($num) {
    $num = preg_replace('/[^0-9]/', '', $num);
    $len = strlen($num);

    if($len == 7) $num = preg_replace('/([0-9]{2})([0-9]{2})([0-9]{3})/', '$1 $2 $3', $num);
    elseif($len == 8) $num = preg_replace('/([0-9]{3})([0-9]{2})([0-9]{3})/', '$1 - $2 $3', $num);
    elseif($len == 9) $num = preg_replace('/([0-9]{3})([0-9]{2})([0-9]{2})([0-9]{2})/', '$1 - $2 $3 $4', $num);
    elseif($len == 10) $num = preg_replace('/([0-9]{3})([0-9]{2})([0-9]{2})([0-9]{3})/', '$1 - $2 $3 $4', $num);
    elseif($len == 11) $num = preg_replace('/([0-9]{1})([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/', '7$2$3$4$5', $num);

    return $num;
}


function formatPhoneNumber2($phoneNumber) {
    $phoneNumber = preg_replace('/[^0-9]/','',$phoneNumber);

    if(strlen($phoneNumber) > 10) {
        $countryCode = substr($phoneNumber, 0, strlen($phoneNumber)-10);
        $areaCode = substr($phoneNumber, -10, 3);
        $nextThree = substr($phoneNumber, -7, 3);
        $lastFour = substr($phoneNumber, -4, 4);

        $phoneNumber = '+'.$countryCode.' ('.$areaCode.') '.$nextThree.'-'.$lastFour;
    }
    else if(strlen($phoneNumber) == 10) {
        $areaCode = substr($phoneNumber, 0, 3);
        $nextThree = substr($phoneNumber, 3, 3);
        $lastFour = substr($phoneNumber, 6, 4);

        $phoneNumber = '('.$areaCode.') '.$nextThree.'-'.$lastFour;
    }
    else if(strlen($phoneNumber) == 7) {
        $nextThree = substr($phoneNumber, 0, 3);
        $lastFour = substr($phoneNumber, 3, 4);

        $phoneNumber = $nextThree.'-'.$lastFour;
    }

    return $phoneNumber;
}

function sendTelegram($arData){
$phone = $arData['PHONE'];
$phoneEnd = preg_replace('![^0-9]+!', '', $phone);
$url1="https://wa.me/".$phoneEnd;

// сюда нужно вписать токен бота
define('TELEGRAM_TOKEN', '5039659390:AAENRyie2MBG9rQzdaSHiQs3_z8FBimR3JY');
// сюда нужно вписать внутренний айдишник
define('TELEGRAM_CHATID', '-1001513303087');

$buttons = json_encode([
	'inline_keyboard' => [
		[
			[
				// текст кнопки
				"text" => "WA",
				// передаем значения для обработки кнопки разделенные знаком _
				// первым идет метод который будет обрабатывать эту кнопку
				// в данном примере это actionInlineButton
				// вторым параметром идет значение 1234 для примера
				// параметров может быть много все через заранее определенный
				// знак в этом случае это нижнее подчеркивание
				// общая длинна всей строки не должна превышать 64 байта (символа)
				"url" => $url1
			],
			// [
				// // текст кнопки
				// "text" => "TEL",
				// // ссылка на ресурс
				// "url" => 'https://tel:+88005553535'
			// ]
		]
	],
], true);

$text = $arData['TITLE']
."\nИмя: ".$arData['NAME']
."\nТелефон: ".$phone
."\nЦель: ".$arData['tildaspec-formname']
."\nКооментарий: ".$arData['form-spec-comments']
."\nURL: ".$arData['COMMENT_S'];

 // echo $text;
 
    $ch = curl_init();
    curl_setopt_array(
        $ch,
        array(
            CURLOPT_URL => 'https://api.telegram.org/bot' . TELEGRAM_TOKEN . '/sendMessage',
            CURLOPT_POST => TRUE,
            CURLOPT_RETURNTRANSFER => TRUE,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_POSTFIELDS => array(
                'chat_id' => TELEGRAM_CHATID,
                'text' => $text,
                // 'parse_mode' => 'HTML',
                'disable_web_page_preview' => true,
                // 'disable_web_page_preview' => false,
				'reply_markup' => $buttons,
				'resize_keyboard ' => true,
				// 'reply_markup' => $keyboard_json
            ),
        )
    );
    $res = curl_exec($ch);
}

function sendEmail($arData)
{
	
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$email = "vs_e@mail";

// Формирование самого письма
$title = $arData['TITLE'];
$body = "
<h2>{$arData['TITLE']}</h2>
<b>Имя:</b> {$arData['NAME']}<br>
<b>Телефон:</b> {$arData['PHONE']}<br><br>
<b>Название формы:</b> {$arData['tildaspec-formname']}<br>
<b>Комментарий:</b> {$arData['form-spec-comments']}<br>
";

$mail = new PHPMailer\PHPMailer\PHPMailer();
	
	
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
	// $mail->SMTPDebug = SMTP::DEBUG_SERVER;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.yandex.kz'; // SMTP сервера вашей почты
    $mail->Username   = 'beautyprof.kz@yandex.kz'; // Логин на почте
    $mail->Password   = 'Trainer123'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('beautyprof.kz@yandex.kz', 'Заявка с Сайта'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress("vs_e@mail.ru");  
    // $mail->addAddress('marketolog3@beautyprof.kz'); // Ещё один, если нужен


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
$mail_send=$mail->send();
// echo $mail_send;
if ($mail_send) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

}


// echo "<pre>";

$date = new DateTime();
$dateTo = $date->format('d/m/Y');
$date->modify(TIME);
$dateFrom = $date->format('d/m/Y');
$results["status"]=false;
$results["data"]=null;
$results["result"]=null;
$PHONE = null;
//if ((isset($_GET['ASSIGNED_BY_ID']))&&(isset($_GET['PHONE']) || isset($_POST['PHONE']) )) {
if (isset($_POST['phone']) ) {
	// die("ok");
	//id ответственного
	// $ASSIGNED_BY_ID=$_GET['ASSIGNED_BY_ID'];
	$ASSIGNED_BY_ID=1;//1255,1324,503,1442
	//переменная искомого номера
	$TILDAREFERRER="atlantsnabcity.kz";
	$TILDAFORMNAME=$_POST['subject'];
	$TILDACOMMENTS="";
	$COOKIE="";
	$PHONE=$_POST['phone'];
	$PHONE=formatPhoneNumber($PHONE);
	// $NAME=$_POST['Name'];
	$NAME=$_POST['name'];
	//создаем запрос для поиска контакта по номеру телефона в базе bitrix
	$getLead = getLead($PHONE);
	// var_dump($getLead);
	$leadId = 0;
	// $leadId = $cOTLdata['char_data'] === null ? 0 : count($cOTLdata['char_data']);
	if($getLead){
		
		$leadId = $getLead['result'][0]['ID'];
		// var_dump($leadId);
		// break;
		$resUpdateLead=updateLead(
			array(
				"leadId" => $leadId,
				"TITLE" => $getLead['result'][0]['TITLE']." Повторный лид",
				// "NAME" => $getLead['result'][0]['NAME'],
				"COMMENTS" => $getLead['result'][0]['COMMENTS']." Повторный лид",
				// "utmSource" => $arJson['utmSource'],
				// "utmTerm" => $arJson['utmTerm'],
				// "utmCampaign" => $arJson['utmCampaign']
			)
		);
		$resUpdateLead['ID']=$leadId;
		$comments="[B]Повторный лид от : ".$NAME."[/B]
Телефон: ".$PHONE."
Запрос: [B]".$TILDAFORMNAME."[/B]
Источник: лид с: ".$_SERVER['HTTP_REFERER']."
Сайт: [B]".$TILDAREFERRER."[/B]


COOKIE: ".$COOKIE;
		addComentLead(
			array(
				"ENTITY_ID" => $leadId,
				"AUTHOR_ID" => "1",
				"COMMENT" => $comments,
				"ENTITY_TYPE" => "lead"
			));
		if($resUpdateLead){
			$results["status"]=true;
			$results["data"]=$resUpdateLead;	
			$results["result"]="update";			  
			}
		// $resSendEmail=sendEmail(
			// array(
				// "TITLE" => "ПОВТОР: Заявка с сайта: ".$_SERVER['SERVER_NAME'],
				// "NAME" => $NAME,
				// "COMMENTS" => "Заявка c сайта: ".$TILDAREFERRER,
				// "PHONE" => $PHONE,
				// "ASSIGNED_BY_ID" => $ASSIGNED_BY_ID,
				// "tildaspec-formname" => $TILDAFORMNAME,
				// "form-spec-comments" => $TILDACOMMENTS
			// )
		// );
		
		// $resSendTelegram=sendTelegram(
			// array(
				// "TITLE" => "ПОВТОР: Заявка с сайта: ".$_SERVER['SERVER_NAME'],
				// "NAME" => $NAME,
				// "COMMENTS" => "Заявка c сайта: ".$TILDAREFERRER,
				// "PHONE" => $PHONE,
				// "ASSIGNED_BY_ID" => $ASSIGNED_BY_ID,
				// "tildaspec-formname" => $TILDAFORMNAME,
				// "form-spec-comments" => $TILDACOMMENTS,
				// "COMMENT_S" => $_SERVER['HTTP_REFERER'],
				// // "utmTerm" => $arJson['utmTerm'],
				// // "utmCampaign" => $arJson['utmCampaign']
			// )
		// );
		
	}else{
		$resAddLead=addLead(
			array(
				"TITLE" => "Заявка с сайта: ".$urlsite,
				"NAME" => $NAME,
				"COMMENTS" => "Заявка c сайта: ".$TILDAREFERRER."\n Запрос: ".$TILDAFORMNAME,
				"PHONE" => $PHONE,
				"ASSIGNED_BY_ID" => $ASSIGNED_BY_ID,
				// "utmTerm" => $arJson['utmTerm'],
				// "utmCampaign" => $arJson['utmCampaign']
			)
		);
		// $resSendEmail=sendEmail(
			// array(
				// "TITLE" => "Заявка с сайта: ".$_SERVER['SERVER_NAME'],
				// "NAME" => $NAME,
				// "COMMENTS" => "Заявка c сайта: ".$TILDAREFERRER,
				// "PHONE" => $PHONE,
				// "ASSIGNED_BY_ID" => $ASSIGNED_BY_ID,
				// "tildaspec-formname" => $TILDAFORMNAME,
				// "form-spec-comments" => $TILDACOMMENTS
			// )
		// );
		// $resSendTelegram=sendTelegram(
			// array(
				// "TITLE" => "Заявка с сайта: ".$_SERVER['SERVER_NAME'],
				// "NAME" => $NAME,
				// "COMMENTS" => "Заявка c сайта: ".$TILDAREFERRER,
				// "PHONE" => $PHONE,
				// "ASSIGNED_BY_ID" => $ASSIGNED_BY_ID,
				// "tildaspec-formname" => $TILDAFORMNAME,
				// "form-spec-comments" => $TILDACOMMENTS,
				// "COMMENT_S" => $_SERVER['HTTP_REFERER'],
			// )
		// );
		// var_dump($resAddLead);
		$resAddLead['ID']=$resAddLead["result"];
		// $leadId = $resAddLead['result'][0]['ID'];
		if($resAddLead){
			$comments="[B]Заявка от: ".$NAME."[/B]
Телефон: ".$PHONE."
Запрос: [B]".$TILDAFORMNAME."[/B]
Источник: лид с: ".$_SERVER['HTTP_REFERER']."
Сайт: [B]".$TILDAREFERRER."[/B]


COOKIE: ".$COOKIE;
			addComentLead(
				array(
					"ENTITY_ID" => $resAddLead['ID'],
					"AUTHOR_ID" => "1",
					"COMMENT" => $comments,
					"ENTITY_TYPE" => "lead"
				));
			
			  $results["status"]=true;
			  $results["data"]=$resAddLead;			
			  $results["result"]="add";			
			}
		
	}
	
}
$endTime = microtime(true) - $start;
$results["time"]=$endTime;
$results["PHONE"]=$PHONE;
$results["NAME"]=$NAME;
echo $results;
// echo "OK";
die(json_encode($results));	
// echo "111";
?>
