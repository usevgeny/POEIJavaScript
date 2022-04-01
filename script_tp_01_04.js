//attendre le chargement du DOM

document.addEventListener('DOMContentLoaded', function(){
		document.write("<h1 align=\"center\">01/04/2022 TP</h1>");
		

		//EXERCICE 2.1:

		document.write("<h2>EXERCICE 2.1: </h2><p>L'objectif de cet exercice est de créer un programme qui affiche tous les jours de la semaine, en utilisant une fonction qui va se déclencher au chargement de la page.</p>");

		function showAllDays(){

			var daysTab=new Array(7);
			daysTab[0]="Lundi";
			daysTab[1]="Mardi";
			daysTab[2]="Mercredi";
			daysTab[3]="Jeudi";
			daysTab[4]="Vendredi";
			daysTab[5]="Samedi";
			daysTab[6]="Dimanche";
			document.write("<table style='border:solid black;'>")
			for(element of daysTab){
				document.write("<tr><td style='border:solid black;'>");
				document.write(element);
				document.write("</tr></td>");
				};
			document.write("</table>")};

	showAllDays();

//EXERCICE 2.2:

		document.write("<h2>EXERCICE 2.2: </h2><p>L'objectif de cet exercice est de créer un programme qui affiche tous les jours de la semaine, en utilisant une fonction qui va se déclencher au chargement de la page.</p>");

		

		function schtrumph(tab1, tab2){
			var s = 0;
			for (var i = 0; i<tab1.length; i++){
				for(var j= 0; j<tab2.length; j++)
					{
						s = s+tab1[i]*tab2[j];
						
					}
			}
			return s;
		}
		tab1 = [4,8,7,12];
		tab2 = [3,4];
		document.write("SCHTRUMPH"+schtrumph(tab1,tab2))
		console.log(schtrumph(tab1,tab2));
});