<?php

$estf = $_GET['estf'];
$humedad = $_GET['humedad'];



$db_name  = 'SECCE';
$hostname = '127.0.0.1';
$username = 'root';
$password = 'Eric0293';

// connect to the database
$dbh = new PDO("mysql:host=$hostname;dbname=$db_name", $username, $password);

// a query get all the records from the users table
$sql =  'INSERT INTO humedad  VALUES (NULL, '.$estf.', '.$humedad.', now())';
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

?>