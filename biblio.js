// fonction getPrix(), qute == quantité des aricles, pu = prix unitaire de l'article; 

function getPrix(qte,pu){

	// calcul ttc: variable locale
	var ttc = qte*pu*1.2;

	// retourner le ésultat

	return ttc;
};


function add(){


	var c = 5; // variable locale inaccessible de l'exterieur
	d=6;
	e=b+12; // e est une variable globale ACCESSIBLE de l'exerieur
	return c+d;
};




// toute variable déclare avec VAR dans la fonction est locale, toute variable déclare sans var dans la fonction est globale;



//toute variable decalre avec ou sans var à l'exterieur de l fonction -- GLOBALE
// si on met "use strict"; on ne peut pas  declarer le variable sans var qui la precede

// arguments
function maFonction(){

	console.log(arguments);
}

function somme(a, b){
	console.log(arguments);
	var c=a+b;
	return c;
	
}
//
  // on peut retrouner plusieurrs elements dans un forme de tableau:




function plusieursOperations(a, b){
	console.log(arguments);
	var c=a+b;
	var d=a*b;
	return new Array(c, d);
	
}

//fonctin anonyme 
var votreFonction = function(){

	console.log('VotreFonction');
};




