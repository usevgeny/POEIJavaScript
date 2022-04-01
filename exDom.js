function Addition(a,b){

    return a + b;

}

var button = document.forms[0].addition;

button.addEventListener('click',function(){

    var nbr1 = parseInt(document.formulaire.nbr1.value);

    var nbr2 = parseInt(document.forms[0].elements['nbr2'].value);

    console.log(nbr1);

    console.log(nbr2);

    var res = Addition(nbr1,nbr2);

    console.log(res);

    Affichage(res);

   

});

function Affichage(r){

    document.forms[0].res.value = r;

}