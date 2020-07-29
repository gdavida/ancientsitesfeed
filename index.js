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
			    "uid": "ANCIENT_SITES_JSON_TTS_5",
			    "updateDate": "2020-07-29T00:00:00.0Z",
			    "titleText": "Bryn Celli Ddu - Wales",
			    "mainText": "Bryn Celli Ddu is a prehistoric site on the Welsh island of Anglesey. Its name means 'the mound in the dark grove' and is generally considered to be one of the finest passage tombs in Wales. Visitors can enter through a stone passage to the burial chamber. Within the burial chamber is a mysterious pillar, a reproduction of the 'Pattern Stone', carved with sinuous serpentine designs. The site was also once a henge with a stone circle, and may have been used to plot the date of the summer solstice.",
			    "redirectionUrl": ""
			   }
	    ]
	)
});

server.listen(PORT, () => {
     console.log("The server is listening.")
});