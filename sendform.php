<?php
if(strpos($_SERVER['HTTP_REFERER'],'?')){
	$endPosition = strpos($_SERVER['HTTP_REFERER'],'?');
	$fromPageURL = substr($_SERVER['HTTP_REFERER'],0,$endPosition);
}else{
	$fromPageURL = $_SERVER['HTTP_REFERER'];
}

/* SEND_MAIL FUNCTION
 * @This will send a new email to any email address
 * ==================================================*/
function send_mail($to, $subject, $message, $from = '', $fromname = ''){
		$now = strtotime("now");
		
		$header = 
		"From: \"$fromname\" <$from>\n".
		"Reply-To:  $to\n".
		"Return-Path: $to\n".
		"Message-ID: <$now daemon@".$_SERVER['SERVER_NAME'].">\n".
		"X-Mailer:PHP/".phpversion()."\n".
		"Mime-Version: 1.0\n".
		"Content-Type: text/html; charset=UTF-8 ";
		
		if(@mail($to, utf8_decode($subject), $message ,$header)){
			return true;
		}else{
			return false;
		}
}


foreach ($_POST as $key=>$value){
	$data[$key]=$value;
}

$message = $data["html"]; 


$postNameArr = array('email', 'email_invoice', 'email_participant_1', 'email_participant_2', 'email_participant_3', 'email_participant_4', 'email_participant_5', 'email_participant_6', 'email_participant_7', 'email_participant_8', 'email_participant_9', 'email_participant_10');        
$postIdentifierArr = array();
    
foreach ($postNameArr as $postName){
    if (array_key_exists($postName, $_POST)){
         $postIdentifierArr[] = $postName;
    }
}

$msg="";
for ($i=0; $i <= count($postIdentifierArr); $i++) { 
	$identify=$postIdentifierArr[$i];
	$emailTo=$data[$identify];
		if(send_mail($emailTo, 'EBG', $message, 'info@ebg.edu.gt', 'EBG Formulario')){
			$msg='1';
		}else{
			$msg='0';
		}
}
    



	//echo $msg;
	die($msg);

?>