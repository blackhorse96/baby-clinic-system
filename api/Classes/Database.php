<?php
include_once('../env.php');
class DBConnection {
    protected $database;

    function __construct(){
        $this->connect();
    }

    protected function connect() {
        error_log(HOST);
        error_log(DBUSER);
        error_log(DBPASSWORD);
        error_log(DBNAME);
        $this->database = new mysqli(HOST, DBUSER, DBPASSWORD, DBNAME);
        // Check connection
        if ($this->database->connect_error) {
            error_log($this->database->connect_error);
            die("Connection failed: " . $this->database->connect_error);
        }
    }

    function __destruct(){
//        $this->database->close();
    }

    public function db(): mysqli {
        if (!isset($this->database)) {
            $this->connect();
        }
        return $this->database;
    }

    public function close() {
        $this->database->close();
    }

}