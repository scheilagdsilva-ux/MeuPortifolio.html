// Contador do carrinho
let totalItens = 0;

function adicionarCarrinho() {
    totalItens++;
    document.getElementById("contador").textContent = totalItens;
}

// Mensagem de confirmação do cadastro
function confirmarCadastro() {
    alert("✅ Cadastro realizado com sucesso!");
    return true;
}

// Voltar ao topo da página
function voltarTopo() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}