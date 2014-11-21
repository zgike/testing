const CHUNK_SIZE = 16;

self.onmessage = function (e) {
	var chunkX = e.data.x;
	var chunkY = e.data.y;
	var chunk = new Uint8Array(CHUNK_SIZE * CHUNK_SIZE);
	for (var i = 0; i < CHUNK_SIZE; i++) {
		for (var j = 0; j < CHUNK_SIZE; j++) {
			chunk[i * CHUNK_SIZE + j] =
				200 * Math.floor(Math.sin((i -  e.data.y) / 2)
				+ Math.sin((j + e.data.x) / 2));
		}
	}
	self.postMessage(chunk);
};
