<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../../Classes/Database.php';
require_once __DIR__ . '/../../Classes/utils.php';

$conn = new DBConnection();

if ($_SERVER["REQUEST_METHOD"] != "GET") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    // Check if the baby_id is provided in the query parameter
    if (!isset($_GET['baby_id'])) {
        $returnData = msg(0, 400, 'Bad Request. Missing baby_id parameter.');
        echo json_encode($returnData);
        exit();
    }

    $baby_id = intval($_GET['baby_id']);

    try {
        // Check if the baby exists in the babies table
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

        // Get all height and weight data for the specified baby_id
        $select_query = "SELECT id, date, height, weight FROM babies_height_weight WHERE baby_id = ?";
        $select_stmt = $conn->prepare($select_query);
        $select_stmt->bind_param("i", $baby_id);
        $select_stmt->execute();
        $result = $select_stmt->get_result();

        $heightWeightData = [];
        while ($row = $result->fetch_assoc()) {
            $heightWeightData[] = $row;
        }

        $returnData = msg(1, 200, 'Height and Weight data retrieved successfully.', ['data' => $heightWeightData]);
    } catch (Exception $e) {
        $returnData = msg(0, 500, $e->getMessage());
    }
}

echo json_encode($returnData);
