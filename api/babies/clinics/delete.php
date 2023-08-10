<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: DELETE");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../../Classes/Database.php';

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "baby_clinic_db";

$conn = new mysqli($servername, $username, $password, $dbname);

function msg($success, $status, $message, $extra = [])
{
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ], $extra);
}

$data = json_decode(file_get_contents("php://input"));
$returnData = [];

if ($_SERVER["REQUEST_METHOD"] != "DELETE") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    if (!isset($data->id)) {
        $returnData = msg(0, 400, 'Bad Request. Missing id parameter.');
    } else {
        $id = intval($data->id);

        try {
            $delete_query = "DELETE FROM babies_clinics WHERE id = ?";
            $delete_stmt = $conn->prepare($delete_query);
            $delete_stmt->bind_param("i", $id);
            $delete_stmt->execute();

            if ($delete_stmt->affected_rows > 0) {
                $returnData = msg(1, 200, 'Clinic record deleted successfully.');
            } else {
                $returnData = msg(0, 404, 'Clinic record not found.');
            }
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);
