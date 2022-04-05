CREATE DATABASE IF NOT EXISTS tpLivres
DEFAULT CHARACTER SET utf8
DEFAULT COLLATE utf8_general_ci;

-- Utiliser la base de données
USE tpLivres;

-- Créer la table tpLivres(id, title, auteur, editeur, lienPhoto)
CREATE TABLE tpLivres.livres(id SMALLINT AUTO_INCREMENT PRIMARY KEY, 
	title VARCHAR(60), 
	auteur VARCHAR(60), 
	editeur VARCHAR(60),
	lienPhoto VARCHAR(60)) 
ENGINE=InnoDb CHARSET utf8 COLLATE utf8_general_ci;
