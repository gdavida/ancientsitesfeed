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
		    "uid": "EXAMPLE_CHANNEL_MULTI_ITEM_JSON_TTS_1",
		    "updateDate": "2020-07-17T00:00:00.0Z",
		    "titleText": "Multi Item JSON (TTS)",
		    "mainText": "This channel has multiple TTS JSON items. This is the first item.",
		    "redirectionUrl": "https://www.amazon.com"
		   },
		  {
		    "uid": "EXAMPLE_CHANNEL_MULTI_ITEM_JSON_TTS_2",
		    "updateDate": "2020-07-16T00:00:00.0Z",
		    "titleText": "Multi Item JSON (TTS)",
		    "mainText": "This channel has multiple TTS JSON items. This is the second item.",
		    "redirectionUrl": "https://www.amazon.com"
		  }
		]
	)
});

server.listen(PORT, () => {
     console.log("The server is listening.")
});