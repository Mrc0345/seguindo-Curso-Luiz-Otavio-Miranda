/*
PRIMITIVOS (imutaveis) - string, number, boolean, undefined, null (bigint, symbol)

Referencia (mutavel) - array,object, function - Passadps por referencia

*/
//             0123

//let nome = 'Luiz';
//nome[0] = 'R';
//console.log(nome[0], nome);

/* let a = 'A';
let b = a; //Copia
console.log(a,b);

a = 'Outra coisa'; // valor alterado de a
console.log(a,b); */

//Referencia
/*let a = [1,2,3];
let b = a;
let c = b;
console.log(a,b);

a.push(4);
console.log(a,b);

b.pop();
console.log(a, b);

a.push('Luiz');
console.log(c);*/

const a = { 
    nome: 'Luiz',
    sobrenome: 'Otavio'


};
const b ={...a} ;

a.nome = 'Joao';
console.log(a);
console.log(b);