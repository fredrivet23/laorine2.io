function binToDec(){
	var bin = document.getElementById("bin").value;
	var dec = 0;
	var longueur = bin.length;
	for (i=0; i<longueur; i++){
		dec+=parseInt(bin.charAt(longueur-i-1))*(2**i);
	}
	document.getElementById("dec").innerHTML="Le nombre " + bin + " vaut en base dix : "+ dec;
}
function decToBin(){
	var decimal = parseInt(document.getElementById("decimal").value);
	if (isNaN(decimal)){//lorsqu'on ne rentre rien, cela créer une erreur puisque j'utilise un while. Il font donc avertir l'utilisateur.
		alert("Veuillez saisir un nombre")
		return;
	}
	var decimal1 = decimal;
	var binaire = "";
	var reste = 0;
	while (Math.floor(decimal1/2)!=0){
		reste=(decimal1%2).toString();
		binaire=reste+binaire;
		decimal1=(Math.floor(decimal1/2));
	}
	binaire=decimal1.toString()+binaire;
	document.getElementById("binaire").innerHTML="Le nombre " + decimal + " vaut en base deux : "+ binaire;
}