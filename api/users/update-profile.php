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
        $select_query = "SELECT * FROM users_credentials WHERE id = ?";
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
        $current_username = $user['username']; // Get the current username

        // Check if the updated username already exists
        if ($current_username !== $data->username) {
            $check_username_query = "SELECT * FROM users_credentials WHERE username = ?";
            $check_username_stmt = $conn->prepare($check_username_query);
            $check_username_stmt->bind_param("s", $data->username);
            $check_username_stmt->execute();
            $check_username_result = $check_username_stmt->get_result();

            if ($check_username_result->num_rows > 0) {
                $returnData = msg(0, 422, 'Username already exists. Please choose a different username.');
                echo json_encode($returnData);
                exit();
            }
        }

        // Update username and password if provided
        $update_query = "UPDATE users_credentials SET username = ?";
        $update_params = ["s", $data->username];

        // Check if new password is provided
        if (isset($data->password) && !empty(trim($data->password))) {
            $hashed_password = password_hash($data->password, PASSWORD_DEFAULT); // Hash the password
            $update_query .= ", password = ?";
            $update_params[0] .= "s";
            $update_params[] = $hashed_password;
        }

        $update_query .= " WHERE id = ?";
        $update_params[0] .= "i";
        $update_params[] = $user_id;

        $stmt = $conn->prepare($update_query);
        $stmt->bind_param(...$update_params);
        $stmt->execute();
        $stmt->close();

        // Update other data based on role
        $role = $user['role'];
        switch ($role) {
            case Role::SUPER_ADMIN:
                $update_query = "UPDATE admins SET name = ?, nic = ?, birthday = ?, phone_number = ?, email = ?, address = ? WHERE user_id = ?";
                $stmt = $conn->prepare($update_query);
                $stmt->bind_param("ssssssi",
                    $data->name,
                    $data->nic,
                    $data->birthday,
                    $data->phone_number,
                    $data->email,
                    $data->address,
                    $user_id
                );
                $stmt->execute();
                $stmt->close();
                break;
            case Role::ADMIN:
                $update_query = "UPDATE admins SET name = ?, nic = ?, birthday = ?, phone_number = ?, email = ?, address = ? WHERE user_id = ?";
                $stmt = $conn->prepare($update_query);
                $stmt->bind_param("ssssssi",
                    $data->name,
                    $data->nic,
                    $data->birthday,
                    $data->phone_number,
                    $data->email,
                    $data->address,
                    $user_id
                );
                $stmt->execute();
                $stmt->close();
                break;
            case Role::MIDWIFE:
                $update_query = "UPDATE midwives SET name = ?, nic = ?, birthday = ?, phone_number = ?, hospital = ?, email = ?, address = ? WHERE user_id = ?";
                $stmt = $conn->prepare($update_query);
                $stmt->bind_param("sssssssi",
                    $data->name,
                    $data->nic,
                    $data->birthday,
                    $data->phone_number,
                    $data->hospital,
                    $data->email,
                    $data->address,
                    $user_id
                );
                $stmt->execute();
                $stmt->close();
                break;
            case Role::MOTHER:
                $update_query = "UPDATE mothers SET name = ?, nic = ?, birthday = ?, email = ?, phone_number = ?, address = ?, husband_name = ?, husband_phone_number = ? WHERE user_id = ?";
                $stmt = $conn->prepare($update_query);
                $stmt->bind_param("ssssssssi",
                    $data->name,
                    $data->nic,
                    $data->birthday,
                    $data->email,
                    $data->phone_number,
                    $data->address,
                    $data->husband_name,
                    $data->husband_phone_number,
                    $user_id
                );
                $stmt->execute();
                $stmt->close();
                break;
        }

        $returnData = msg(1, 200, 'Profile updated successfully.');
    } catch (Exception $e) {
        $returnData = msg(0, 500, $e->getMessage());
    }
}

echo json_encode($returnData);
