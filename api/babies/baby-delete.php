<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: POST");
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
    if (!isset($data->baby_id)) {
        $returnData = msg(0, 400, 'Missing baby_id parameter.');
    } else {
        $babyId = $data->baby_id;
        try {
            // Delete data from related tables
            $delete_stmts = [
                "DELETE FROM babies_height_weight WHERE baby_id = ?",
                "DELETE FROM babies_vaccines WHERE baby_id = ?",
                "DELETE FROM babies_clinics WHERE baby_id = ?",
                "DELETE FROM babies_growths WHERE baby_id = ?",
                "DELETE FROM babies WHERE id = ?"
            ];

            foreach ($delete_stmts as $delete_stmt) {
                $stmt = $conn->prepare($delete_stmt);
                if (!$stmt) {
                    $returnData = msg(0, 500, 'Error preparing statement: ' . $conn->error);
                    echo json_encode($returnData);
                    exit();
                }
                $stmt->bind_param("i", $babyId);
                $stmt->execute();
                $stmt->close();
            }

            $returnData = msg(1, 200, 'Baby and related data deleted successfully.');
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);
?>
