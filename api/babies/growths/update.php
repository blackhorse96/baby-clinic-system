<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../../Classes/Database.php';

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "baby_clinic_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

function msg($success, $status, $message)
{
    return [
        'success' => $success,
        'status' => $status,
        'message' => $message
    ];
}

$data = json_decode(file_get_contents("php://input"));
$returnData = [];

if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    if (!isset($data->id)) {
        $returnData = msg(0, 400, 'Bad Request. Missing id parameter.');
    } else {
        $growth_id = intval($data->id);

        try {
            // Check if the growth record exists
            $stmt = $conn->prepare("SELECT id FROM babies_growths WHERE id = ?");
            $stmt->bind_param("i", $growth_id);
            $stmt->execute();
            $stmt->store_result();

            if ($stmt->num_rows === 0) {
                $stmt->close();
                $returnData = msg(0, 404, 'Growth record not found.');
                echo json_encode($returnData);
                exit();
            }
            $stmt->close();

            // Update the growth record
            $update_query = "UPDATE babies_growths SET detail = ?, age_gap = ?, month = ? WHERE id = ?";
            $update_stmt = $conn->prepare($update_query);
            $update_stmt->bind_param("ssii", $data->detail, $data->age_gap, $data->month, $growth_id);
            $update_stmt->execute();

            if ($update_stmt->affected_rows > 0) {
                $returnData = msg(1, 200, 'Growth record updated successfully.');
            } else {
                $returnData = msg(0, 500, 'Failed to update growth record.');
            }
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);
?>
