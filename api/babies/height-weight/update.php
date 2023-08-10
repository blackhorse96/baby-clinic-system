<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST, PUT");
header("Content-Type: application/json; charset=UTF-8");

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

if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    // Validate input fields
    $requiredFields = ['id', 'date', 'height', 'weight'];
    foreach ($requiredFields as $field) {
        if (!isset($data->$field) || empty(trim($data->$field))) {
            $returnData = msg(0, 422, 'Please Fill in all Required Fields!');
            echo json_encode($returnData);
            exit();
        }
    }

    $id = intval($data->id);
    $date = trim($data->date);
    $height = floatval($data->height);
    $weight = floatval($data->weight);

    try {
        // Check if the entry exists in the babies_height_weight table
        $stmt = $conn->prepare("SELECT id FROM babies_height_weight WHERE id = ?");
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows === 0) {
            $stmt->close();
            $returnData = msg(0, 404, 'Entry not found.');
            echo json_encode($returnData);
            exit();
        }
        $stmt->close();

        // Update entry in babies_height_weight table
        $update_query = "UPDATE babies_height_weight SET date = ?, height = ?, weight = ? WHERE id = ?";
        $update_stmt = $conn->prepare($update_query);
        $update_stmt->bind_param("sddi", $date, $height, $weight, $id);
        $update_stmt->execute();

        $returnData = msg(1, 200, 'Height and Weight data updated successfully.');
    } catch (Exception $e) {
        $returnData = msg(0, 500, $e->getMessage());
    }
}

echo json_encode($returnData);
