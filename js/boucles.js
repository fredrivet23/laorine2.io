function While(){
	var a = 29;
	var b = 25;
		while (a>4){
			a-=1;
			b+=3;
		}
	document.getElementById("runW").innerHTML = "a="+ a + "  b="+ b ;
}
function For(){
	var a=3;
	var i;
		for (i=0 ; i<15; i++){
			a+=4;
		}
	document.getElementById("runF").innerHTML = a ;
}
