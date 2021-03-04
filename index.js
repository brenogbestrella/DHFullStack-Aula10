const express = require('express');
const app = express();
const listaUsuarios = [
    'Breno',
    'Ivens',
    'Jailson',
    'Nykolle',
];

//Query Params
//Ex:localhost:12345/usuarios?id=1
app.get('/usuarios', (req, res) => {
    const { nome } = req.query;
    let listaRetorno = listaUsuarios.filter(i => i.includes(nome || ''))
    return res.json(listaRetorno)
});


//Route Params
//Ex: ecommer.com.br/produtos/4/detalhes
app.get('/hello/:usuario', (req,res) => {
    const { usuario } = req.params;
    return res.send(`Hello world ${usuario}`);   //usar return como boa prática
});


app.listen(12345, () => {
    console.log('Servidor rodando na porta 12345')
});