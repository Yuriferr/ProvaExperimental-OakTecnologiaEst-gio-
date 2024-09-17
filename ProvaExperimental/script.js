document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtenção dos valores do formulário
    const nome = document.getElementById('nome').value;
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);
    const disponivel = document.querySelector('input[name="disponivel"]:checked').value;

    // Criação de objeto de produto
    const product = {
        nome: nome,
        descricao: descricao,
        valor: valor,
        disponivel: disponivel
    };

    // Adicionar produto na lista
    addProductToList(product);

    // Limpar formulário
    document.getElementById('product-form').reset();
});

// Array para armazenar os produtos
let products = [];

// Função para adicionar produto à listagem
function addProductToList(product) {
    products.push(product);
    products.sort((a, b) => a.valor - b.valor); // Ordenar por valor

    const productTableBody = document.getElementById('product-table-body');
    productTableBody.innerHTML = '';

    // Preencher a tabela com os produtos
    products.forEach((prod) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${prod.nome}</td>
            <td>R$ ${prod.valor.toFixed(2)}</td>
        `;
        productTableBody.appendChild(row);
    });
}