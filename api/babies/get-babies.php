<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../Classes/Database.php';

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "baby_clinic_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

function msg($success, $status, $message, $extra = [])
{
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ], $extra);
}

// DATA FORM REQUEST
$returnData = [];

if ($_SERVER["REQUEST_METHOD"] != "GET") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    if (isset($_GET['mother_id'])) {
        // Filter by mother_id if provided
        $motherId = intval($_GET['mother_id']);
        $stmt = $conn->prepare("SELECT * FROM babies WHERE mother_id = ?");
        $stmt->bind_param("i", $motherId);
    } else {
        // Retrieve all babies if mother_id not provided
        $stmt = $conn->prepare("SELECT * FROM babies");
    }

    $stmt->execute();
    $result = $stmt->get_result();
    $babies = $result->fetch_all(MYSQLI_ASSOC);
    $stmt->close();

    $returnData = msg(1, 200, 'Success', ['babies' => $babies]);
}

echo json_encode($returnData);
