// let a = 'A';  // B
// let b = 'B';  // C 
// let c = 'C'; // A

// const numeros = [1, 2, 3];
// [a, b, c] =  numeros;

// console.log(a, b, c);

//... rest, ... spread

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2    
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);