document.addEventListener('DOMContentLoaded', function () {
    const dadosProdutos = {
        "Principal": [
            {
                "nome": "Camisa xadrez manga longa",
                "precoOriginal": "59.90",
                "precoAtual": "39.90",
                "categoria": "Camisa masculina",
                "imagem": "./assets/img/masculino/1.png"
            },
            {
                "nome": "Camisa branca",
                "precoOriginal": "59.90",
                "precoAtual": "39.90",
                "categoria": "Camisa masculina",
                "imagem": "./assets/img/masculino/2.png"
            },
            {
                "nome": "Camisa branca",
                "precoOriginal": "59.90",
                "precoAtual": "39.90",
                "categoria": "Camisa masculina",
                "imagem": "./assets/img/masculino/3.png"
            },
            {
                "nome": "Camisa branca",
                "precoOriginal": "59.90",
                "precoAtual": "39.90",
                "categoria": "Camisa masculina",
                "imagem": "./assets/img/masculino/4.png"
            },
            {
                "nome": "Camisa xadrez manga longa",
                "precoOriginal": "59.90",
                "precoAtual": "39.90",
                "categoria": "Camisa masculina",
                "imagem": "./assets/img/masculino/5.png"
            },
            {
                "nome": "Camisa branca",
                "precoOriginal": "59.90",
                "precoAtual": "39.90",
                "categoria": "Camisa masculina",
                "imagem": "./assets/img/masculino/6.png"
            },
            {
                "nome": "Camisa branca",
                "precoOriginal": "59.90",
                "precoAtual": "39.90",
                "categoria": "Camisa masculina",
                "imagem": "./assets/img/masculino/8.png"
            },
            {
                "nome": "Camisa branca",
                "precoOriginal": "59.90",
                "precoAtual": "39.90",
                "categoria": "Camisa masculina",
                "imagem": "./assets/img/masculino/9.png"
            }
        ],
        // Adicione outras categorias se necessário
    };

    criarProdutos(dadosProdutos.Principal, 'produtosContainer');

    // Você pode adicionar mais lógica aqui para outras categorias
});

function criarProdutos(produtos, containerId) {
    console.log('Produtos:', produtos);

    const container = document.getElementById(containerId);

    produtos.forEach(produto => {
        const produtoElement = document.createElement('article');
        produtoElement.className = 'produtos-container col-md-3';

        const imagemElement = document.createElement('img');
        imagemElement.src = produto.imagem;
        imagemElement.alt = produto.nome;
        imagemElement.className = 'img-fluid';

        const titleElement = document.createElement('h2');
        titleElement.textContent = produto.nome;

        const precoElement = document.createElement('strong');
        precoElement.className = 'produtos-preco';
        precoElement.innerHTML = `<s class="produtos-preco-riscado">R$${produto.precoOriginal}</s>  R$${produto.precoAtual}`;

        const itensContainer = document.createElement('article');
        itensContainer.className = 'produtos-itens';
        itensContainer.appendChild(titleElement);
        itensContainer.appendChild(precoElement);

        produtoElement.appendChild(imagemElement);
        produtoElement.appendChild(itensContainer);

        container.appendChild(produtoElement);
    });
}
