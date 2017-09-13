function lisaa(form) {

	var tuote = form.elements["tuote"].value;
	var muotoLista = form.elements["muoto"];
	var muoto;		
	for(var i = 0; i < muotoLista.length; i++){
		if(muotoLista[0].checked){
			muoto = muotoLista[0].value;
		}else{
			muoto = muotoLista[1].value;
			}
	}																
	var maara = form.elements["maara"].value;
	var lisatiedot = form.elements["lisatiedot"].value;
	
	var rivi = 
	"<tr> <td>" + tuote + "</td> <td>" + muoto + "</td> <td>" + maara +"</td> <td>"+ lisatiedot +"</td> <td> <button class='ui-shadow ui-btn ui-corner-all ui-mini poistabtn'  onclick='poista(this.parentElement.parentElement)'>Poista rivi</button></td> </tr>";

	sessionStorage.setItem(tuote+muoto+maara+lisatiedot, rivi);
	console.log("TUOTE: "+tuote +", MUOTO: "+muoto+", MÄÄRÄ: "+maara+", LISÄTIEDOT: "+lisatiedot);
	
	for(var i = 0;i<sessionStorage.length;i++){
	var elementtiStr = sessionStorage.getItem(sessionStorage.key(i));
	$('#tilauskoritaulu').append(elementtiStr);
	}
}
