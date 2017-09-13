function laheta(form) {
		var tilauspaiva = form.elements["paiva"].value;
		var noutoaika = form.elements["noutoaika"].value;
		var etunimi = form.elements["etunimi"].value;
		var sukunimi = form.elements["sukunimi"].value;
		var email = form.elements["email"].value;
		var puhelin = form.elements["puhelin"].value;
		var viesti = form.elements["viesti"].value;
		
		alert("Tämä formi lähetetään tulevaisuudessa backendille, kuten myös tilauskorin tiedot ja ne tullaan tallentamaan tietokantaan. Servletti lähettää tilauksen myös firman sähköpostiin tulevaisuudessa. Myös formin required-fieldit tullaan huomioimaan tulevaisuudessa tässä scriptissä. Formin tiedot ovat: Tilauspäivä:"+tilauspaiva+", Noutoaika:"+noutoaika+", Etunimi:"+etunimi+", Sukunimi:"+sukunimi+", email:"+email+", Puhelin:"+puhelin+", Viesti:"+viesti );
	
}

							
							