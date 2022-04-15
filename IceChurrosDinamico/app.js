const maiorSubSeq = require('./MaiorSubSeq/maiorSubSeq.js');

const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
let arr = [];

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', './public');

app.get('', (req, res) => {
    res.render('home', { showResult: false });
});

app.post('/addValor', (req, res) => {
    arr.push(req.body.valor)
    res.render('home', { showResult: false });
});

app.post('/calculaSequencia', (req, res) => {
    var subSeq = new maiorSubSeq();
    result = subSeq.maiorSeq2(arr.length, arr);
    res.render('home', { showResult: true, subSeqResult: result });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
