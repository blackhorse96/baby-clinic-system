<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

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
    if (!isset($data->user_id) || empty(trim($data->user_id))) {
        $returnData = msg(0, 422, 'Please provide a user ID.');
        echo json_encode($returnData);
        exit();
    }

    $user_id = intval($data->user_id);

    try {
        // Retrieve mother ID based on user ID
        $select_query = "SELECT id FROM mothers WHERE user_id = ?";
        $select_stmt = $conn->prepare($select_query);
        $select_stmt->bind_param("i", $user_id);
        $select_stmt->execute();
        $select_result = $select_stmt->get_result();

        if ($select_result->num_rows === 0) {
            $returnData = msg(0, 404, 'Mother data not found.');
            echo json_encode($returnData);
            exit();
        }

        $mother = $select_result->fetch_assoc();
        $mother_id = $mother['id'];

        // Retrieve babies data based on mother_id
        $select_query = "SELECT * FROM babies WHERE mother_id = ?";
        $select_stmt = $conn->prepare($select_query);
        $select_stmt->bind_param("i", $mother_id);
        $select_stmt->execute();
        $result = $select_stmt->get_result();

        $babiesData = [];
        while ($row = $result->fetch_assoc()) {
            $babiesData[] = $row;
        }

        $babiesWithMothers = [];
        foreach ($babiesData as $baby) {
            $babyId = $baby['id'];
            $motherId = $baby['mother_id'];

            // Fetch mother details if a mother_id is available
            if ($motherId) {
                $stmt = $conn->prepare("SELECT * FROM mothers WHERE id = ?");
                $stmt->bind_param("i", $motherId);
                $stmt->execute();
                $result = $stmt->get_result();
                $motherData = $result->fetch_assoc();
                $stmt->close();
            } else {
                $motherData = null;
            }

            // Combine baby data with mother data (if available)
            $babyWithMother = $baby;
            $babyWithMother['mother'] = $motherData;

            // Fetch baby vaccines with the specified status
            $vaccine_status = "PENDING"; // Modify this to the desired status
            $vaccines_query = "SELECT * FROM babies_vaccines WHERE baby_id = ? AND status = ?";
            $vaccines_stmt = $conn->prepare($vaccines_query);
            $vaccines_stmt->bind_param("is", $babyId, $vaccine_status);
            $vaccines_stmt->execute();
            $vaccines_result = $vaccines_stmt->get_result();
            $vaccinesData = [];
            while ($vaccineRow = $vaccines_result->fetch_assoc()) {
                $vaccinesData[] = $vaccineRow;
            }
            $vaccines_stmt->close();

            $babyWithMother['vaccines'] = $vaccinesData;

            // Fetch baby clinics with the specified status
            $clinic_status = "PENDING"; // Modify this to the desired status
            $clinics_query = "SELECT * FROM babies_clinics WHERE baby_id = ? AND status = ?";
            $clinics_stmt = $conn->prepare($clinics_query);
            $clinics_stmt->bind_param("is", $babyId, $clinic_status);
            $clinics_stmt->execute();
            $clinics_result = $clinics_stmt->get_result();
            $clinicsData = [];
            while ($clinicRow = $clinics_result->fetch_assoc()) {
                $clinicsData[] = $clinicRow;
            }
            $clinics_stmt->close();

            $babyWithMother['clinics'] = $clinicsData;

            $babiesWithMothers[] = $babyWithMother;
        }

        if (empty($babiesData)) {
            $returnData = msg(0, 404, 'Babies data not found.');
        } else {
            $returnData = msg(1, 200, 'Babies data retrieved successfully.', ['data' => $babiesWithMothers]);
        }
    } catch (Exception $e) {
        $returnData = msg(0, 500, $e->getMessage());
    }
}

echo json_encode($returnData);
