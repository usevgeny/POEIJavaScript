<?php
    // Dire qu'on reçoit un JSON
    header("Content-Type:application/json; charset=utf-8");

    // Récup du paramètre
    $obj = json_decode($_POST['p']);

    // Extraction
    echo "Table :" . $obj->table . " " . " Limit : " . $obj->limit;
?>