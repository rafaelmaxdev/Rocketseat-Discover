// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã bom
// let pao = false
// let achocolatadoGelado = false

// const niceBreakfast = pao || achocolatadoGelado ? 'Café bom' : 'Café ruim'

// console.log(niceBreakfast) // Café ruim

// Maior de 18

let age = 17
const canDrive = age >= 18 ? 'can drive' : "can't drive"
console.log(canDrive) // can't drive