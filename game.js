const CHUNK_SIZE = 16;

var mapWorker = new Worker("mapWorker.js");

mapWorker.postMessage({x:CHUNK_SIZE * 3,y:CHUNK_SIZE * 3});

mapWorker.onmessage = function (e) {
	var result = "\n";
	for (var i = 0; i < CHUNK_SIZE; i++) {
		result += e.data[i * CHUNK_SIZE].toString(10);
		for (var j = 1; j < CHUNK_SIZE; j++) {
			var value = e.data[i * CHUNK_SIZE + j].toString(10);
			while (value.length < 4) {
				value = " " + value;			
			}
			result += value;
		}
		result += "\n";
	}
	console.log(result);
};
