<?php
    
    // Avec un objet
    class User {
        public $name;
        public $age;

        // Constructeur
        public function __construct($name, $age){
            $this->name = $name;
            $this->age = $age;
        }
    }

    // Un objet
    $myObj = new User("Jean", 60);

    // Transformer l'objet en JSON : json_encode(obj)
    $myJSON = json_encode($myObj);

    // Envoyer au navigateur
    echo $myJSON;

    // Avec un tableau
    //$myArray = array("Jean", "Marie", "Louise");
    //echo json_encode($myArray);
?>