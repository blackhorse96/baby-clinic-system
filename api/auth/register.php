<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once __DIR__ . '/../Enums/Role.php';
require_once __DIR__ . '/../Classes/Database.php';

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

// DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));
$returnData = [];

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    // Validate input fields
    $username = isset($data->username) ? trim($data->username) : '';
    $password = isset($data->password) ? trim($data->password) : '';
    $name = isset($data->name) ? trim($data->name) : '';
    $nic = isset($data->nic) ? trim($data->nic) : '';
    $birthday = isset($data->birthday) ? trim($data->birthday) : '';
    $email = isset($data->email) ? trim($data->email) : '';
    $phone_number = isset($data->phone_number) ? trim($data->phone_number) : '';
    $address = isset($data->address) ? trim($data->address) : '';
    $husband_name = isset($data->husband_name) ? trim($data->husband_name) : '';
    $husband_phone_number = isset($data->husband_phone_number) ? trim($data->husband_phone_number) : '';

    if (
        empty($username) || empty($password) || empty($name) || empty($nic)
        || empty($birthday) || empty($email) || empty($phone_number) || empty($address)
        || empty($husband_name) || empty($husband_phone_number)
    ) {
        $returnData = msg(0, 422, 'Please Fill in all Required Fields!');
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $returnData = msg(0, 422, 'Invalid Email Address!');
    } elseif (strlen($password) < 4) {
        $returnData = msg(0, 422, 'Your password must be at least 4 characters long!');
    } elseif (strlen($username) < 3) {
        $returnData = msg(0, 422, 'Your username must be at least 3 characters long!');
    } else {
        try {
            $stmt = $conn->prepare("SELECT * FROM `users_credentials` WHERE `username` IN (?)");
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $stmt->store_result();

            if ($stmt->num_rows > 0) {
                $stmt->close();
                $returnData = msg(0, 422, 'Username is already in use!');
            } else {
                $stmt->close();

                // Insert into users_credentials table
                $role = Role::MOTHER;
                $insert_credentials_query = "INSERT INTO users_credentials (username, password, role) VALUES (?, ?, ?)";
                $insert_credentials_stmt = $conn->prepare($insert_credentials_query);
                $hashed_password = password_hash($password, PASSWORD_DEFAULT);
                $insert_credentials_stmt->bind_param("sss", $username, $hashed_password, $role);
                $insert_credentials_stmt->execute();
                $user_id = $insert_credentials_stmt->insert_id;

                // Insert into mothers table
                $insert_mother_query = "INSERT INTO mothers (name, nic, birthday, email, phone_number, address, husband_name, husband_phone_number, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
                $insert_mother_stmt = $conn->prepare($insert_mother_query);
                $insert_mother_stmt->bind_param("ssssssssi", $name, $nic, $birthday, $email, $phone_number, $address, $husband_name, $husband_phone_number, $user_id);
                $insert_mother_stmt->execute();

                $returnData = msg(1, 201, 'You have successfully registered.');
            }
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);
