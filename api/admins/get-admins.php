<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../Enums/Role.php';
require_once __DIR__ . '/../Classes/Database.php';
require_once __DIR__ . '/../Classes/utils.php';

$conn = (new DBConnection())->db();

$returnData = [];

if ($_SERVER["REQUEST_METHOD"] != "GET") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    try {
        // Retrieve all admins with their corresponding user credentials.
        $sql_get_admins = "SELECT a.*, u.username, u.role FROM admins a INNER JOIN users_credentials u ON a.user_id = u.id";
        $result = $conn->query($sql_get_admins);

        if ($result->num_rows > 0) {
            $admins = array();
            while ($row = $result->fetch_assoc()) {
                $admins[] = $row;
            }
            $returnData = msg(1, 200, 'Success', ['admins' => $admins]);
        } else {
            $returnData = msg(0, 404, 'No admins found.');
        }
    } catch (Exception $e) {
        $returnData = msg(0, 500, $e->getMessage());
    }
}

echo json_encode($returnData);
