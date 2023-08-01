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
    // Validate input fields
    $user_id = isset($_GET['user_id']) ? intval($_GET['user_id']) : 0;

    if (empty($user_id)) {
        $returnData = msg(0, 422, 'Please provide a valid user ID.');
    } else {
        try {
            // Retrieve admin with the specified user_id along with their corresponding user credentials.
            $sql_get_admin = "SELECT a.*, u.username, u.role FROM admins a INNER JOIN users_credentials u ON a.user_id = u.id WHERE a.user_id = $user_id";
            $result = $conn->query($sql_get_admin);

            if ($result->num_rows > 0) {
                $admin = $result->fetch_assoc();
                $returnData = msg(1, 200, 'Success', ['admin' => $admin]);
            } else {
                $returnData = msg(0, 404, 'Admin not found.');
            }
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);
