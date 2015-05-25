<?php
include('../includes/config.php');

$query="select distinct c.email,c.name,c.job,c.business,c.telephone,c.name_invoice,c.nit_invoice,c.address_invoice,c.contact_invoice,c.email_invoice,c.telephone_invoice from multifrm_users c order by c.email";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$arr = array();
if($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$arr[] = $row;	
	}
}
# JSON-encode the response
$json_response = json_encode($arr);

// # Return the response
echo $json_response;
?>
