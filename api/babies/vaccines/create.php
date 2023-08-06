<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once __DIR__ . '/../../Classes/Database.php';

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
    $requiredFields = ['age', 'vaccine', 'date', 'baby_id'];
    foreach ($requiredFields as $field) {
        if (!isset($data->$field) || empty(trim($data->$field))) {
            $returnData = msg(0, 422, 'Please Fill in all Required Fields!');
            echo json_encode($returnData);
            exit();
        }
    }

    $age = trim($data->age);
    $vaccine = trim($data->vaccine);
    $date = trim($data->date);
    $baby_id = intval($data->baby_id);

    try {
        // Check if the baby_id exists in the babies table
        $stmt = $conn->prepare("SELECT id FROM babies WHERE id = ?");
        $stmt->bind_param("i", $baby_id);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows === 0) {
            $stmt->close();
            $returnData = msg(0, 404, 'Baby not found.');
            echo json_encode($returnData);
            exit();
        }
        $stmt->close();

        // Insert into babies_vaccines table
        $insert_query = "INSERT INTO babies_vaccines (age, vaccine, date, baby_id) VALUES (?, ?, ?, ?)";
        $insert_stmt = $conn->prepare($insert_query);
        $insert_stmt->bind_param("sssi", $age, $vaccine, $date, $baby_id);
        $insert_stmt->execute();
        // Get the inserted ID
        $inserted_id = $insert_stmt->insert_id;

        $returnData = msg(1, 201, 'Vaccine data added successfully.', ['inserted_id' => $inserted_id]);
    } catch (Exception $e) {
        $returnData = msg(0, 500, $e->getMessage());
    }
}

echo json_encode($returnData);
