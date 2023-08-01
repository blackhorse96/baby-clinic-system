<?php
require '../Enums/Role.php';

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "baby_clinic_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create users credentials table
$roles = [Role::SUPER_ADMIN, Role::ADMIN, Role::MIDWIFE, Role::MOTHER];
$roleEnum = "'" . implode("', '", $roles) . "'";
$sql_users_credentials = "CREATE TABLE IF NOT EXISTS users_credentials (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(10) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM($roleEnum) NOT NULL
)";

if ($conn->query($sql_users_credentials) === TRUE) {
    echo "Users credentials table created successfully.<br>";
} else {
    echo "Error creating users credentials table: " . $conn->error . "<br>";
}

// Create admins table
$sql_admins = "CREATE TABLE IF NOT EXISTS admins (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    nic VARCHAR(15) NOT NULL,
    birthday DATE NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    email VARCHAR(50) NOT NULL,
    address TEXT NOT NULL,
    user_id INT(11),
    FOREIGN KEY (user_id) REFERENCES users_credentials(id)
)";

if ($conn->query($sql_admins) === TRUE) {
    echo "Admins table created successfully.<br>";
} else {
    echo "Error creating admins table: " . $conn->error . "<br>";
}

// Create midwives table
$sql_midwives = "CREATE TABLE IF NOT EXISTS midwives (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    nic VARCHAR(15) NOT NULL,
    birthday DATE NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    hospital VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    address TEXT NOT NULL,
    user_id INT(11),
    FOREIGN KEY (user_id) REFERENCES users_credentials(id)
)";

if ($conn->query($sql_midwives) === TRUE) {
    echo "Midwives table created successfully.<br>";
} else {
    echo "Error creating midwives table: " . $conn->error . "<br>";
}

// Create Mothers table
$sql_mothers = "CREATE TABLE IF NOT EXISTS mothers (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    nic VARCHAR(15) NOT NULL,
    birthday DATE NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    address TEXT NOT NULL,
    husband_name VARCHAR(100) NOT NULL,
    husband_phone_number VARCHAR(15) NOT NULL,
    user_id INT(11),
    FOREIGN KEY (user_id) REFERENCES users_credentials(id)
)";

if ($conn->query($sql_mothers) === TRUE) {
    echo "Mothers table created successfully.<br>";
} else {
    echo "Error creating mothers table: " . $conn->error . "<br>";
}

// Create babies table
$sql_babies = "CREATE TABLE IF NOT EXISTS babies (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    birthday DATE NOT NULL,
    birth_time TIME NOT NULL,
    birth_weight FLOAT NOT NULL,
    birth_height FLOAT NOT NULL,
    gender VARCHAR(10) NOT NULL,
    register_date DATE NOT NULL,
    moh_division VARCHAR(255) NOT NULL,
    division VARCHAR(255) NOT NULL,
    apgar_score INT NOT NULL,
    hospital VARCHAR(100) NOT NULL,
    health_division VARCHAR(255) NOT NULL,
    mother_id INT(11),
    FOREIGN KEY (mother_id) REFERENCES mothers(id)
)";

if ($conn->query($sql_babies) === TRUE) {
    echo "Babies table created successfully.<br>";
} else {
    echo "Error creating babies table: " . $conn->error . "<br>";
}

// Create babies height weight table
$sql_babies_height_weight = "CREATE TABLE IF NOT EXISTS babies_height_weight (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    height FLOAT NOT NULL,
    weight FLOAT NOT NULL,
    baby_id INT(11),
    FOREIGN KEY (baby_id) REFERENCES babies(id)
)";

if ($conn->query($sql_babies_height_weight) === TRUE) {
    echo "Babies height weight table created successfully.<br>";
} else {
    echo "Error creating babies height weight table: " . $conn->error . "<br>";
}

// Create babies vaccine table
$sql_babies_vaccines = "CREATE TABLE IF NOT EXISTS babies_vaccines (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    age VARCHAR(100) NOT NULL,
    vaccine VARCHAR(100) NOT NULL,
    date DATE NOT NULL,
    baby_id INT(11),
    FOREIGN KEY (baby_id) REFERENCES babies(id)
)";

if ($conn->query($sql_babies_vaccines) === TRUE) {
    echo "Babies vaccines table created successfully.<br>";
} else {
    echo "Error creating babies vaccines table: " . $conn->error . "<br>";
}

// Create babies clinics table
$sql_babies_clinics = "CREATE TABLE IF NOT EXISTS babies_clinics (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL,
    visit_type VARCHAR(15) NOT NULL,
    status VARCHAR(15) NOT NULL,
    baby_id INT(11),
    FOREIGN KEY (baby_id) REFERENCES babies(id)
)";

if ($conn->query($sql_babies_clinics) === TRUE) {
    echo "Babies clinics table created successfully.<br>";
} else {
    echo "Error creating babies clinics table: " . $conn->error . "<br>";
}

// Create babies growths table
$sql_babies_growths = "CREATE TABLE IF NOT EXISTS babies_growths (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    detail VARCHAR(150) NOT NULL,
    age_gap VARCHAR(10) NOT NULL,
    month INT NOT NULL,
    baby_id INT(11),
    FOREIGN KEY (baby_id) REFERENCES babies(id)
)";

if ($conn->query($sql_babies_growths) === TRUE) {
    echo "Babies growths table created successfully.<br>";
} else {
    echo "Error creating babies growths table: " . $conn->error . "<br>";
}

// Create notices table
$sql_notices = "CREATE TABLE IF NOT EXISTS notices (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    content TEXT NOT NULL,
    date DATE NOT NULL
)";

if ($conn->query($sql_notices) === TRUE) {
    echo "Notices table created successfully.<br>";
} else {
    echo "Error creating notices table: " . $conn->error . "<br>";
}

// Add super admin user credentials
$username = "superadmin";
$password = password_hash("123456", PASSWORD_DEFAULT);
$role = Role::SUPER_ADMIN;

$stmt = $conn->prepare("INSERT INTO users_credentials (username, password, role) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $password, $role);
$stmt->execute();

// Retrieve the inserted id
$userId = $stmt->insert_id;

// Added Super admin user details
$name = "Super";
$nic = "123456789V";
$birthday = "1990-01-01";
$email = "super@example.com";
$phone_number = "1234567890";
$address = "Colombo";
$user_id = $userId;

$stmt2 = $conn->prepare("INSERT INTO admins (name, nic, birthday, email, phone_number, address, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt2->bind_param("ssssssi", $name, $nic, $birthday, $email, $phone_number, $address, $user_id);
$stmt2->execute();

echo "Super admin user added.<br>";

$conn->close();
?>
