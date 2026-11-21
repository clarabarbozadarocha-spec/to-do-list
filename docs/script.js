const input = document.getElementById('tarefaInput');
const botaoAdicionar = document.getElementById('adicionarBtn');
const lista = document.getElementById('listaTarefas');

function adicionarTarefa() {
    const texto = input.value.trim();
    if (texto === '') return;

    const item = document.createElement('li');
    item.textContent = texto;

    item.addEventListener('click', () => {
        item.classList.toggle('concluida');
    });

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'X';
    botaoRemover.classList.add('btn-remover');
    botaoRemover.type = 'button';

    botaoRemover.addEventListener('click', (evento) => {
        evento.stopPropagation();
        lista.removeChild(item);
    });

    item.appendChild(botaoRemover);
    lista.appendChild(item);

    input.value = '';
    input.focus();
}

botaoAdicionar.addEventListener('click', adicionarTarefa);

input.addEventListener('keydown', (evento) => {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
});
