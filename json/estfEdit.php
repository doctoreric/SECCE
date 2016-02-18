<?php
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$nombre = $request->nombre;
$modelo = $request->modelo;
$ip = $request->ip;
$mac = $request->mac;
$comentarios = $request->comentarios;
$id= $request->id;
$db_name  = 'SECCE';
$hostname = '127.0.0.1';
$username = 'root';
$password = 'Eric0293';

// connect to the database
$dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);

// a query get all the records from the users table
$sql = 'UPDATE SECCE.estufa SET estf_nombre = "'.$nombre .'", estf_modelo = "'.$modelo.'", estf_ip = "'.$ip.'", estf_mac = "'.$mac.'", estf_comentarios = "'.$comentarios.'" WHERE estf_id = "'.$id.'"';
echo $sql;
// use prepared statements, even if not strictly required is good practice
$stmt = $dbh->prepare( $sql );

// execute the query
$stmt->execute();
// fetch the results into an array
$result = $stmt->fetchAll( PDO::FETCH_ASSOC );

// convert to json
$json = json_encode( $result );

// echo the json string
echo $json;
?>