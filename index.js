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
			    "uid": "ANCIENT_SITES_JSON_TTS_4",
			    "updateDate": "2020-07-27T00:00:00.0Z",
			    "titleText": "Glastonbury Lake Village - Somerset, England",
			    "mainText": "Glastonbury Lake Village was an Iron Age village, situated on a crannog or man made island in the southwestern English county of Somerset. It has been described as 'the best preserved prehistoric village ever found in the United Kingdom'. The site covered an area of 400 feet north to south by 300 feeteast to west. It was first constructed 250 B.C. by laying down timber and clay. Wooden houses and barns were then built on the clay base and occupied by up to 200 people at any time until the village was abandoned around 50 B.C.",
			    "redirectionUrl": ""
			   }
	    ]
	)
});

server.listen(PORT, () => {
     console.log("The server is listening.")
});