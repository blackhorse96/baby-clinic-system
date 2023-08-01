<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../Enums/Role.php';
require_once __DIR__ . '/../Classes/Database.php';
require_once __DIR__ . '/../Classes/utils.php';

$conn = new DBConnection();

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    if (!isset($data->mother_id)) {
        $returnData = msg(0, 400, 'Missing mother_id parameter.');
    } else {
        $motherId = $data->mother_id;
        try {
            $stmt = $conn->prepare("DELETE mothers, users_credentials FROM mothers INNER JOIN users_credentials ON mothers.user_id = users_credentials.id WHERE mothers.id = ?");
            $stmt->bind_param("i", $motherId);
            $stmt->execute();
            $affectedRows = $stmt->affected_rows;
            $stmt->close();

            if ($affectedRows > 0) {
                $returnData = msg(1, 200, 'Mother deleted successfully.');
            } else {
                $returnData = msg(0, 404, 'Mother not found.');
            }
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);
