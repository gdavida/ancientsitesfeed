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
			    "uid": "ANCIENT_SITES_JSON_TTS_9",
			    "updateDate": "2020-08-08T00:00:00.0Z",
			    "titleText": "Arbor Low in the Derbyshire Peak District, England",
			    "mainText": "Arbor Low is a well-preserved Neolithic henge dating back 4000 years ago. About 50 large limestone blocks, quarried from a local site,  form an egg-shaped circle. There were probably 41-43 stones originally, but some are now in fragments.They range in size from about 5 ft to 7 ft, with monoliths of between 8 and a half to 9 and a half ft. One stone is partially upright; the rest are all lying flat. Although it is often stated that the stones have never stood upright, it is possible that they had originally been set upright in shallow stone holes. In the centre of the circle lie at least six smaller blocks, originally believed to have been set in a rectangle, known as the cove.",
			    "redirectionUrl": ""
			   }
	    ]
	)
});

server.listen(PORT, () => {
     console.log("The server is listening.")
});
