const express = require('express');
const app = express();
app.use(express.static('public'));
const maiorSubSeq = require('./MaiorSubSeq/maiorSubSeq.js');
//const bodyParser = require('body-parser');



app.get('', function (req, resposta) {
    resposta.sendFile(__dirname + "/public/index.html");

});


var subSeq = new maiorSubSeq();
var vet = [2, 3, 14, 5, 9, 8, 4];
teste = subSeq.findRange(7, vet);
console.log(teste);



app.listen(3000, () => console.log("Tudo certo"));