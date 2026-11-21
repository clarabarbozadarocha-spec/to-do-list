const input = document.getElementById('tarefaInput');
const botaoAdicionar = document.getElementById('adicionarBtn');
const lista = document.getElementById('listaTarefas');

function adicionarTarefa() {
    const texto = input.value.trim();
    if (texto === '') return;

    const item = document.createElement('li');
    item.textContent = texto;

    // Risca a tarefa ao clicar nela
    item.addEventListener('click', () => {
        item.classList.toggle('concluida');
    });

    // Cria o botão de remover
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'X';
    botaoRemover.classList.add('btn-remover');
    
    botaoRemover.addEventListener('click', (evento) => {
        evento.stopPropagation(); // Evita marcar como concluída ao excluir
        lista.removeChild(item);
    });

    item.appendChild(botaoRemover);
    lista.appendChild(item);

    input.value = '';
    input.focus();
}

botaoAdicionar.addEventListener('click', adicionarTarefa);

// Permite adicionar pressionando a tecla Enter
input.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});
