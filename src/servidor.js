const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, resp, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    resp.send(produto) //Convertendo para um JSON
})

app.put('/produtos/:id', (req, resp, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    resp.send(produto) //Convertendo para um JSON
})

app.delete('/produtos/:id', (req, resp, next) => {
    const produto = bancoDeDados.excluirProdutos(req.params.id)
    resp.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})