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
	var test = document.getElementsByClassName("test");
	var t0 = getPos(box[0]).top - 100;
	var t1 = getPos(box[1]).top - 110;
	var t2 = getPos(box[2]).top - 120;
	var t3 = getPos(box[3]).top - 130;
	var t4 = getPos(box[4]).top - 140;
	if(t >= t0){
		//box[0].style.borderColor = "#009ABB";
		$('.test').eq(0).fadeIn().animate({marginLeft:0}, 300);
	}
	if(t >= t1){
		box[1].style.borderColor = "#009ABB";
		$('.test').eq(1).fadeIn().animate({marginLeft:0}, 300);
		//$('.halo').animate({height: t1}, 300);
	}
	if(t >= t2){
		box[2].style.borderColor = "#009ABB";
		//$('.halo').animate({height: t2}, 300);
		$('.test').eq(2).fadeIn().animate({marginLeft:0}, 300);

	}
	if(t >= t3 - 50){
		box[3].style.borderColor = "#009ABB";
		//$('.halo').animate({height: t3}, 300);
		$('.test').eq(3).fadeIn().animate({marginLeft:0}, 300);
	}
	if(t >= t4 - 120){
		box[4].style.borderColor = "#009ABB";
		//$('.halo').animate({height: t4}, 300);
		$('.test').eq(4).fadeIn().animate({marginLeft:0}, 300);
	}
}
for(var i=0; i<20; i++){
	document.write("<br>")
}