<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../Classes/Database.php';
require_once __DIR__ . '/../Classes/utils.php';

$conn = (new DBConnection())->db();

// DATA FORM REQUEST
$returnData = [];
if ($_SERVER["REQUEST_METHOD"] != "GET") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    if (!isset($_GET['nic'])) {
        $returnData = msg(0, 400, 'Missing nic parameter.');
    } else {
        $nic = $_GET['nic'];
        try {
            $stmt = $conn->prepare("SELECT * FROM mothers WHERE nic = ?");
            $stmt->bind_param("s", $nic);
            $stmt->execute();
            $result = $stmt->get_result();
            $mother = $result->fetch_assoc();
            $stmt->close();

            if ($mother) {
                $returnData = msg(1, 200, 'Success', ['mother' => $mother]);
            } else {
                $returnData = msg(0, 404, 'Mother not found.');
            }
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);
