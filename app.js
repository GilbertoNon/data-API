const fs = require("fs");
const data = fs.readFileSync(`${__dirname}/data.json`);
const dataJSON = JSON.parse(data);
const express = require("express");
const app = express();
//console.log(dataJSON[0]['materias_semestres'][0]['1']['materias'][1]);
console.log(dataJSON[0]["materias_info"][0]["CR"]);

app.get('/api/v1/materiasInfo', (req, res) => {
    res.status(200).json({
        materiasInfo: dataJSON
    })
})

app.listen(3000, () => {
    console.log(`server listen in port 3000`);
    
})