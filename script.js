function abrirModal() {
    document.getElementById('modalAviso').style.display = 'flex';
}

function fecharModal() {
    document.getElementById('modalAviso').style.display = 'none';
    document.getElementById('materia').value = '';
    document.getElementById('nota').value = '';
    document.getElementById('data').value = '';
    document.getElementById('nomeprof').value = '';
    document.getElementById('serie').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('foto').value = '';
}

function visualizarImagem(url) {
    const visualizador = document.getElementById('visualizadorImagem');
    const imagem = document.getElementById('imagemExpandida');
    imagem.src = url;
    visualizador.style.display = 'flex';
}

function fecharVisualizador() {
    document.getElementById('visualizadorImagem').style.display = 'none';
    document.getElementById('imagemExpandida').src = '';
}

function salvarProva() {
    const materia = document.getElementById('materia').value;
    const nota = document.getElementById('nota').value;
    const dataInput = document.getElementById('data').value;
    const nomeprofe = document.getElementById('nomeprof').value;
    const s = document.getElementById('serie').value;
    const n = document.getElementById('nome').value;
    const fotoInput = document.getElementById('foto');

    if (!materia || !nota || !dataInput) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const dataFormatada = dataInput.split('-').reverse().join('/');
    const container = document.getElementById('containerProvas');
    const novoCard = document.createElement('div');
    novoCard.className = 'bloconotas';

    let urlImagem = 'https://picsum.photos';

    if (fotoInput.files && fotoInput.files[0]) {
        urlImagem = URL.createObjectURL(fotoInput.files[0]);
    }

    novoCard.innerHTML = `
        <h3>Matéria: ${materia}</h3> 
        <p><strong>Nome do(a) aluno(a):</strong> ${n}</p>
        <p><strong>Nota:</strong> ${nota}</p>
        <p><strong>Data:</strong> ${dataFormatada}</p>
        <p><strong>Turma:</strong> ${s}</p>
        <p><strong>Nome do(a) professor(a):</strong> ${nomeprofe}</p>
        <div class="grupo-botoes">
            <button class="btn-acessar-imagem" onclick="visualizarImagem('${urlImagem}')">Acessar Imagem da Prova</button>
            <button class="btn-acessar" onclick="alert('Botão provisório')">Acessar Prova</button>
        </div>
    `;

    container.appendChild(novoCard);
    fecharModal();
}
