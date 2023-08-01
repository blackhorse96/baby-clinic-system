<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../Enums/Role.php';
require_once __DIR__ . '/../Classes/Database.php';
require_once __DIR__ . '/../Classes/utils.php';

$conn = new DBConnection();

if ($_SERVER["REQUEST_METHOD"] != "GET") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    try {
        $sql_get_mothers = "SELECT m.*, u.username, u.role FROM mothers m INNER JOIN users_credentials u ON m.user_id = u.id";
        $result = $conn->query($sql_get_mothers);

        if ($result->num_rows > 0) {
            $mothers = [];
            while ($row = $result->fetch_assoc()) {
                $mothers[] = $row;
            }
            $returnData = msg(1, 200, 'Success', ['mothers' => $mothers]);
        } else {
            $returnData = msg(0, 200, 'No mothers found.');
        }
    } catch (Exception $e) {
        $returnData = msg(0, 500, $e->getMessage());
    }
}

echo json_encode($returnData);
