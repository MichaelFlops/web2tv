inlets = 1;
outlets = 1;

var ajaxreq;
var google_string = "https://www.kimonolabs.com/api/dy1ra5ge?apikey=vGAjHOrvnKxBG1KQXKyWMTVyeNPgUUXG&authorization=Vgzz9Jasx22pNROdhSqsNbZ2E6BCZruv";
var youtube_string = "https://www.kimonolabs.com/api/66szuk9g?apikey=vGAjHOrvnKxBG1KQXKyWMTVyeNPgUUXG";
var response;
var data;
var sound;
var audio;

function bang(){
	//first XMLHttpRequest object
	ajaxreq = new XMLHttpRequest();
	//set the HTTP message to be sent (usually a special formatted URL)
	ajaxreq.open("GET", google_string);
	//set the callback function
	ajaxreq.onreadystatechange = getData;
	//send the request
	ajaxreq.send();
	
	//Second XMLHttpRequest object
	ajaxreq2 = new XMLHttpRequest();
	//set the HTTP message to be sent (usually a special formatted URL)
	ajaxreq2.open("GET", youtube_string);
	//set the callback function
	ajaxreq2.onreadystatechange = getAudio;
	//send the request
	ajaxreq2.send();
}

function getData() {
	response = ajaxreq.responseText;
	//post(ajaxreq.getAllResponseHeaders());
	//var json = JSON.stringify(response);
	var d = new Dict();	
		d.name = "data";
		d.parse(response);
		d.set(response);		
}
function getAudio() {
	sound = ajaxreq2.responseText;
	//post(ajaxreq.getAllResponseHeaders());
	//var json = JSON.stringify(response);
	var e = new Dict();	
		e.name = "audio";
		e.parse(sound);
		e.set(sound);
}