<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST, DELETE");
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

if ($_SERVER["REQUEST_METHOD"] != "DELETE") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    // Validate input fields
    if (!isset($data->id) || empty(trim($data->id))) {
        $returnData = msg(0, 422, 'Please provide an ID to delete.');
        echo json_encode($returnData);
        exit();
    }

    $id = intval($data->id);

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

        // Delete entry from babies_height_weight table
        $delete_query = "DELETE FROM babies_height_weight WHERE id = ?";
        $delete_stmt = $conn->prepare($delete_query);
        $delete_stmt->bind_param("i", $id);
        $delete_stmt->execute();

        $returnData = msg(1, 200, 'Height and Weight data deleted successfully.');
    } catch (Exception $e) {
        $returnData = msg(0, 500, $e->getMessage());
    }
}

echo json_encode($returnData);
