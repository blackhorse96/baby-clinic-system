<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once __DIR__ . '/../../Classes/Database.php';
require_once __DIR__ . '/../../Classes/utils.php';

$conn = new DBConnection();

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    // Validate input fields
    $requiredFields = ['date', 'height', 'weight', 'baby_id'];
    foreach ($requiredFields as $field) {
        if (!isset($data->$field) || empty(trim($data->$field))) {
            $returnData = msg(0, 422, 'Please Fill in all Required Fields!');
            echo json_encode($returnData);
            exit();
        }
    }

    $date = trim($data->date);
    $height = floatval($data->height);
    $weight = floatval($data->weight);
    $baby_id = intval($data->baby_id);

    try {
        // Check if the baby_id exists in the babies table
        $stmt = $conn->prepare("SELECT id FROM babies WHERE id = ?");
        $stmt->bind_param("i", $baby_id);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows === 0) {
            $stmt->close();
            $returnData = msg(0, 404, 'Baby not found.');
            echo json_encode($returnData);
            exit();
        }
        $stmt->close();

        // Insert into babies_height_weight table
        $insert_h_w_query = "INSERT INTO babies_height_weight (date, height, weight, baby_id) VALUES (?, ?, ?, ?)";
        $insert_h_w_stmt = $conn->prepare($insert_h_w_query);
        $insert_h_w_stmt->bind_param("sddi", $date, $height, $weight, $baby_id);
        $insert_h_w_stmt->execute();

        $returnData = msg(1, 201, 'Height and Weight data added successfully.');
    } catch (Exception $e) {
        $returnData = msg(0, 500, $e->getMessage());
    }
}

echo json_encode($returnData);
