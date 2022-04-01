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
}

// syntax des fonctions ESS vs ES6

// 1, plusieurs paramatres

const addNormal = function (x, y){

	return x+y;
}
// es6

//const addFleche = (x,y) =>{return x+y}
const addFleche = (x,y) =>x+y // return es implicite amis il est rpreferable d'utiliser lereturn

// si on n'a qunseul parametre

//es5

const sayHello5 = function(name){
	return `bonjour ${name}`;
}

//es6

const sayHello6 = name =>`bonjour ${name}`;

// AUCUN PARAME>TRE


//es5

const HelloWorld = function(){
	return `bonjour leMonde`;
}

//es6

const HelloWorldEs6= () =>`bonjour World ES6`;


/// RENVOYER NOBJET

//es5
const setContent = function(title, content){
	return {
			title: title,
			content:content

	}
}
//es6
const setContent = (title, content) => ({title: title,content:content});

