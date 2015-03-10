<?php
// Include Medoo
require_once ("lib/medoo/medoo.min.php");
// Initialize
$database = new medoo([
	'database_type' => 'mysql',
	'database_name' => 'multistep_form',
	'server' => 'localhost',
	'username' => 'root',
	'password' => '',
	'charset' => 'utf8'
]);


foreach ($_POST as $key=>$value){
	$data[$key]=$value;
}

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

print_r($data);



	
	


?>