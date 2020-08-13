const express = require('express');
const server = express();

server.use(express.json());

const PORT = process.env.PORT || 3000;



server.get('/', (req, res) => {
	res
	.set('Content-Type', 'application/json')
	.json(
	    [
			  {
			    "uid": "ANCIENT_SITES_JSON_TTS_12",
			    "updateDate": "2020-08-12T00:00:00.0Z",
			    "titleText": "Settlement Site Skara Brae in Scotland",
			    "mainText": "The Settlement Site Skara Brae is a stone-built Neolithic settlement, located on the Bay of Skaill on the west coast of Mainland, the largest island in the Orkney archipelago of Scotland. Skara Brae consists of eight clustered houses, and was occupied from roughly 3180 BC to about 2500 BC. It is Europe's most complete Neolithic village. Skara Brae has been called the 'Scottish Pompeii' because of its excellent preservation."
			    "redirectionUrl": ""
			   }
	    ]
	)
});

server.listen(PORT, () => {
     console.log("The server is listening.")
});
