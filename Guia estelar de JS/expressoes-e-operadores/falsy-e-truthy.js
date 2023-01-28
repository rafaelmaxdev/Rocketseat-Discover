/*
    Falsy
    Quando um valor é considerado false em contextos onde um booliano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

// Qualquer valor acima em um loop ou uma condição resultará em false
// console.log(NaN ? 'verdadeiro' : 'falso') // falso

/*

    TRUTHY
    Quando um valor é considerado true em contextos onde um booliano é obrigatório (condicionais e loops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/

// Qualquer valor acima em um loop ou uma condição resultará em true
console.log( Infinity ? 'verdadeiro' : 'falso') // verdadeiro