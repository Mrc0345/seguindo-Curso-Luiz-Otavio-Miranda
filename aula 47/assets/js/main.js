function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(event) {
    relogio.innerHTML = 'Cliquei no iniciar'
});

parar.addEventListener('click', function(event) {
    alert('Cliquei no pausar');
});

zerar.addEventListener('click', function(event) {
    alert('Cliquei no zerar');
});
