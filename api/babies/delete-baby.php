<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../Classes/Database.php';
require_once __DIR__ . '/../Classes/utils.php';

$conn = (new DBConnection())->db();

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    if (!isset($data->baby_id)) {
        $returnData = msg(0, 400, 'Missing baby_id parameter.');
    } else {
        $babyId = $data->baby_id;
        try {
            $stmt = $conn->prepare("DELETE FROM babies WHERE id = ?");
            $stmt->bind_param("i", $babyId);
            $stmt->execute();
            $affectedRows = $stmt->affected_rows;
            $stmt->close();

            if ($affectedRows > 0) {
                $returnData = msg(1, 200, 'Baby deleted successfully.');
            } else {
                $returnData = msg(0, 404, 'Baby not found.');
            }
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);
