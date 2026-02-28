/*
&& -> false & true -> false "o valor mesmo"
|| ->

FALSY
false
0
'' "" ``
null / undefined
NaN
*/
//console.log('Luiz Otavio' && 'Maria');

/* function falaOi() {
    return 'Oi';
}
const vaiExecutar = false;

console.log(vaiExecutar && falaOi()); */
const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;
console.log(a || b || 'Joaozinho' || c || d || e); //NaN
