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
	            "uid": "660de062-65c1-4bbb-924b-8e84cfa3b120",
	            "updateDate": "2020-07-17T03:18:00.0Z",
	            "titleText": "Let's visit Grimes Graves in England.",
	            "mainText": "Today your tour brings you to Grimes Graves, a large flint mining complex in Norfolk, England. These mines were worked between 2600 and 2300 BC. Flint was in high demand during this time for use in polished stone axes. The mines extend over 91 acres with 433 shafts, some more than 46 feet deep and 39 feet in diameter.",
	            "streamUrl": "",
	            "redirectionUrl": ""
	        },  
	        {
	            "uid": "660de062-65c1-4bbb-924b-8e84cfa3b119",
	            "updateDate": "2020-07-16T08:20:00.0Z",
	            "titleText": "Let's visit somewhere else.",
	            "mainText": "Beep boop bop boop beep boop boop.",
	            "streamUrl": "",
	            "redirectionUrl": ""
	        }
	    ]
	)
});

server.listen(PORT, () => {
     console.log("The server is listening.")
});