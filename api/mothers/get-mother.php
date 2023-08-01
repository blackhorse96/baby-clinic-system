<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../Enums/Role.php';
require_once __DIR__ . '/../Classes/Database.php';

$conn = new DBConnection();

function msg($success, $status, $message, $extra = [])
{
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ], $extra);
}

$returnData = [];

if ($_SERVER["REQUEST_METHOD"] != "GET") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    if (!isset($_GET['mother_id'])) {
        $returnData = msg(0, 400, 'Missing mother_id parameter.');
    } else {
        $motherId = $_GET['mother_id'];
        try {
            $sql_get_mother = "SELECT m.*, u.username, u.role FROM mothers m INNER JOIN users_credentials u ON m.user_id = u.id WHERE m.id = ?";
            $stmt = $conn->prepare($sql_get_mother);
            $stmt->bind_param("i", $motherId);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows === 1) {
                $mother = $result->fetch_assoc();
                $returnData = msg(1, 200, 'Success', ['mother' => $mother]);
            } else {
                $returnData = msg(0, 404, 'Mother not found.');
            }
            $stmt->close();
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);
