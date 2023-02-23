//Pass element and size in vh
function onProject (element, size) {
	let pc = [];
	let p = [];
	for(var i = 0; i < 10; i++){
		pc.push("pc"+String(i));
		p.push("p"+String(i));
	}
	var change = element.style;
	var current = element.id;
	change.height = size + "vh";
	change.backgroundColor = "#ffffff0f";

	for(var i = 0; i < 10; i++){
		if(pc[i] != current){
			document.getElementById(pc[i]).style.height = "20vh";
			document.getElementById(pc[i]).style.backgroundColor = "";
		}else{
			document.getElementById(p[i]).style.marginTop = "0";
			if(i%2 == 0){
				document.getElementById(pc[i+1]).style.height = size + "vh";
				document.getElementById(pc[i+1]).style.backgroundColor = "";
				document.getElementById(p[i+1]).style.marginTop = "100%";
				i++;
			}else if(i%2 == 1){
				document.getElementById(pc[i-1]).style.height = size + "vh";
				document.getElementById(pc[i-1]).style.backgroundColor = "";
				document.getElementById(p[i-1]).style.marginTop = "100%";
				// document.getElementById(p[i]).style.marginTop = "0";
			}
		}
	}

}