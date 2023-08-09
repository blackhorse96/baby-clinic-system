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
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    // Validate input fields
    $requiredFields = ['title', 'content', 'date'];
    foreach ($requiredFields as $field) {
        if (!isset($data->$field) || empty(trim($data->$field))) {
            $returnData = msg(0, 422, 'Please Fill in all Required Fields!');
            echo json_encode($returnData);
            exit();
        }
    }

    $title = trim($data->title);
    $content = trim($data->content);
    $date = trim($data->date);

    try {
        // Insert into notices table
        $insert_query = "INSERT INTO notices (title, content, date) VALUES (?, ?, ?)";
        $insert_stmt = $conn->prepare($insert_query);
        $insert_stmt->bind_param("sss", $title, $content, $date);
        $insert_stmt->execute();
        // Get the inserted ID
        $inserted_id = $insert_stmt->insert_id;

        $returnData = msg(1, 201, 'Notice added successfully.', ['inserted_id' => $inserted_id]);
    } catch (Exception $e) {
        $returnData = msg(0, 500, $e->getMessage());
    }
}

echo json_encode($returnData);
