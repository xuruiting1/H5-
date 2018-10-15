
function play(){
	var play= document.getElementById('playaudio');
	var pause= document.getElementById('pauseaudio');
	var audio = document.getElementById('audio');
	audio.play();
	play.disabled = true;	
	pause.disabled = false;
	}
function pause(){
	var audio = document.getElementById('audio');
	var play= document.getElementById('playaudio');
	var pause = document.getElementById('pauseaudio');
	pause.disabled = true;
	play.disabled = false;
	audio.pause();
}
