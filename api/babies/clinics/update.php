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

if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    if (!isset($data->id)) {
        $returnData = msg(0, 400, 'Bad Request. Missing id parameter.');
    } else {
        $id = intval($data->id);
        $date = $data->date;
        $visit_type = $data->visit_type;
        $status = $data->status;
        $reason = $data->reason;

        try {
            $update_query = "UPDATE babies_clinics SET date = ?, visit_type = ?, status = ?, reason = ? WHERE id = ?";
            $update_stmt = $conn->prepare($update_query);
            $update_stmt->bind_param("ssssi", $date, $visit_type, $status, $reason, $id);
            $update_stmt->execute();

            if ($update_stmt->affected_rows > 0) {
                $returnData = msg(1, 200, 'Clinic record updated successfully.');
            } else {
                $returnData = msg(0, 404, 'Clinic record not found.');
            }
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);
