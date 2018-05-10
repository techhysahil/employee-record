const express = require('express')
const app = express()

var json = require('./employeeRecord.json');

app.get('/employeeRecord', (req, res) => {
	var currentpage = req.query.currentpage;
	var rowCount = req.query.rowCount;

	var dataToSend = json.slice(currentpage*rowCount-rowCount, currentpage*rowCount);

	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send({
		data : dataToSend,
		TotalRowCount : json.length,
		currentpage : currentpage
	})
})

app.listen(4000, () => console.log('Example app listening on port 4000!'))