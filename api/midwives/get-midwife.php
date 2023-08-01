<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../Enums/Role.php';
require_once __DIR__ . '/../Classes/Database.php';
require_once __DIR__ . '/../Classes/utils.php';

$conn = (new DBConnection())->db();

if ($_SERVER["REQUEST_METHOD"] != "GET") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    // Validate and sanitize the input
    $midwife_id = isset($_GET['midwife_id']) ? intval($_GET['midwife_id']) : 0;

    if ($midwife_id <= 0) {
        $returnData = msg(0, 400, 'Invalid midwife ID.');
    } else {
        try {
            $sql_get_midwife = "SELECT m.*, u.username, u.role FROM midwives m INNER JOIN users_credentials u ON m.user_id = u.id WHERE m.id = ?";
            $stmt = $conn->prepare($sql_get_midwife);
            $stmt->bind_param("i", $midwife_id);
            $stmt->execute();
            $result = $stmt->get_result();

            if ($result->num_rows > 0) {
                $midwife = $result->fetch_assoc();
                $returnData = msg(1, 200, 'Success', ['midwife' => $midwife]);
            } else {
                $returnData = msg(0, 404, 'Midwife not found.');
            }
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);
