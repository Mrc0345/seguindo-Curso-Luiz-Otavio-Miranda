/*
Operadores Lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/
const expressaoAnd = true && true && true && true; 
const expressaoOr = false || false || false || false;
console.log(expressaoAnd); //true

const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '12345';
console.log(vaiLogar); //true