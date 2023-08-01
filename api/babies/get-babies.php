<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");
header("Access-Control-Allow-Methods: GET, POST");
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
$returnData = [];

if ($_SERVER["REQUEST_METHOD"] != "GET") {
    $returnData = msg(0, 404, 'Page Not Found!');
} else {
    // Retrieve all babies from the "babies" table
    $stmt = $conn->prepare("SELECT * FROM babies");
    $stmt->execute();
    $result = $stmt->get_result();
    $babies = $result->fetch_all(MYSQLI_ASSOC);
    $stmt->close();

    // Loop through each baby to fetch mother details and combine them
    $babiesWithMothers = [];
    foreach ($babies as $baby) {
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
        $babiesWithMothers[] = $babyWithMother;
    }

    $returnData = msg(1, 200, 'Success', ['babies' => $babiesWithMothers]);
}

echo json_encode($returnData);
?>
