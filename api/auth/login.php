<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once __DIR__ . '/../Enums/Role.php';
require_once __DIR__ . '/../Classes/JwtHandler.php';
require_once __DIR__ . '/../Classes/Database.php';
require_once __DIR__ . '/../Classes/utils.php';

$conn = (new DBConnection())->db();


if ($_SERVER["REQUEST_METHOD"] != "POST") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    // Validate input fields
    $username = isset($data->username) ? trim($data->username) : '';
    $password = isset($data->password) ? trim($data->password) : '';
    error_log($username);
    error_log($password);
    if (empty($username) || empty($password)) {
        $returnData = msg(0, 422, 'Please Fill in all Required Fields!');
    } else {
        try {
            $fetch_user_by_username = "SELECT * FROM `users_credentials` WHERE `username`=?";
            $stmt = $conn->prepare($fetch_user_by_username);
            $stmt->bind_param("s", $username);
            $stmt->execute();
            $result = $stmt->get_result();
            $stmt->close();

            // IF THE USER IS FOUND BY USERNAME
            if ($result->num_rows === 1) {
                $user = $result->fetch_assoc();
                $check_password = password_verify($password, $user['password']);

                // VERIFYING THE PASSWORD (IS CORRECT OR NOT?)
                // IF PASSWORD IS CORRECT THEN SEND THE LOGIN TOKEN
                if ($check_password) {
                    $jwt = new JwtHandler();
                    $token = $jwt->jwtEncodeData(
                        'http://localhost/php_auth_api/',
                        array("user_id" => $user['id'])
                    );

                    $returnData = [
                        'success' => 1,
                        'message' => 'You have successfully logged in.',
                        'data' => [
                            'id' => $user['id'],
                            'role' => $user['role'],
                            'token' => $token
                        ]
                    ];
                } else {
                    // IF INVALID PASSWORD
                    $returnData = msg(0, 422, 'Invalid Password!');
                }
            } else {
                // IF THE USER IS NOT FOUND BY USERNAME THEN SHOW THE FOLLOWING ERROR
                $returnData = msg(0, 422, 'Invalid Username!');
            }
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);
