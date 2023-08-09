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
$data = json_decode(file_get_contents("php://input"));
$returnData = [];

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    echo json_encode(msg(0, 404, 'Page Not Found!'));
    exit();
}

// Validate input fields
$requiredFields = ['id', 'title', 'content', 'date'];
foreach ($requiredFields as $field) {
    if (!isset($data->$field) || empty(trim($data->$field))) {
        echo json_encode(msg(0, 422, 'Please Fill in all Required Fields!'));
        exit();
    }
}

$id = intval($data->id);
$title = trim($data->title);
$content = trim($data->content);
$date = trim($data->date);

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

    // Update the notice in the notices table
    $update_query = "UPDATE notices SET title = ?, content = ?, date = ? WHERE id = ?";
    $update_stmt = $conn->prepare($update_query);
    $update_stmt->bind_param("sssi", $title, $content, $date, $id);
    $update_stmt->execute();

    echo json_encode(msg(1, 200, 'Notice updated successfully.'));
} catch (Exception $e) {
    echo json_encode(msg(0, 500, $e->getMessage()));
}
