<?php
	try {
		$dsn = 'mysql:host=localhost;dbname=bookstore;charset=utf8';
		$user = 'root';
		$pass = '';
		
		//Créer une instance de PDO
		$dbh = new PDO($dsn,$user,$pass);
		$dbh->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
		
		// La requête à exécuter
		$query = "SELECT * FROM livres";
		
		// Exécute la requête avec query() :renvoie une instance de PDOStatement
		$stmt = $dbh->query($query);
		
		// Définir le mode de fetch
		$stmt->setFetchMode(PDO::FETCH_OBJ);//Mode fetch
		
		if($stmt->rowCount() != 0){	
			//$otabLivres = [];
			
			//Parcours du tableau des objets
			while($data = $stmt->fetch()){
				$otabLivres[] = $data;
			}
			
			// obtenir un élément JSON
			$livresJSON = json_encode($otabLivres);
			// print_r($livresJSON);
			echo $livresJSON;
		}
		else{
			echo "Aucun livre trouvé<br><br>";
		}		
	} 
	//Renvoie un PDOException
	catch (PDOException $e) {
		//Appel de la méthode getMessage() de PDOException
		echo $e->getMessage().   "<br/>";
	}
?>