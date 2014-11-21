const CHUNK_SIZE = 16;

function color(n) {
	return "rgb(" + (127 - n) + "," + n + "," + (255 - n) + ")";
}

var noise = (function () {
	var value = new Uint8Array(1);
	return function (x,y) {
		value[0] = (200 * Math.floor(Math.sin(x / y + y + x) + Math.cos(y / x + x + y)) * x * y);
		return value[0];
	};
})();


self.onmessage = function (e) {
	var result = [];
	for (var i = 0; i < CHUNK_SIZE; i++) {
		for (var j = 0; j < CHUNK_SIZE; j++) {
			var x = (j + e.data.x) / 8, y = (i - e.data.y) / 8;
			var value = noise(x,y);
			var str = value.toString(10);
			while (str.length < 3) {
				str += "0";			
			}
			result.push("<span style=\"color:" + color(value) + ";\"> " + str + "</span>");
		}
		result.push("<br>");
	}
	self.postMessage(result.join(""));
};
