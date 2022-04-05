<?php
	try {
		$dsn = 'mysql:host=localhost;dbname=bookstore;charset=utf8';
		$user = 'root';
		$pass = '';
		
		//Créer une instance de PDO
		$dbh = new PDO($dsn,$user,$pass);
		$dbh->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		
		// La requête à exécuter
		$titre = $_POST['titre'];
		$auteur = $_POST['auteur'];
		$query = "INSERT INTO Livres(titre,auteur) VALUES('$titre','$auteur')";
		
		// Exécute la requête avec exec()
		$count = $dbh->exec($query);
		
		// Message
		if($count){echo "Livre ajouté avec succès";}
	} 
	//Renvoie un PDOException
	catch (PDOException $e) {
		//Appel de la méthode getMessage() de PDOException
		echo $e->getMessage().   "<br/>";
	}
	finally{
		$dbh = null;
	}
?>