const express = require('express');
const app = express();
app.use(express.static('public'));
//const bodyParser = require('body-parser');



app.get('', function (req, resposta) {
    resposta.sendFile(__dirname + "/public/index.html");

});







app.listen(3000, () => console.log("Tudo certo"));