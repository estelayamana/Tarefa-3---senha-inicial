function gerarSenha() {
    const nomeCompleto = document.getElementById('nome').value;
    const resultado = document.getElementById('resultado');

    if (validarNome(nomeCompleto)) {
        const sobrenome = obterSobrenome(nomeCompleto);
        const numVogais = contarVogais(nomeCompleto).toString().padStart(2, '0');
        const senha = sobrenome + numVogais;
        resultado.textContent = `Senha Inicial: ${senha}`;
    } else {
        resultado.textContent = 'Nome inválido. Digite seu nome completo.';
    }
}

function validarNome(nome) {
    // Lógica básica para validar nome (pode ser aprimorada)
    return nome.trim() !== '';
}

function obterSobrenome(nome) {
    const nomes = nome.split(' ');
    return nomes[nomes.length - 1].toLowerCase();
}

function contarVogais(nome) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return nome.split('').filter(letra => vogais.includes(letra.toLowerCase())).length;
}