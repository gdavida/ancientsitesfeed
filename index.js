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
			    "uid": "ANCIENT_SITES_JSON_TTS_8",
			    "updateDate": "2020-08-07T00:00:00.0Z",
			    "titleText": "Glastonbury Lake Village in Somerset, England",
			    "mainText": "Glastonbury Lake Village in Somerset, England covers a site 400 feet  north to south by 300 feet east to west. It was first constructed 250 B.C. by laying down timber and clay. Wooden houses and barns were then built on the clay base and occupied by up to 200 people at any time until the village was abandoned around 50 B.C. Glastonbury is considered the best preserved prehistoric village ever found in the United Kingdom.",
			    "redirectionUrl": ""
			   }
	    ]
	)
});

server.listen(PORT, () => {
     console.log("The server is listening.")
});
