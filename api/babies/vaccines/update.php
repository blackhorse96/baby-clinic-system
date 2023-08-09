<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");

require_once __DIR__ . '/../../Classes/Database.php';

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "baby_clinic_db";

$conn = new mysqli($servername, $username, $password, $dbname);

function msg($success, $status, $message)
{
    return [
        'success' => $success,
        'status' => $status,
        'message' => $message
    ];
}

$data = json_decode(file_get_contents("php://input"));
$returnData = [];

if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    if (!isset($data->vaccine_id)) {
        $returnData = msg(0, 400, 'Bad Request. Missing vaccine_id parameter.');
        echo json_encode($returnData);
        exit();
    }

    $vaccine_id = intval($data->vaccine_id);

    try {
        $stmt = $conn->prepare("SELECT id FROM babies_vaccines WHERE id = ?");
        $stmt->bind_param("i", $vaccine_id);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows === 0) {
            $stmt->close();
            $returnData = msg(0, 404, 'Vaccine not found.');
            echo json_encode($returnData);
            exit();
        }

        // Update vaccine details in the babies_vaccines table
        $update_query = "UPDATE babies_vaccines SET age = ?, vaccine = ?, date = ?, status = ? WHERE id = ?";
        $update_stmt = $conn->prepare($update_query);
        $update_stmt->bind_param("ssssi", $data->age, $data->vaccine, $data->date, $data->status, $vaccine_id);
        $update_stmt->execute();

        $returnData = msg(1, 200, 'Vaccine updated successfully.');
        echo json_encode($returnData);
    } catch (Exception $e) {
        $returnData = msg(0, 500, $e->getMessage());
        echo json_encode($returnData);
    }
}
?>
