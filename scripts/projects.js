var prev = -1;

function onProject (element) {
	var num = 8;
	let pc = [];
	let p = [];
	for(var i = 0; i < num; i++){
		pc.push("pc"+String(i));
		p.push("p"+String(i));
	}

	var current = "pc" + element.id;
	var curIndex = pc.indexOf(current);

	let Left = false;
	let Right = false;

	if(curIndex%2 == 0){
		Left = true;
	}else{
		Right = true;
	}

	if(curIndex != prev){
	
		for(var i = 0; i < num; i++){
			if(pc[i] != current){
				// document.getElementById(p[i]).style.display = "none";
				document.getElementById(p[i]).style.height = "0";
				document.getElementById(pc[i]).style.backgroundColor = "";
			}else{
				// document.getElementById(p[i]).style.display = "";
				document.getElementById(p[i]).style.height = "100%";
				document.getElementById(pc[i]).style.height = "fit-content";
				document.getElementById(pc[i]).style.backgroundColor = "#ffffff0f";
			}
		}

		if(Left){
			for(let element of document.getElementsByClassName("colLeft")){
				element.style.width = "70%";
			}
			for(let element of document.getElementsByClassName("colRight")){
				element.style.width = "30%";
			}
		}
		if(Right){
			for(let element of document.getElementsByClassName("colLeft")){
				element.style.width = "30%";
			}
			for(let element of document.getElementsByClassName("colRight")){
				element.style.width = "70%";
			}
			
		}

		prev = curIndex;
		
	}else{
		for(var i = 0; i < num; i++){
			// document.getElementById(p[i]).style.display = "none";
			document.getElementById(p[i]).style.height = "0";
			document.getElementById(pc[i]).style.backgroundColor = "";
		}
		for(let element of document.getElementsByClassName("colLeft")){
			element.style.width = "50%";
		}
		for(let element of document.getElementsByClassName("colRight")){
			element.style.width = "50%";
		}
		prev = -1;
	}

}

function fullImage(index){
	if(index == "i0"){
		document.getElementById("i0").style.display = "none";
		document.getElementById("i1").style.display = "none";
		document.getElementById("i2").style.display = "none";
		document.getElementById("i3").style.display = "none";

	}else{
		document.getElementById("i0").style.display = "flex";
		document.getElementById(index).style.display = "";
	}
}