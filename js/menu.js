function clique_menu() { //ouvrir et fermer le menu en changeant la taille de la place que prend le contenu et le menu
	var taille = document.getElementById("menu").style.width
	if (taille === "250px") {
		taille = "0px";
	}
	else {
		taille = "250px";
	}
	document.getElementById("menu").style.width=taille
	document.getElementById("contenu").style.marginLeft=taille
}
function clique_sous_menu() { //ouvrir et fermer le sous-menu Cours
	var display = document.getElementById("sous_menu").style.display
	if (display === "block") {
		display = "none";
	}
	else {
		display = "block";
	}
	document.getElementById("sous_menu").style.display=display
}