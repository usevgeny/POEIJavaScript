//attendre le chargement du DOM

document.addEventListener('DOMContentLoaded', function(){
		
		//EXERCICE 5:



		// on atttrap le bouton auquel on va attacher un EventListener: 
		var oBtn = document.getElementById("myBtn");
		

		// an attache l'event listenner au bouton 
		oBtn.addEventListener('click', function(){
			
			var saisie = document.getElementById("myInput").value;
			document.getElementById("madiv").innerHTML = "<strong style='color:red'>"+saisie+"</string>";
		})




	//EXERCICE 6:
		// on atttrap le bouton auquel on va attacher un EventListener: 
		var oBtn2 = document.getElementById("equalsBtn");
		

		// an attache l'event listenner au bouton 
		oBtn2.addEventListener('click', function(){
			
			var saisieA = parseInt(document.getElementById("intA").value);
			var saisieB = parseInt(document.getElementById("intB").value);
			var result = saisieA+saisieB;
			document.getElementById("ResultSpan").innerHTML = result;
			console.log(result)
		})

		//EXERCICE 7:

		// on attache l'event listenner au bouton pour changer les divsBackgrounds
		var oBtn3 = document.getElementById("styleBtn");
		var sameNameDivs = document.getElementsByName('demoDiv');
		var redLineDiv = document.getElementById("redline");
		oBtn3.addEventListener('click', function(){
			for(var i = 0; i < sameNameDivs.length; i++){
				var currentEl = sameNameDivs[i];
				currentEl.style.background = 'rgba(2, 255, 255, 0.1)';
			};
			redLineDiv.style.background = 'green';
			console.log("The style has been changed")
		})

		var oBtn4 = document.getElementById("paragrapheBtn");
		var samaParagraphs = document.getElementsByClassName('paragrapheDemo');
		oBtn4.addEventListener('click', function(){
			for(var i = 0; i < samaParagraphs.length; i++){
				var currentEl = samaParagraphs[i];
				currentEl.style.color = 'blue';
			};
			
			console.log("Paragraphe style has been changed");
		})



		var btnQr = document.querySelector('#btnQr');
		btnQr.addEventListener('click', function(){
			alert("Yes");
		})

		var oLi = document.querySelector('li');
		console.log(oLi);

		var cLi = document.querySelector('.classeLi');
		console.log(cLi)


		var toLi = document.querySelectorAll('li');
		console.log(toLi);




		//EXERCICE 7.2:
		var tbColorbtn = document.querySelector('#tbColor');
		var tbTrs = document.querySelectorAll('tr'); // "table tr:nth-child(odd)"
		tbColorbtn.addEventListener('click', function(){
			for(var i=0;i<tbTrs.length;i++){
				
				if(i%2==0){
					tbTrs[i].style.backgroundColor = 'gray';
					
				}

			}
		})

	//EXERCICE 7.3:
		var hideBtn = document.querySelector('#hideImg');
		var img = document.querySelector('img'); // "table tr:nth-child(odd)"
		hideBtn.addEventListener('click', function(){
			if(img.style.visibility == 'hidden'){
				img.style.visibility = 'visible';
			}else{
			img.style.visibility = 'hidden';}
					
			
		}) // l'emplacement de l'image est gardé 
/*
			//EXERCICE 7.3:
		var hideBtn = document.querySelector('#hideImg');
		var img = document.querySelector('img'); // "table tr:nth-child(odd)"
		hideBtn.addEventListener('click', function(){
			if(img.style.display == 'block'){
				img.style.display = 'none';
			}else{
			img.style.display = 'block';}
					
			
		}) //l'emplacement de l'image est n'est pas gardé 


*/



});