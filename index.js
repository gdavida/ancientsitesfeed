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
			    "uid": "ANCIENT_SITES_JSON_TTS_3",
			    "updateDate": "2020-07-24T00:00:00.0Z",
			    "titleText": "Cow Castle - Somerset, England",
			    "mainText": "Cow Castle is an Iron Age hill fort in Somerset, England. It stands upon an isolated hilltop and with a single rampart and ditch, enclosing 0.9 hectares. Legend says that the hillfort was built by fairies to protect themselves against the earth.",
			    "redirectionUrl": ""
			   }
	    ]
	)
});

server.listen(PORT, () => {
     console.log("The server is listening.")
});