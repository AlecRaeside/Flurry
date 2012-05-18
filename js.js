
var Fl={};

var config = {
	framerate : 20,
	particledecay:0.004
}

window.onload=function() {
	canvas = document.createElement("canvas");
		canvas.setAttribute("width",window.innerWidth);
		canvas.setAttribute("height",window.innerHeight);
		document.body.appendChild(canvas);
		ctx = canvas.getContext("2d");
		setInterval(init,1000/config.framerate);
		//init();
		ticker=0;
		ctx.globalCompositeOperation = 'lighter';

		Fl.particles = []


		Fl.emitter = {
			x:100,
			y:100
		}


}

function init()	 {

	ctx.globalCompositeOperation ='darker';
	ctx.fillStyle = 'rgba(0,0,0,1)';
	ctx.fillRect(0, 0,canvas.width, canvas.height);
	ctx.globalCompositeOperation ='lighter';

	if (ticker%2==0) {
	Fl.emitter.x=Fl.emitter.x+10
	}
	Fl.particles.push(new Particle())

	_.each(Fl.particles,function(particle) {
		
		particle.x++;
		particle.x++;
		particle.y++;
		particle.age++;
		particle.decay();
		
		drawRadialGradient(particle.x, particle.y , particle.size, particle.colour.toString(), "rgba(0,0,0,0.0)")
	})

	ticker++;
}
var drawRadialGradient = function(x, y, size, colourA, colourB) {
	var midpoint=size / 2;
	var radgrad = ctx.createRadialGradient(x+midpoint,y+midpoint,0,x+midpoint,y+midpoint,midpoint);
  	radgrad.addColorStop(0, colourA);
  	radgrad.addColorStop(1, colourB);
	ctx.fillStyle = radgrad;
	ctx.fillRect(x, y, size, size);
}

var Particle = function() {
	this.x=Fl.emitter.x;
	this.y=Fl.emitter.y;
	this.age=1;
	this.size=60;
	this.colour = new hsla(0,50,50,1);
	this.decay = function() {
		if (this.age < (0.8/config.particledecay)) {
			var decayer = this.age*config.particledecay;
			//log(decayer);
			this.colour.alpha = 0.8-(decayer)
		} else {
			this.colour.alpha = 0;
		}
	}
}

function hsla(hue, sat, light, alpha) {
	this.hue = hue;
	this.sat = sat;
	this.light = light;
	this.alpha = alpha;
	this.toString = function() {
		return "hsla("+this.hue+","+this.sat+"%,"+this.light+"%,"+this.alpha+")";
	}
}
function log(v) {
	console.log(v);
}
//from http://stackoverflow.com/a/2044990
Array.prototype.fillWith = function(what, L){
	while(L) this[--L] = what;
	return this;
}
