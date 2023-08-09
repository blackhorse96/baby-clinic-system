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

if ($_SERVER["REQUEST_METHOD"] != "GET") {
    echo json_encode(msg(0, 404, 'Page Not Found!'));
    exit();
}

try {
    // Get all notices data
    $select_query = "SELECT id, title, content, date FROM notices";
    $result = $conn->query($select_query);

    $noticesData = [];
    while ($row = $result->fetch_assoc()) {
        $noticesData[] = $row;
    }

    echo json_encode(msg(1, 200, 'Notices data retrieved successfully.', ['data' => $noticesData]));
} catch (Exception $e) {
    echo json_encode(msg(0, 500, $e->getMessage()));
}
