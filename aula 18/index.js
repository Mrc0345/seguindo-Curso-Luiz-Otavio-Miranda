function criaPessoa (nome, sobrenome, idade) {
    return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
};
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('Joao', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Mauro', 44);
const pessoa5 = criaPessoa('Jean', 'Marcio', 69);


console.log(pessoa1.nome, pessoa2.nome);