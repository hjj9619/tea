function getPos(obj) {
		
		var pos = {left:0, top:0};
		
		while (obj) {
			pos.left += obj.offsetLeft;
			pos.top += obj.offsetTop;
			obj = obj.offsetParent;
		}
		
		return pos;
		
	}



onscroll = function() {
	var t = document.documentElement.scrollTop || document.body.scrollTop;
	var box = document.getElementsByClassName('box');
	var t0 = getPos(box[0]).top - 50;
	var t1 = getPos(box[1]).top - 50;
	var t2 = getPos(box[2]).top - 50;
	var t3 = getPos(box[3]).top - 50;
	var t4 = getPos(box[4]).top - 50;
	if(t >= t0){
		box[0].style.backgroundColor = "red";
	}
	if(t >= t1){
		box[1].style.backgroundColor = "red";
	}
	if(t >= t2){
		box[2].style.backgroundColor = "red";
	}
	if(t >= t3 - 50){
		box[3].style.backgroundColor = "red";
	}
	if(t >= t4 - 120){
		box[4].style.backgroundColor = "red";
	}
}



for(var i=0; i<20; i++){
	document.write("<br>")
}