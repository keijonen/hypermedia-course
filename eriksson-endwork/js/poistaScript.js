function poista(poistettavaElementti) {
	var x = poistettavaElementti.children;
	var rivinTiedot="";
    var i;
    for (i = 0; i < x.length - 1; i++) {
	var kohta = x[i].innerHTML.split("</b>");
	rivinTiedot += kohta[1];	
    }

	sessionStorage.removeItem(rivinTiedot);
	$(poistettavaElementti).closest("tr").remove();
	
}