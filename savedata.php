<?php
// Include Medoo
require_once ("lib/medoo/medoo.min.php");
// Initialize
$database = new medoo([
	'database_type' => 'mysql',
	'database_name' => 'multistep_form',
	'server' => 'localhost',
	'username' => 'root',
	'password' => '123456',
	'charset' => 'utf8'
]);


foreach ($_POST as $key=>$value){
	$data[$key]=$value;
}
//print_r($data);

//Insert user
$last_user_id = $database->insert('multifrm_users', [
	'email' => $data['email'],
	'name' => $data['name'],
	'job' => $data['job'],
	'business' => $data['business'],
	'telephone' => $data['telephone'],
	'name_invoice' => $data['name_invoice'],
	'nit_invoice' => $data['nit_invoice'],
	'address_invoice' => $data['address_invoice'],
	'contact_invoice' => $data['contact_invoice'],
	'email_invoice' => $data['email_invoice'],
	'telephone_invoice' => $data['telephone_invoice']	
]);
//echo $last_user_id;

if ($last_user_id!=0) {
	$msg='1';

	//Insert Participants
	for ($i=1; $i <=10; $i++) { 
		$name_participant='name_participant_'.$i;
		$job_participant='job_participant_'.$i;
		$address_participant='address_participant_'.$i;
		$country_participant='country_participant_'.$i;
		$telephone_participant='telephone_participant_'.$i;
		$cel_participant='cel_participant_'.$i;
		$email_participant='email_participant_'.$i;

		if (array_key_exists($name_participant, $data)) {

			$database->insert('multifrm_participants', [
				'name' => $data[$name_participant],
				'job' => $data[$job_participant],
				'address' => $data[$address_participant],
				'country' => $data[$country_participant],
				'telephone' => $data[$telephone_participant],
				'cel' => $data[$cel_participant],
				'email' => $data[$email_participant],
				'multifrm_users_id' => $last_user_id	
			]);

	    	/*echo $data[$name_participant]." - ".$data[$job_participant]." - ".$data[$address_participant]." - ".$data[$country_participant]." - ".$data[$telephone_participant]." - ".$data[$cel_participant]." - ".$data[$email_participant];
	    	echo "<br /><br />";*/
		}
	}
}else{
	$msg='0';
}

	die($msg);

?>