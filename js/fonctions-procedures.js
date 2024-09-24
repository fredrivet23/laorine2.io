function divisible(a,n){//voici une fonction
	return (a%n==0)
}

function nombres(x,id){//voici une procedure
	var i;
	var resultat =""; 
	for (i=1; i<x; i++){
		resultat+=(i+"-");
	}
	resultat+=x;
	document.getElementById(id).innerHTML=resultat
}








