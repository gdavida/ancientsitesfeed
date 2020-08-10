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
			    "uid": "ANCIENT_SITES_JSON_TTS_10",
			    "updateDate": "2020-08-09T00:00:00.0Z",
			    "titleText": "Bats Castle in Somerset, England",
			    "mainText": "Bats Castle is an Iron Age hill fort at the top of a hill in Somerset, England. The site was identified in 1983 after schoolboys found silver-plated coins dating from 102BC to AD350. It is on the highest point of Gallox Hill. Previously it was known as Caesar's Camp and is possibly associated with Black Ball Camp. Bat's Castle has two stone ramparts and two ditches. The ramparts are damaged in places and the hill fort is partly covered in scrub. Bat's Castle may once have been known as the legendary fortress Din Draithou, a place also associated with a fortress built or used by the legendary Irish king and raider Crimthann mac Fidaig.",
			    "redirectionUrl": ""
			   }
	    ]
	)
});

server.listen(PORT, () => {
     console.log("The server is listening.")
});
