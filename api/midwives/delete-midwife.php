<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../Enums/Role.php';
require_once __DIR__ . '/../Classes/Database.php';
require_once __DIR__ . '/../Classes/utils.php';

$conn = (new DBConnection())->db();

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    if (!isset($data->midwife_id)) {
        $returnData = msg(0, 400, 'Missing midwife_id parameter.');
    } else {
        $midwifeId = $data->midwife_id;
        try {
            $stmt = $conn->prepare("DELETE midwives, users_credentials FROM midwives INNER JOIN users_credentials ON midwives.user_id = users_credentials.id WHERE midwives.id = ?");
            $stmt->bind_param("i", $midwifeId);
            $stmt->execute();
            $affectedRows = $stmt->affected_rows;
            $stmt->close();

            if ($affectedRows > 0) {
                $returnData = msg(1, 200, 'Midwife deleted successfully.');
            } else {
                $returnData = msg(0, 404, 'Midwife not found.');
            }
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);