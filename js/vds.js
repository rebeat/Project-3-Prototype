// VDS - Project 3
// JS File
// CMD @ HvA

window.onload = function() {
	document.getElementById('start').onclick = function() {
		takePhoto();
	}
	document.getElementById('reload').onclick = function() {
		reload();
	}
};

// Global Vars
var video = "";
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d'); 

var takePhoto = function() {
    video = document.querySelector('video');
    ctx.drawImage(video,0,0,300,250);
}; 

var showPhoto = function() {
    canvas.className = "visible";	 
};

var reload = function () {
	var restart = confirm("Wil je opnieuw beginnen?");
	if (restart){
		location.reload();
	}
}

var movieBegin = function () {
	
}