const CHUNK_SIZE = 16;

var mapWorker = new Worker("mapWorker.js");
var position = {x:0,y:0}

function color(n) {
	return "rgb(" + n + "," + n + "," + n + ")";
}

mapWorker.onmessage = function (e) {
	var result = "\n";
	for (var i = 0; i < CHUNK_SIZE; i++) {
		for (var j = 0; j < CHUNK_SIZE; j++) {
			var value = e.data[i * CHUNK_SIZE + j];
			var str = value.toString(10);
			while (str.length < 3) {
				str = "0" + str;			
			}
			result += "<span style=\"color:" + color(value) + ";\"> " + str + "</span>";
		}
		result += "<br>";
	}
	document.body.innerHTML = result;
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
