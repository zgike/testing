const CHUNK_SIZE = 16;

self.onmessage = function (e) {
	var chunkX = e.data.x;
	var chunkY = e.data.y;
	var chunk = new Uint8Array(CHUNK_SIZE * CHUNK_SIZE);
	for (var i = 0; i < CHUNK_SIZE; i++) {
		for (var j = 0; j < CHUNK_SIZE; j++) {
			chunk[i * CHUNK_SIZE + j] = Math.floor(Math.sin(i/10 + 0.577) * Math.sin(j/10 + 0.4424) * 10);
		}
	}
	self.postMessage(chunk);
};
