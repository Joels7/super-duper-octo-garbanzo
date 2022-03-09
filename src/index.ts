import { Application, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0,
	width: 640,
	height: 480
});

Loader.shared.add({url: "./michil.jpg", name: "michil"})

Loader.shared.onComplete.add(()=>{
	const img: Sprite = Sprite.from("michil");
	
	img.anchor.set(0);
	
	img.x = 0;
	img.y = 0;
	
	app.stage.addChild(img);
})

Loader.shared.load();
