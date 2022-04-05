<?php
    // dire que l'on recoi t un json

    header("Content-Type:application/json;charset=utf-8");

    //recup du paramètre 

    $obj = json.decode($_GET['p']);

   //* extraction 

   echo "Table : " . $obj->table . " " . "Limite: " . $obj->limit;
    // Transformer l'objet en JSON : json_encode(obj)
    //$myJSON = json_encode($myObj);

    // Envoyer au navigateur
    //echo $myJSON;

    // Avec un tableau
    //$myArray = array("Jean", "Marie", "Louise");
    //echo json_encode($myArray);
?>