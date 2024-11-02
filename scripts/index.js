var clicks = 0;
var changed = false;

function easterEgg() {

	if(clicks == 3 && changed){
		document.getElementById("homeBody").style.background = "url(../content/FW3.png)";
		document.getElementById("homeBody").style.backgroundRepeat = "no-repeat";
		document.getElementById("homeBody").style.backgroundAttachment = "fixed";
		document.getElementById("homeBody").style.backgroundSize = "100% 100%";
		clicks = 0;
		changed = !changed;
	}
	if(clicks == 10 && !changed){
		document.getElementById("homeBody").style.background = "url(../content/easterEgg.png)";
		document.getElementById("homeBody").style.backgroundRepeat = "unset";
		document.getElementById("homeBody").style.backgroundAttachment = "unset";
		document.getElementById("homeBody").style.backgroundSize = "unset";
		clicks = 0;
		changed = !changed;
	}
	
	clicks++;

}
