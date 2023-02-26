//Pass element and size in vh

var prev = -1;

function onProject (element, size) {
	var num = 8;
	let pc = [];
	let p = [];
	for(var i = 0; i < num; i++){
		pc.push("pc"+String(i));
		p.push("p"+String(i));
	}
	var change = element.style;
	var current = element.id;
	var curIndex = pc.indexOf(current);
	change.height = size;
	change.backgroundColor = "#ffffff0f";

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
				document.getElementById(pc[i]).style.height = "20vh";
				document.getElementById(pc[i]).style.backgroundColor = "";
			}else{
				document.getElementById(p[i]).style.marginTop = "0";
				if(Left){
					document.getElementById(pc[i+1]).style.height = size;
					document.getElementById(pc[i+1]).style.backgroundColor = "";
					document.getElementById(p[i+1]).style.marginTop = "100vh";
					i++;
				}
				if(Right){
					document.getElementById(pc[i-1]).style.height = size;
					document.getElementById(pc[i-1]).style.backgroundColor = "";
					document.getElementById(p[i-1]).style.marginTop = "100vh";

				}
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
			document.getElementById(pc[i]).style.height = "20vh";
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