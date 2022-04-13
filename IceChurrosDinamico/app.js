const maiorSubSeq = require('./MaiorSubSeq/maiorSubSeq.js');
const maiorSubSeqTest = require('./MaiorSubSeq/longestIncreasingSubsequence.js');

const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', './public');

app.get('', (req, res) => {
    res.render('home', { showResult: false });
});

app.post('/addValor', (req, res) => {
    console.log(req.body)
    res.render('home', { showResult: false });
});

let arr = [10, 22, 9, 33, 21, 50, 41, 60]
let n = arr.length;
var subSeqTest = new maiorSubSeqTest();
teste = subSeqTest.lis(arr, n);
console.log(teste)
app.post('/calculaSequencia', (req, res) => {
    res.render('home', { showResult: true, subSeqResult: test });
});

var subSeq = new maiorSubSeq();
var vet = [2, 3, 14, 5, 9, 8, 4];
teste = subSeq.findRange(7, vet);
console.log(teste);

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
