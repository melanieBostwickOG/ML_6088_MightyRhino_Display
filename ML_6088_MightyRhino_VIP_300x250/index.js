(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.back = function() {
	this.initialize(img.back);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.coin = function() {
	this.initialize(img.coin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,131,134);


(lib.cta = function() {
	this.initialize(img.cta);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.gameLogo = function() {
	this.initialize(img.gameLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.rgBug = function() {
	this.initialize(img.rgBug);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.rhino_body = function() {
	this.initialize(img.rhino_body);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,410);


(lib.rhino_head = function() {
	this.initialize(img.rhino_head);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,410);


(lib.shine = function() {
	this.initialize(img.shine);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text11 = function() {
	this.initialize(img.text11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text12 = function() {
	this.initialize(img.text12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text21 = function() {
	this.initialize(img.text21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text22 = function() {
	this.initialize(img.text22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.text31 = function() {
	this.initialize(img.text31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text31_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text31();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text31_1, new cjs.Rectangle(0,0,300,250), null);


(lib.text22_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text22();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text22_1, new cjs.Rectangle(0,0,300,250), null);


(lib.text21_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text21();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text21_1, new cjs.Rectangle(0,0,300,250), null);


(lib.text12_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text12();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text12_1, new cjs.Rectangle(0,0,300,250), null);


(lib.text11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text11();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text11_1, new cjs.Rectangle(0,0,300,250), null);


(lib.shine_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.shine();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.shine_1, new cjs.Rectangle(0,0,300,250), null);


(lib.rhino_head_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rhino_head();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rhino_head_1, new cjs.Rectangle(0,0,300,205), null);


(lib.rhino_body_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rhino_body();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rhino_body_1, new cjs.Rectangle(0,0,300,205), null);


(lib.rgBug_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.rgBug();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rgBug_1, new cjs.Rectangle(0,0,300,250), null);


(lib.logo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,300,250), null);


(lib.gameLogo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gameLogo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.gameLogo_1, new cjs.Rectangle(0,0,300,250), null);


(lib.cta_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.cta();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_1, new cjs.Rectangle(0,0,300,250), null);


(lib.coin_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.coin();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.coin_1, new cjs.Rectangle(0,0,65.5,67), null);


(lib.clickTag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.back_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.back();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.back_1, new cjs.Rectangle(0,0,300,250), null);


(lib.coinburst = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_115 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(115).call(this.frame_115).wait(1));

	// coin copy 5
	this.instance = new lib.coin_1();
	this.instance.setTransform(-95,-53.1,0.231,0.231,-60.0054,0,0,33,33.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.4395,scaleY:0.4395,rotation:-60.0025,x:55.75,y:-88.5,alpha:1},42,cjs.Ease.quintIn).to({scaleX:0.7801,scaleY:0.7801,rotation:-60.0024,x:195.7,y:-118.5},73,cjs.Ease.quartOut).wait(1));

	// coin
	this.instance_1 = new lib.coin_1();
	this.instance_1.setTransform(-95.05,-53.1,0.231,0.231,0,60.0054,-119.9946,33,33.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:33.1,scaleX:0.4021,scaleY:0.4021,skewX:45.0031,skewY:-134.9969,x:-243.3,y:-88.55,alpha:1},42,cjs.Ease.quintIn).to({regX:33,scaleX:0.6954,scaleY:0.6954,skewX:60.0022,skewY:-119.9978,x:-394.2,y:-88.45},73,cjs.Ease.quartOut).wait(1));

	// coin
	this.instance_2 = new lib.coin_1();
	this.instance_2.setTransform(-95.05,-52.95,0.4453,0.4453,0,-44.9986,135.0014,32.8,33.5);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:32.9,scaleX:0.8583,scaleY:0.8583,skewX:-30.0007,skewY:149.9993,x:-87.3,y:94.55,alpha:1},42,cjs.Ease.quintIn).to({regX:32.8,regY:33.6,scaleX:1.7462,scaleY:1.7462,skewX:-45,skewY:135,x:-82.2,y:363.7},73,cjs.Ease.quartOut).wait(1));

	// coin
	this.instance_3 = new lib.coin_1();
	this.instance_3.setTransform(-95.1,-53.15,0.2695,0.2695,0,90,-90,33.2,33.8);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:33,regY:33.9,scaleX:0.5134,scaleY:0.5134,skewX:104.9987,skewY:-75.0013,x:-109.35,y:-138.55,alpha:1},42,cjs.Ease.quintIn).to({regY:33.7,scaleX:0.892,scaleY:0.892,skewX:90,skewY:-90,x:-82.25,y:-400.55},73,cjs.Ease.quartOut).wait(1));

	// coin
	this.instance_4 = new lib.coin_1();
	this.instance_4.setTransform(-95.05,-53.15,0.2991,0.2991,-74.9995,0,0,33,33.2);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:32.9,regY:33.5,scaleX:0.6716,scaleY:0.6716,rotation:-75.0002,x:4.8,y:-135.55,alpha:1},42,cjs.Ease.quintIn).to({scaleX:1.061,scaleY:1.061,x:161.85,y:-246.45},73,cjs.Ease.quartOut).wait(1));

	// coin
	this.instance_5 = new lib.coin_1();
	this.instance_5.setTransform(-95.05,-53.05,0.2991,0.2991,0,74.9995,-105.0005,32.9,33.6);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:33.5,scaleX:0.523,scaleY:0.523,skewX:90,skewY:-90,x:-209.25,y:-153.55,alpha:1},42,cjs.Ease.quintIn).to({regX:33,scaleX:0.8323,scaleY:0.8323,skewX:75.0012,skewY:-104.9988,x:-380.35,y:-246.6},73,cjs.Ease.quartOut).wait(1));

	// coin copy
	this.instance_6 = new lib.coin_1();
	this.instance_6.setTransform(-95.05,-53,0.4453,0.4453,-150.0016,0,0,32.8,33.5);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:33.4,scaleX:0.8719,scaleY:0.8719,rotation:-135.0021,x:-154.3,y:-225.5,alpha:1},42,cjs.Ease.quintIn).to({regX:32.9,regY:33.5,scaleX:1.266,scaleY:1.266,rotation:-150.0012,x:-192.35,y:-407.65},73,cjs.Ease.quartOut).wait(1));

	// coin copy 2
	this.instance_7 = new lib.coin_1();
	this.instance_7.setTransform(-95.1,-53,0.4453,0.4453,0,180,0,32.6,33.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:32.8,regY:33.6,scaleX:0.9449,scaleY:0.9449,skewX:165.0015,skewY:-14.9985,x:5.85,y:-214.5,alpha:1},42,cjs.Ease.quintIn).to({regX:32.9,scaleX:1.3838,scaleY:1.3838,skewX:180,skewY:0,x:114.85,y:-376.5},73,cjs.Ease.quartOut).wait(1));

	// coin copy 3
	this.instance_8 = new lib.coin_1();
	this.instance_8.setTransform(-95.05,-53.1,0.2617,0.2617,0,-29.9984,150.0016,32.8,33.1);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:32.9,regY:33.4,scaleX:0.4739,scaleY:0.4739,skewX:-44.9974,skewY:135.0026,x:-135.3,y:26.55,alpha:1},42,cjs.Ease.quintIn).to({regX:32.8,scaleX:0.917,scaleY:0.917,skewX:-29.9987,skewY:150.0013,x:-183.3,y:353.55},73,cjs.Ease.quartOut).wait(1));

	// coin copy 4
	this.instance_9 = new lib.coin_1();
	this.instance_9.setTransform(-95.05,-53,0.3161,0.3161,0,0,0,32.6,33.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:0.6462,scaleY:0.6462,rotation:-14.9983,x:-46.25,y:29.5,alpha:1},42,cjs.Ease.quintIn).to({regX:32.8,regY:33.6,scaleX:1.0611,scaleY:1.0611,rotation:0,x:165.9,y:259.6},73,cjs.Ease.quartOut).wait(1));

	// coin
	this.instance_10 = new lib.coin_1();
	this.instance_10.setTransform(-95.05,-53.05,0.4453,0.4453,0,0,180,32.8,33.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:32.9,scaleX:0.8507,scaleY:0.8507,skewX:-14.9976,skewY:165.0024,x:-214.4,y:59.55,alpha:1},42,cjs.Ease.quintIn).to({scaleX:1.7416,scaleY:1.7416,skewX:14.9991,skewY:194.9991,x:-403.35,y:223.3},73,cjs.Ease.quartOut).wait(1));

	// coin
	this.instance_11 = new lib.coin_1();
	this.instance_11.setTransform(-95,-53.1,0.4453,0.4453,-14.9982,0,0,32.8,33.4);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:32.9,regY:33.5,scaleX:0.8452,scaleY:0.8452,rotation:-14.9981,x:42.9,y:33.5,alpha:1},42,cjs.Ease.quintIn).to({regX:32.8,scaleX:1.5244,scaleY:1.5244,rotation:-14.998,x:212.75,y:107.5},73,cjs.Ease.quartOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-473.4,-465.1,747.5999999999999,910.5);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,45,159,248,249];
	// timeline functions:
	this.frame_0 = function() {
		//DOUBLECLICK CLICKTAG//
		
		this.clickTag.on("click", function(){
			window.open(clickTag, "_blank");        
		});
		
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 100);
	}
	this.frame_45 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 600);
	}
	this.frame_159 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 1000);
	}
	this.frame_248 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 800);
	}
	this.frame_249 = function() {
		if (!this.looped) this.looped = 1;
		
		if (this.looped++ == 2) this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(45).call(this.frame_45).wait(114).call(this.frame_159).wait(89).call(this.frame_248).wait(1).call(this.frame_249).wait(1));

	// clickTag
	this.clickTag = new lib.clickTag();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(150,125,0.4121,2.7778,0,0,0,364,45);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.clickTag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(250));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(250));

	// rgBug
	this.instance = new lib.rgBug_1();
	this.instance.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(180).to({_off:false},0).to({alpha:1},34,cjs.Ease.cubicOut).wait(36));

	// logo
	this.instance_1 = new lib.logo_1();
	this.instance_1.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(250));

	// cta
	this.instance_2 = new lib.cta_1();
	this.instance_2.setTransform(145.1,162.05,0.6154,0.6154,0,0,0,145.1,172);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(210).to({_off:false},0).to({regX:145,scaleX:1,scaleY:1,x:145,y:162,alpha:1},38,cjs.Ease.elasticOut).wait(2));

	// text31
	this.instance_3 = new lib.text31_1();
	this.instance_3.setTransform(150,253,1,1,0,0,0,150,233);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(180).to({_off:false},0).to({y:223,alpha:1},28,cjs.Ease.quartOut).wait(42));

	// text22
	this.instance_4 = new lib.text22_1();
	this.instance_4.setTransform(155.05,135,0.6667,0.6667,0,0,0,155,139);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(121).to({_off:false},0).to({scaleX:1,scaleY:1,x:155,alpha:1},38,cjs.Ease.elasticOut).wait(1).to({regX:160,regY:279,x:160,y:275},0).to({alpha:0},20,cjs.Ease.cubicOut).wait(70));

	// text21
	this.instance_5 = new lib.text21_1();
	this.instance_5.setTransform(150,316,1,1,0,0,0,150,300);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(115).to({_off:false},0).to({y:296,alpha:1},28,cjs.Ease.quartOut).wait(17).to({alpha:0},20,cjs.Ease.cubicOut).wait(70));

	// text12
	this.instance_6 = new lib.text12_1();
	this.instance_6.setTransform(150.05,137,1.3009,1.3009,0,0,0,150,137);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(8).to({_off:false},0).to({scaleX:1,scaleY:1,x:150,alpha:1},30,cjs.Ease.backInOut).wait(43).to({regX:160,regY:260,x:160,y:260},0).to({y:240,alpha:0},28,cjs.Ease.quartOut).wait(141));

	// text11
	this.instance_7 = new lib.text11_1();
	this.instance_7.setTransform(149.95,104.95,1.2466,1.2466,0,0,0,149.9,104.9);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({_off:false},0).to({regX:150,regY:105,scaleX:1,scaleY:1,x:150,y:105,alpha:1},29,cjs.Ease.backInOut).wait(56).to({regY:214,y:214},0).to({y:194,alpha:0},28,cjs.Ease.quartOut).wait(135));

	// rhino_head
	this.instance_8 = new lib.rhino_head_1();
	this.instance_8.setTransform(221.1,207.3,0.8179,0.8179,0,0,0,232.2,82.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(46).to({scaleX:0.8178,scaleY:0.8178,rotation:-28.1788,x:221.3,y:178.65},30,cjs.Ease.cubicIn).to({scaleX:0.8179,scaleY:0.8179,rotation:0,x:221.1,y:207.3},28,cjs.Ease.cubicOut).wait(146));

	// rhino_body
	this.instance_9 = new lib.rhino_body_1();
	this.instance_9.setTransform(137.7,192.65,0.8179,0.8179,0,0,0,130.2,64.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(46).to({regX:130.1,regY:64.3,rotation:-8.9493,x:137.75,y:191.75},30,cjs.Ease.cubicIn).to({regX:130.2,regY:64.5,rotation:0,x:137.7,y:192.65},28,cjs.Ease.cubicOut).wait(146));

	// gameLogo
	this.instance_10 = new lib.gameLogo_1();
	this.instance_10.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(250));

	// coin burst
	this.instance_11 = new lib.coinburst();
	this.instance_11.setTransform(280.05,208,1,1,0,0,0,32.8,33.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(88).to({_off:false},0).wait(162));

	// shine
	this.instance_12 = new lib.shine_1();
	this.instance_12.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(115).to({_off:false},0).to({alpha:1},28,cjs.Ease.quartOut).wait(16).to({alpha:0},21,cjs.Ease.cubicOut).wait(70));

	// back
	this.instance_13 = new lib.back_1();
	this.instance_13.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(250));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(100.5,79.8,249.3,276.9);
// library properties:
lib.properties = {
	id: '90CE9A07CC2147BDA6C7E08CF861CD67',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/back.jpg?1698941970250", id:"back"},
		{src:"images/coin.png?1698941970250", id:"coin"},
		{src:"images/cta.png?1698941970250", id:"cta"},
		{src:"images/gameLogo.png?1698941970250", id:"gameLogo"},
		{src:"images/logo.png?1698941970250", id:"logo"},
		{src:"images/rgBug.png?1698941970250", id:"rgBug"},
		{src:"images/rhino_body.png?1698941970250", id:"rhino_body"},
		{src:"images/rhino_head.png?1698941970250", id:"rhino_head"},
		{src:"images/shine.jpg?1698941970250", id:"shine"},
		{src:"images/text11.png?1698941970250", id:"text11"},
		{src:"images/text12.png?1698941970250", id:"text12"},
		{src:"images/text21.png?1698941970250", id:"text21"},
		{src:"images/text22.png?1698941970250", id:"text22"},
		{src:"images/text31.png?1698941970250", id:"text31"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['90CE9A07CC2147BDA6C7E08CF861CD67'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;