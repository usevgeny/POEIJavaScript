//attendre le chargement du DOM

document.addEventListener('DOMContentLoaded', function(){



		// attraper le bouton de soumisssion
		var oBtn = document.getElementById("btn");

		oBtn.addEventListener('click', function(){

			getName();

		});


		function getName(){

			// attrapar le input
			var oNom = document.getElementById("nom");
			//alert(oNom); // si on l'affiche on va voir l'objet mais mas sa valaur, ça va etre un objet de type HTML input element
			// la valeur saiair
			var saisie = oNom.value;

			var oDiv= document.getElementById("affiche");
			//alert(oDiv);

			// injecter du code dans la div:

			oDiv.innerHTML = "<strong style='color:red'>"+saisie+"</string>";

		};



}) 

