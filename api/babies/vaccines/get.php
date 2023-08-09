<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
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

if ($_SERVER["REQUEST_METHOD"] != "GET") {
    echo json_encode(msg(0, 404, 'Page Not Found!'));
    exit();
}

// Check if the baby_id is provided in the query parameter
if (!isset($_GET['baby_id'])) {
    echo json_encode(msg(0, 400, 'Bad Request. Missing baby_id parameter.'));
    exit();
}

$baby_id = intval($_GET['baby_id']);

try {
    // Check if the baby exists in the babies table
    $stmt = $conn->prepare("SELECT id FROM babies WHERE id = ?");
    $stmt->bind_param("i", $baby_id);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows === 0) {
        $stmt->close();
        echo json_encode(msg(0, 404, 'Baby not found.'));
        exit();
    }
    $stmt->close();

    // Get all vaccines data for the specified baby_id
    $select_query = "SELECT id, age, vaccine, status, date FROM babies_vaccines WHERE baby_id = ?";
    $select_stmt = $conn->prepare($select_query);
    $select_stmt->bind_param("i", $baby_id);
    $select_stmt->execute();
    $result = $select_stmt->get_result();

    $vaccinesData = [];
    while ($row = $result->fetch_assoc()) {
        $vaccinesData[] = $row;
    }

    echo json_encode(msg(1, 200, 'Vaccines data retrieved successfully.', ['data' => $vaccinesData]));
} catch (Exception $e) {
    echo json_encode(msg(0, 500, $e->getMessage()));
}
