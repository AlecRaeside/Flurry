(function() {
var Flurry

window.onload=function() {
	canvas = document.createElement("canvas");
		canvas.setAttribute("width",window.innerWidth);
		canvas.setAttribute("height",window.innerHeight);
		document.body.appendChild(canvas);
		ctx = canvas.getContext("2d");
		setInterval(init,1000/60);
		//init();
		ticker=0;
		ctx.globalCompositeOperation = 'lighter';

		particles = 


}

function init()	 {
	ticker++;
	ctx.globalCompositeOperation ='darker';
	ctx.fillStyle = 'rgba(0,0,0,0.09)';
		ctx.fillRect(0, 0,canvas.width, canvas.height);
	ctx.globalCompositeOperation ='lighter';

	drawRadialGradient(0+ticker,0+ticker,100,"rgba(255,0,0,0.2)","rgba(0,0,0,0.0)")
}
var drawRadialGradient = function(x, y, size, colourA, colourB) {
	var midpoint=size/2;
	var radgrad = ctx.createRadialGradient(x+midpoint,y+midpoint,0,x+midpoint,y+midpoint,midpoint);
  	radgrad.addColorStop(0, colourA);
  	radgrad.addColorStop(1, colourB);
	ctx.fillStyle = radgrad;
	ctx.fillRect(x, y, size, size);
}

function log(v) {
	console.log(v);
}
//from http://stackoverflow.com/a/2044990
Array.prototype.fillWith = function(what, L){
	while(L) this[--L] = what;
	return this;
}

})()