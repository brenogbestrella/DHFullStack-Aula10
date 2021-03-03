const express = require('express');
const app = express();

app.get('/', (req,res) => {
    return res.send('Hello world')   //usar return como boa prática
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});