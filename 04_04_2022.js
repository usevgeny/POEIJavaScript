//attendre le chargement du DOM

document.addEventListener('DOMContentLoaded', function(){

    var button = document.forms[0].soumettre;
    var resultSpan = document.querySelector("#spanResultat");
    var genderList = document.forms[0].gender;
    
    var menuDeroulant = document.forms[0].menuDeroulant;
    var listeMultiple= document.forms[0].listeMultiple.options;
    
    button.addEventListener('click',function(){
        resultSpan.innerHTML="";
        var genderSelected = "";
        var optionsSelected = "";
        
        // ICI ON RECUPERE LE GENDRE
        for (var i=0;i<genderList.length;i++){
            if(genderList[i].checked){
                genderSelected=genderSelected+genderList[i].value;
            }

        }

        // ICI ON RECUPERE LES OPTIONS SELECTED
        for (i=0;i<listeMultiple.length;i++){
            if(listeMultiple[i].selected){
                optionsSelected=optionsSelected+listeMultiple[i].value+" ";
            }

        }
        // POUR RECUPERER LES ELEMENTS DU MENU DEROULANT JE FAIS menuDeroulant.value;
      
        resultSpan.innerHTML="Je suis "+genderSelected+" et j'aime les "+menuDeroulant.value+" dont l'index est "+menuDeroulant.selectedIndex+" "+optionsSelected;
        
       
    })
    
});