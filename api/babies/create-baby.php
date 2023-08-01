<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require_once __DIR__ . '/../Classes/Database.php';
require_once __DIR__ . '/../Classes/utils.php';

$conn = (new DBConnection())->db();
// DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));
$returnData = [];
if ($_SERVER["REQUEST_METHOD"] != "POST") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    // Validate input fields
    $name = isset($data->name) ? trim($data->name) : '';
    $birthday = isset($data->birthday) ? trim($data->birthday) : '';
    $birth_time = isset($data->birth_time) ? trim($data->birth_time) : '';
    $birth_weight = isset($data->birth_weight) ? floatval($data->birth_weight) : 0;
    $birth_height = isset($data->birth_height) ? floatval($data->birth_height) : 0;
    $gender = isset($data->gender) ? trim($data->gender) : '';
    $register_date = isset($data->register_date) ? trim($data->register_date) : '';
    $moh_division = isset($data->moh_division) ? trim($data->moh_division) : '';
    $division = isset($data->division) ? trim($data->division) : '';
    $apgar_score = isset($data->apgar_score) ? intval($data->apgar_score) : 0;
    $hospital = isset($data->hospital) ? trim($data->hospital) : '';
    $health_division = isset($data->health_division) ? trim($data->health_division) : '';
    $mother_id = isset($data->mother_id) ? intval($data->mother_id) : 0;

    if (
        empty($name) || empty($birthday) || empty($birth_time) || $birth_weight <= 0
        || $birth_height <= 0 || empty($gender) || empty($register_date) || empty($moh_division)
        || empty($division) || $apgar_score <= 0 || empty($hospital) || empty($health_division)
    ) {
        $returnData = msg(0, 422, 'Please Fill in all Required Fields!');
    } else {
        try {
            // Check if the mother_id exists in the mothers table
            if ($mother_id > 0) {
                $stmt = $conn->prepare("SELECT id FROM mothers WHERE id = ?");
                $stmt->bind_param("i", $mother_id);
                $stmt->execute();
                $stmt->store_result();

                if ($stmt->num_rows === 0) {
                    $stmt->close();
                    $returnData = msg(0, 404, 'Mother not found.');
                    echo json_encode($returnData);
                    exit();
                }
                $stmt->close();
            }

            // Insert into babies table
            $insert_baby_query = "INSERT INTO babies (name, birthday, birth_time, birth_weight, birth_height, gender, register_date, moh_division, division, apgar_score, hospital, health_division, mother_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            $insert_baby_stmt = $conn->prepare($insert_baby_query);
            $insert_baby_stmt->bind_param("sssddssssissi", $name, $birthday, $birth_time, $birth_weight, $birth_height, $gender, $register_date, $moh_division, $division, $apgar_score, $hospital, $health_division, $mother_id);
            $insert_baby_stmt->execute();

            $returnData = msg(1, 201, 'Baby created successfully.');
        } catch (Exception $e) {
            $returnData = msg(0, 500, $e->getMessage());
        }
    }
}

echo json_encode($returnData);
