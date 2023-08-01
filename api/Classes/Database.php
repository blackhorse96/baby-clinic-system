<?php
include_once('../env.php');
class DBConnection {
    protected $database;

    function __construct(){
        $this->connect();
    }

    protected function connect() {

        $this->database = new mysqli(HOST, DBUSER, DBPASSWORD, DBNAME);
        // Check connection
        if ($this->database->connect_error) {
            die("Connection failed: " . $this->database->connect_error);
        }
    }

    function __destruct(){
        $this->database->close();
    }

    function db(): mysqli {
        if (!isset($this->database)) {
            $this->connect();
        }
        return $this->database;
    }

}