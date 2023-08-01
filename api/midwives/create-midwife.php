<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once __DIR__ . '/../Enums/Role.php';
require_once __DIR__ . '/../Classes/Database.php';
require_once __DIR__ . '/../Classes/utils.php';

$conn = (new DBConnection())->db();

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    // Validate input fields
    $username = isset($data->username) ? trim($data->username) : '';
    $password = isset($data->password) ? trim($data->password) : '';
    $name = isset($data->name) ? trim($data->name) : '';
    $nic = isset($data->nic) ? trim($data->nic) : '';
    $birthday = isset($data->birthday) ? trim($data->birthday) : '';
    $phone_number = isset($data->phone_number) ? trim($data->phone_number) : '';
    $hospital = isset($data->hospital) ? trim($data->hospital) : '';
    $email = isset($data->email) ? trim($data->email) : '';
    $address = isset($data->address) ? trim($data->address) : '';

    if (
        empty($username) || empty($password) || empty($name) || empty($nic)
        || empty($birthday) || empty($phone_number) || empty($hospital)
        || empty($email) || empty($address)
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
            $stmt = $conn->prepare("SELECT * FROM `users_credentials` WHERE `username` = ?");
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $stmt->store_result();

            if ($stmt->num_rows > 0) {
                $stmt->close();
                $returnData = msg(0, 422, 'Username is already in use!');
            } else {
                $stmt->close();

                // Insert into users_credentials table
                $role = Role::MIDWIFE;
                $insert_credentials_query = "INSERT INTO users_credentials (username, password, role) VALUES (?, ?, ?)";
                $insert_credentials_stmt = $conn->prepare($insert_credentials_query);
                $hashed_password = password_hash($password, PASSWORD_DEFAULT);
                $insert_credentials_stmt->bind_param("sss", $username, $hashed_password, $role);
                $insert_credentials_stmt->execute();
                $user_id = $insert_credentials_stmt->insert_id;

                // Insert into midwives table
                $insert_midwife_query = "INSERT INTO midwives (name, nic, birthday, phone_number, hospital, email, address, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
                $insert_midwife_stmt = $conn->prepare($insert_midwife_query);
                $insert_midwife_stmt->bind_param("sssssssi", $name, $nic, $birthday, $phone_number, $hospital, $email, $address, $user_id);
                $insert_midwife_stmt->execute();

                $returnData = msg(1, 201, 'Midwife created successfully.');
            }
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);
