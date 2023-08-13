<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../Classes/Database.php';
require '../Enums/Role.php';

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "baby_clinic_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

function msg($success, $status, $message, $extra = [])
{
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ], $extra);
}

$data = json_decode(file_get_contents("php://input"));
$returnData = [];

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    if (!isset($data->user_id) || empty(trim($data->user_id))) {
        $returnData = msg(0, 422, 'Please provide a user ID.');
        echo json_encode($returnData);
        exit();
    }

    $user_id = intval($data->user_id);

    try {
        $select_query = "SELECT role, username FROM users_credentials WHERE id = ?";
        $select_stmt = $conn->prepare($select_query);
        $select_stmt->bind_param("i", $user_id);
        $select_stmt->execute();
        $result = $select_stmt->get_result();

        if ($result->num_rows === 0) {
            $returnData = msg(0, 404, 'User not found.');
            echo json_encode($returnData);
            exit();
        }

        $user = $result->fetch_assoc();
        $role = $user['role'];
        $username = $user['username'];

        $profileData = [];
        switch ($role) {
            case Role::SUPER_ADMIN:
            case Role::ADMIN:
                $select_query = "SELECT * FROM admins WHERE user_id = ?";
                break;
            case Role::MIDWIFE:
                $select_query = "SELECT * FROM midwives WHERE user_id = ?";
                break;
            case Role::MOTHER:
                $select_query = "SELECT * FROM mothers WHERE user_id = ?";
                break;
        }

        if (!empty($select_query)) {
            $stmt = $conn->prepare($select_query);
            $stmt->bind_param("i", $user_id);
            $stmt->execute();
            $result = $stmt->get_result();
            $profileData = $result->fetch_assoc();
            $stmt->close();
        }

        $profileData['username'] = $username;

        if (empty($profileData)) {
            $returnData = msg(0, 404, 'Profile data not found.');
        } else {
            $returnData = msg(1, 200, 'Profile data retrieved successfully.', ['data' => $profileData]);
        }
    } catch (Exception $e) {
        $returnData = msg(0, 500, $e->getMessage());
    }
}

echo json_encode($returnData);
