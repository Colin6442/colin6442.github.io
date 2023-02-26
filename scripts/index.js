var clicks = 0;
var changed = false;

function easterEgg() {

	if(clicks == 20 && changed){
		document.getElementById("homeBody").style.background = "url(../content/FW3.png)";
		document.getElementById("homeBody").style.backgroundRepeat = "no-repeat";
		document.getElementById("homeBody").style.backgroundAttachment = "fixed";
		document.getElementById("homeBody").style.backgroundSize = "cover";
		clicks = 0;
		changed = !changed;
	}
	if(clicks == 20 && !changed){
		document.getElementById("homeBody").style.background = "url(../content/easterEgg.png)";
		document.getElementById("homeBody").style.backgroundRepeat = "no-repeat";
		document.getElementById("homeBody").style.backgroundAttachment = "fixed";
		document.getElementById("homeBody").style.backgroundSize = "100% 100%";
		clicks = 0;
		changed = !changed;
	}
	
	clicks++;

}