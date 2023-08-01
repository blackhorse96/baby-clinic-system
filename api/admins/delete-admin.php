<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../Enums/Role.php';
require_once __DIR__ . '/../Classes/Database.php';
require_once __DIR__ . '/../Classes/utils.php';

$conn = (new DBConnection())->db();
// DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));
$returnData = [];
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    if (!isset($data->admin_id)) {
        $returnData = msg(0, 400, 'Missing admin_id parameter.');
    } else {
        $adminId = $data->admin_id;
        try {
            $stmt = $conn->prepare("DELETE admins, users_credentials FROM admins INNER JOIN users_credentials ON admins.user_id = users_credentials.id WHERE admins.id = ?");
            $stmt->bind_param("i", $adminId);
            $stmt->execute();
            $affectedRows = $stmt->affected_rows;
            $stmt->close();

            if ($affectedRows > 0) {
                $returnData = msg(1, 200, 'Admin deleted successfully.');
            } else {
                $returnData = msg(0, 404, 'Admin not found.');
            }
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);
