// const h1 = document.querySelector('.container h1');
// const data = new Date();


// function getDiaSemanaTexto(diaSemana) {
// const diaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta',
    
//     'Quinta', 'Sexta', 'Sábado'];

// return diaSemana[diaSemana];

// }
// function getNomeMes(numeroMes) {
//  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio',
//      'Junho', 'Julho',
//       'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

//       return meses[numeroMes];  
//  }
//   function zeroAEsquerda(num) {
//         return num >= 10 ? num : `0${num}`;
//   }

// function criaDate(data) {
//     const diaSemana = data.getDay;
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const nomeMes = getNomeMes(numeroMes);
    
//     return ( `${nomeDia}, ${data.getDate()} de
//      ${nomeMes} de ${data.getFullYear()} ${zeroAEsquerda(data.getHours())}:
//      ${zeroAEsquerda(data.getMinutes())}`);   
// }
// h1.innerHTML = criaData(data);

const h1 = document.querySelector('.container h1');
const data = new Date();
 h1.innerHTML = data.toLocaleDateString('pt-BR', {dateStyle: 'full',
     timeStyle: 'short' });