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
			    "uid": "ANCIENT_SITES_JSON_TTS_11",
			    "updateDate": "2020-08-10T00:00:00.0Z",
			    "titleText": "Mên-an-Tol in Cornwall, UK",
			    "mainText": "The Mên-an-Tol is a small formation of standing stones in Cornwall, UK. It is also known locally as the "Crick Stone".	The Mên-an-Tol consists of three upright granite stones: a round stone with its middle holed out with two standing stones to each side, in front of and behind the hole. When seen at an angle from one side, the stones form a three-dimensional "101." The Mên-an-Tol is thought to date to 3500 years ago, and that the holed stone could have been a natural occurrence rather than deliberately sculpted. Mên-an-Tol is supposed to have a fairy or piskie guardian who can make miraculous cures.",
			    "redirectionUrl": ""
			   }
	    ]
	)
});

server.listen(PORT, () => {
     console.log("The server is listening.")
});
