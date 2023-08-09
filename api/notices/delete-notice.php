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

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    echo json_encode(msg(0, 404, 'Page Not Found!'));
    exit();
}

// DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));
$returnData = [];

// Check if the id is provided in the request
if (!isset($data->id) || empty(trim($data->id))) {
    echo json_encode(msg(0, 400, 'Bad Request. Missing id parameter.'));
    exit();
}

$id = intval($data->id);

try {
    // Check if the notice exists in the notices table
    $stmt = $conn->prepare("SELECT id FROM notices WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 0) {
        $stmt->close();
        echo json_encode(msg(0, 404, 'Notice not found.'));
        exit();
    }
    $stmt->close();

    // Delete the notice from the notices table
    $delete_query = "DELETE FROM notices WHERE id = ?";
    $delete_stmt = $conn->prepare($delete_query);
    $delete_stmt->bind_param("i", $id);
    $delete_stmt->execute();

    echo json_encode(msg(1, 200, 'Notice deleted successfully.'));
} catch (Exception $e) {
    echo json_encode(msg(0, 500, $e->getMessage()));
}
