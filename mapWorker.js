const CHUNK_SIZE = 16;

self.onmessage = function (e) {
	var chunkX = e.data.x;
	var chunkY = e.data.y;
	var chunk = new Uint8Array(CHUNK_SIZE * CHUNK_SIZE);
	for (var i = 0; i < CHUNK_SIZE; i++) {
		for (var j = 0; j < CHUNK_SIZE; j++) {
			var x = (j + e.data.x) / 8, y = (i - e.data.y) / 8;
			chunk[i * CHUNK_SIZE + j] =
				200 * Math.floor(Math.sin(x / y + y + x)
				+ Math.cos(y / x + x + y)) * x * y;
		}
	}
	self.postMessage(chunk);
};
