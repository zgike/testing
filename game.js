var mapWorker = new Worker("mapWorker.js");
var position = {x:0,y:0}
var div = document.getElementsByTagName("div")[0];

mapWorker.onmessage = function (e) {
	div.innerHTML = e.data;
};

document.addEventListener("keydown", function (e) {
	if (e.keyCode >= 37 && e.keyCode <= 40) {
		e.preventDefault();
		switch (e.keyCode) {
			case 37:
				position.x--;
				break;
			case 38:
				position.y++;
				break;
			case 39:
				position.x++;
				break;
			case 40:
				position.y--;
				break;
		}
		mapWorker.postMessage(position);
	}
}, false);

mapWorker.postMessage(position);
