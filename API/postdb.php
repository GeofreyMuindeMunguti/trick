<?php 
$servername = "db4free.net";
$username = "geofrey";
$password = "geofrey7543";
$dbname = "ourtrick";

$info = $_POST["postvisits"];
$tlink = $_POST["postlink"];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = " INSERT INTO `audit`(`link`,`visits`) VALUES ('$tlink',$info)";
$sql2 = " INSERT INTO `first`(`link`,`visits`) VALUES ('$tlink',$info)";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


if ($conn->query($sql2) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql2 . "<br>" . $conn->error;
}

 
$conn->close();
?>