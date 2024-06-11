/* 
Prova JavaScript
Instruções:
O arquivo HTML e CSS já estão prontos. A única inclusão necessária no arquivo HTML são as
chamadas às funções nos eventos dos elementos.
Caso queira mudar os nomes dos IDs e das classes pode fazê-los, mas cuidado para não perder
as funcionalidades do CSS que estão vinculados a alguns deles.
Poste os arquivos fonte seguindo as instruções do AVA.

@Carlos Alexandre Sousa Silva 
*/
// Carregar depois que o html estiver carregado. I'm not taking any chances for this :D
document.addEventListener("DOMContentLoaded", function () {
  const listaContatos = document.getElementById("idContatos");

  // 1 - Função para remover um contato
  window.removerContato = function (element) {
    const contato = element.parentElement;
    listaContatos.removeChild(contato);
  };

  // 2 - Função para inserir um novo contato
  window.inserirContato = function () {
    const inputNome = document.getElementById("idInsereNome");
    const nomeContato = inputNome.value.trim();

    // Verifica se o nome do contato não está vazio
    if (nomeContato === "") {
      alert("Por favor, insira o nome do contato.");
      return;
    }

    // Cria os elementos do novo contato
    const novoContato = document.createElement("li");
    novoContato.classList.add("classeItemContato");

    const spanContato = document.createElement("span");
    spanContato.classList.add("classeContato");

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "contato";

    const label = document.createElement("label");
    label.textContent = nomeContato;

    const botaoRemover = document.createElement("span");
    botaoRemover.classList.add("classeBotaoRemover");
    botaoRemover.textContent = "remover";
    botaoRemover.setAttribute("onclick", "removerContato(this)");

    // Monta a estrutura do novo contato
    spanContato.appendChild(radio);
    spanContato.appendChild(label);
    novoContato.appendChild(spanContato);
    novoContato.appendChild(botaoRemover);
    listaContatos.appendChild(novoContato);

    // Limpa o campo de input
    inputNome.value = "";
  };

  // 3 - Função para excluir contatos até o selecionado
  window.excluirContatos = function () {
    const contatos = document.querySelectorAll(
      "#idContatos .classeItemContato"
    );
    let indiceSelecionado = -1;

    // Encontra o índice do contato selecionado
    contatos.forEach((contato, indice) => {
      const radio = contato.querySelector('input[type="radio"]');
      if (radio.checked) {
        indiceSelecionado = indice;
      }
    });

    // Verifica se algum contato está selecionado
    if (indiceSelecionado === -1) {
      alert("Por favor, selecione um contato para excluir.");
      return;
    }

    // Pede confirmação ao usuário
    const confirmacao = confirm(
      "Tem certeza que deseja excluir todos os contatos até o selecionado?"
    );
    if (confirmacao) {
      // Remove os contatos até o selecionado
      for (let i = 0; i <= indiceSelecionado; i++) {
        listaContatos.removeChild(contatos[i]);
      }
    }
  };

  // 4 - Função para mudar a guia ativa
  window.mudarGuiaAtiva = function (guiaAtiva) {
    const guias = document.querySelectorAll(".classeGuias li");
    const paineis = document.querySelectorAll(".classePainel");

    // Remove a classe ativa de todas as guias e paineis
    guias.forEach((guia) => {
      guia.classList.remove("classeAtivo");
    });

    paineis.forEach((painel) => {
      painel.classList.remove("classeAtivo");
    });

    // Adiciona a classe ativa à guia e painel clicados
    guiaAtiva.classList.add("classeAtivo");
    const idPainelAtivo = guiaAtiva.id.replace("idLembrete", "idDivLembrete");
    document.getElementById(idPainelAtivo).classList.add("classeAtivo");
  };
});
