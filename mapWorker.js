const CHUNK_SIZE = 16;

function color(n) {
	return "rgb(" + (127 - n) + "," + n + "," + (255 - n) + ")";
}

var value = new Uint8Array(1);

self.onmessage = function (e) {
	var result = [];
	for (var i = 0; i < CHUNK_SIZE; i++) {
		for (var j = 0; j < CHUNK_SIZE; j++) {
			var x = (j + e.data.x) / 8, y = (i - e.data.y) / 8;
			value[0] = (200 * Math.floor(Math.sin(x / y + y + x) + Math.cos(y / x + x + y)) * x * y);
			var str = value[0].toString(10);
			while (str.length < 3) {
				str += "0";			
			}
			result.push("<span style=\"color:" + color(value[0]) + ";\"> " + str + "</span>");
		}
		result.push("<br>");
	}
	self.postMessage(result.join(""));
};
