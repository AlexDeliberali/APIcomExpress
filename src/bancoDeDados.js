const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const produtos = {

}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return  produtos[id] || {}
}

//Retornando todos os produtos
function getProdutos() {
    return Object.values(produtos)
}

//Deixando as funcoes visiveis para todos
module.exports = { salvarProduto, getProduto, getProdutos}