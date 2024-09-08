function pesquisar() {
    // Obtém a referência para a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa e converte para minúsculas para comparação insensível a maiúsculas/minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase(); 

    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";

    // Verifica se o campo de pesquisa está vazio e exibe uma mensagem se estiver
    if (!campoPesquisa) {
        section.innerHTML = "Nada foi encontrado";
        return;
    }

    // Verifica se a variável 'dados' existe e é um array válido
    if (!Array.isArray(dados)) {
        section.innerHTML = "Erro: Dados inválidos.";
        return;
    }

    // Itera sobre cada elemento 'dado' dentro do array 'dados'
    for (dado of dados) {
        // Converte os dados relevantes para minúsculas para comparação insensível a maiúsculas/minúsculas
        let nome = dado.nome.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let paisDeOrigem = dado.paisDeOrigem.toLowerCase();
        let link = dado.link.toLowerCase();

        // Verifica se o termo de pesquisa está presente em qualquer um dos campos do dado
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || paisDeOrigem.includes(campoPesquisa) || link.includes(campoPesquisa)) {
            // Se encontrado, adiciona o HTML formatado para o 'dado' à string 'resultados'
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.nome}</a> 
                    </h2>
                    <p class="descrição-meta">${dado.descricao}</p>  
                    <a href=${dado.link} target="_blank" alt="Mais informações sobre ${dado.nome}">
                        Mais informações
                    </a> 
                </div>`;  
        }    
    }

    // Verifica se algum resultado foi encontrado e exibe a mensagem apropriada na seção
    if (resultados == "") {
        section.innerHTML = "Nada foi encontrado";
    } else {
        section.innerHTML = resultados;
    }
}