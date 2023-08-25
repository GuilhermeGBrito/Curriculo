function carregarConteudo(content) {
    contentFrame.src = content + ".html";
}

document.getElementById('btnResumo').addEventListener('click', () => carregarConteudo('./pages/resumo'));
document.getElementById('btnDadosPessoais').addEventListener('click', () => carregarConteudo('./pages/dados_pessoais'));
document.getElementById('btnHabilidades').addEventListener('click', () => carregarConteudo('./pages/habilidades'));
document.getElementById('btnFormacao').addEventListener('click', () => carregarConteudo('./pages/formacao'));
document.getElementById('btnCursos').addEventListener('click', () => carregarConteudo('./pages/cursos'));
document.getElementById('btnExperiencia').addEventListener('click', () => carregarConteudo('./pages/experiencia'));
document.getElementById('btnLinguas').addEventListener('click', () => carregarConteudo('./pages/linguas'));
document.getElementById('btnOutros').addEventListener('click', () => carregarConteudo('./pages/outros'));

